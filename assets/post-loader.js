var reg = /^(-{3,}|;{3,})\n([\s\S]+?)\n\1(?:$|\n([\s\S]*)$)/
var yaml = require('js-yaml')

module.exports = function (content) {
  var match = reg.exec(content)
  var meta
  if (!match) {
    throw new Error('post not valid')
  }
  var rawMeta = match[2]
  var content = match[3]
  try {
    meta = yaml.load(rawMeta)
  } catch (e) {
    throw new Error(e)
  }
  return JSON.stringify({
    content: content,
    meta: meta
  })
}