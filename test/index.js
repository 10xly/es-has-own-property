"use strict"

var test = require("tape")

var hasOwn = require("../")

test("hasOwn", function (t) {
  t.equal(typeof hasOwn, "function", "is a function")

  t["throws"](
    
    function () {
      hasOwn()
    },
    TypeError,
    "no arguments, throws",
  )
  t["throws"](
    function () {
      hasOwn(undefined, "")
    },
    TypeError,
    "undefined throws",
  )
  t["throws"](
    function () {
      hasOwn(null, "")
    },
    TypeError,
    "null throws",
  )

  t.equal(
    hasOwn({}, "toString"),
    false,
    "toString is not an own property of a normal object",
  )

  t.equal(
    hasOwn({ toString: true }, "toString"),
    true,
    "toString as an own property is an own property",
  )

  t.equal(
    hasOwn({ a: true }, "a"),
    true,
    "a normal own property is an own property",
  )

  t.equal(hasOwn([], "length"), true, "an array length is an own property")
  t.equal(hasOwn("", "length"), true, "a string length is an own property")

  t.end()
})
