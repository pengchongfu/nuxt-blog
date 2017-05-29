require('shelljs/global')
var path = require('path')
var fs = require('fs')
var yaml = require('js-yaml')

var reg = /^(-{3,}|;{3,})\n([\s\S]+?)\n\1(?:$|\n([\s\S]*)$)/

function PostPlugin(options) {
}

PostPlugin.prototype.apply = function(compiler) {
  compiler.plugin("entry-option", function() {
    generateMetaData()
  })
}

function generateMetaData() {
  console.log('generate meta data\n')
  var postsPath = path.resolve(__dirname, '../posts')
  var postsMetaList = []
  ls(path.resolve(postsPath, '*.md')).forEach(function (post) {
    var meta
    var content = cat(post)
    var match = reg.exec(content)
    if (match) {
      var yfm = match[2]
      try {
        meta = yaml.load(yfm)
        meta.content = /\s+(.+)\s+/.exec(match[3])[1]
      } catch (e) {
        console.log(e)
      }
      postsMetaList.unshift(meta)
    }
  })
  fs.writeFileSync(path.resolve(__dirname, '../posts/meta.json'), JSON.stringify(postsMetaList))
  console.log('generate meta finished\n')
}

module.exports = PostPlugin