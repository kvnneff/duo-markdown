/*global describe, it*/
var assert = require('assert')
var path = require('path')
var Duo = require('duo')
var vm = require('vm')
var markdown = require('..')
var fixtures = path.join.bind(path, __dirname, 'fixtures')

describe('duo-markdown', function () {
  it('should render markdown to html', function (done) {
    var root = fixtures()
    var duo = Duo(root)
      .entry('simple.md')
      .cache(false)
      .use(markdown())
    duo.run(function (err, results) {
      assert(err === null)
      var str = evaluate(results.code).main
      assert(str.trim() === '<p>http://foo.com</p>')
      done()
    })
  })

  it('should pass options to markdown-it', function (done) {
    var root = fixtures()
    var duo = Duo(root)
      .entry('simple.md')
      .cache(false)
      .use(markdown({linkify: true}))
    duo.run(function (err, results) {
      assert(err === null)
      var str = evaluate(results.code).main
      assert(str.trim() === '<p><a href="http://foo.com">http://foo.com</a></p>')
      done()
    })
  })
})

/**
 * Evaluate `js`.
 *
 * @return {Object}
 */

function evaluate (js) {
  var ctx = { window: {}, document: {} }
  vm.runInNewContext('main =' + js + '(1)', ctx, 'main.vm')
  vm.runInNewContext('require =' + js + '', ctx, 'require.vm')
  return ctx
}
