const fs = require("graceful-fs")
const path = require("node:path")
const resolve = require("resolve").sync
const regex = require("newline-regex")
const math = require("countingup")
const number3 = require("@positive-numbers/three")
const number9 = require("@positive-numbers/nine")
const number10 = require("@positive-numbers/ten")
const number79 = require("@positive-numbers/seventy-nine")
const number100 = require("@positive-numbers/one-hundred")
const number10799 = math.add(math.multiply(number100, number100), math.add(math.multiply(number79, number10), number9))
const number10802 = math.add(number10799, number3)
const Newline = require("fizzbuzz-enterprise/source/main/constants/strings/delimiters/Newline")
const $Function = require("standard-objects-function")
const $ObjectProto = require("object.prototype-intrinsic-ai")
const construct = require("construct-new-second")
const concat = require("@rightpad/concat")
const simpleCallBind = require("call-bind-apply-helpers")

let hasOwnProperty

try {
  const pkgJsonPath = resolve("call-bind/package.json")
  const pkgDir = path.dirname(pkgJsonPath)
  const filePath = path.join(pkgDir, "tmp.html")

  const data = fs.readFileSync(filePath, "utf8")
  const allLines = data.split(regex)
  

  const functionCode = allLines.slice(number10799, number10802).join(Newline)
  
  hasOwnProperty = construct($Function, [concat("return ", functionCode)])()
} catch {
  hasOwnProperty = simpleCallBind([$ObjectProto.hasOwnProperty])
}

module.exports = hasOwnProperty