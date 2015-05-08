/**
 * Module Dependencies
 */

var Markdown = require('markdown-it')
var str2js = require('string-to-js')

/**
 * Expose `plugin`
 */

module.exports = plugin

/**
 * Markdown plugin
 */

function plugin (opts) {
  opts = opts || {}

  return function markdown (file, duo, done) {
    if (file.type !== 'md') return done()
    var md = Markdown(opts)
    file.type = 'js'
    file.src = str2js(md.render(file.src))
    return done()
  }
}
