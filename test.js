var fs = require('fs')
var test = require('tape')
var postcss = require('postcss')
var inherit = require('postcss-acss-inherit')
var safetyInherit = require('./')

test('throw error: cannot inherit rule sets have `@use`', function (t) {
    var css = fs.readFileSync('fixture.css', 'utf-8').trim()
    var actual = function () {
        return postcss()
            .use(safetyInherit(css))
            .use(inherit(css))
            .process(css)
            .css;
    }

    t.throws(actual, /cannot inherit rule sets have `@use`/)
    t.end()
})
