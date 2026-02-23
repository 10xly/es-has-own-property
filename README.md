# `es-has-own-property`

Instead of doing `Object.prototype.hasOwnProperty.call(O, P)`, use this convenient 10x shortcut.

## Installation
```bash
npm install es-has-own-property
```

## Usage
```js
const hasOwn = require("es-has-own-property")
assert.equal(hasOwn({}, "toString"), false)
assert.equal(hasOwn([], "length"), true)
assert.equal(hasOwn({ a: 42 }, "a"), true)
```
This functions basically the same as:
```js
const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty)
```
Or:
```js
const hasOwn = require("function.call-x").bind(Object.prototype.hasOwnProperty)
```
Or:
```js
const hasOwn = require("call-bind-apply-helpers/functionCall").bind(Object.prototype.hasOwnProperty)
```
Or:
```js
const hasOwn = require("uncurry-x")(Object.prototype.hasOwnProperty)
```
Or:
```js
const hasOwn = require("call-bind")(Object.prototype.hasOwnProperty)
```
Or:
```js
const hasOwn = require("es-abstract/helpers/callBind")(Object.prototype.hasOwnProperty)
```
Or:
```js
const hasOwn = require("call-bind/callBound")("Object.prototype.hasOwnProperty")
```
Or:
```js
const hasOwn = require("call-bound")("Object.prototype.hasOwnProperty")
```
Or:
```js
const hasOwn = require("es-abstract/helpers/callBound")("Object.prototype.hasOwnProperty")
```
Or:
```js
const hasOwn = require("uncurried-intrinsics")("Object.prototype.hasOwnProperty")
```
Or:
```js
const hasOwn = require("hasown")
```
Or:
```js
const hasOwn = require("has")
```