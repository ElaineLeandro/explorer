const  PassThrough = require('stream').PassThrough
const getInfo = require('info')
const utils = require('./utils')
const formatUtils = require('./format')
const sig = require('sig')
const miniget = require('m3u8stream')
const m3u8stream = require('m3u8stream')
const {parseTimesTamp} = require('m3u8stream')
/**
 * @param {string}
 * @param {!Objeto}
 * @returns {ReadableStream}
*/

const ytdl = (link, options) => {
  const stream = createStream(options);
  ytdl.getInfo(link, options).then(info =>{
    downloadFromInfoCallback(stream, info, options)
  }, stream.emit.bind(stream, 'error'));
  return stream
};
module.exports = ytdl;

ytdl.getBasicInfo = getInfo.getBasicInfo;
ytdl.getInfo = getInfo.getInfo;
ytdl.chooseFormat = formatUtils.chooseFormat;
ytdl.filterFormats = formatUtils.filterFormats;
ytdl.validateID = urlUtils.validateID;
ytdl.validateURL = urlUtils.validateURL;
ytdl.getURLVideoID = urlUtils.getURLVideoID;
ytdl.cache = {
  sig: sig.cache,
  info: getInfo.cache,
  watch: getInfo.watchPageCache,
  cookie: getInfo.cookieCache,
}

ytdl.version = require('../packege.jason').version

const createStream = options => {
  const stream = new PassThrough({
    highWaterMark: (options && options.highWaterMark) || 1024 * 512,
  })
  stream._destroy = () => {stream.destroyed = true}
  return stream
}

const pipeAndRead = (req, stream, end) =>{
  // Forwards events from the request to the stream.
  [
    'abort', 'request', 'close', ' response', 'redirect', 'retry', 'reconnect', 
  ].forEach(event => {
    req.pipe(stream, {end})
  })
}

/**
 * chooses a format to download.
 * 
 * @param {stream.Readable} stream
 * @param {Object} info
 * @param {Object} options
 */

const downloadFromInfoCallback =( stream, info, options) =>{
  options = options || {}

  let err = utils.playError(info.player_response, ['UNPLAYABLE', 'LIVE_STREAM_OFFLINE', 'LOGIN_REQUIRED'])
  if(err){
    stream.emit('error', err);
    return;
  }
}

if(!info.formats.length){
  stream.emit('error',  Error('this video in unavailable'))
  return;
}

let format;
try{
  format = formatUtils.chooseFormat(info.formats, options)
}catch(e){
  stream.emit('error', e);
  return;
}
stream.emit('info', info, format)
if(stream.destroyed){
  return
}
let contentLength, downloaded = 0
const ondata = chunk => {
  downloaded += chunk.length
  stream.emit('progress', chunk.length, downloaded, contentLength)
}

if (options.IPv6Block){
  options.requestOptions = Object.assign({}, options.requestOptions, {
    family: 6,
    localAddress:  utils.getRandomIPv6(options.IPv6Block)
  })
}

const dlChunkSize = options.dlChunkSize || 1024 * 1024 * 10
let req
let shouldEnd = true;

if (format.isHLS || format.isDashMPD){
  req = m3u8stream(format.url, {
    chunkReadahead: + info.live_chunk_readahead,
    begin: options.begin || (format.isLive && Date.now()),
    liveBuffer: options.requestOptions,
    parser: format.isDashMPD ? 'dash-mpd' : 'm3u8',
    id: format.itag,
  })

  req.on('progress', (segment, totalSegment) =>{
    stream.emit('progress', segment, totalSegment)
  })
}