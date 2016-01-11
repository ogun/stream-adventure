var split = require("split")
var map = require("through2-map")

var lineNumber = 1
process.stdin.pipe(split()).pipe(map(function (input){
    var returnValue = input.toString()
    if (lineNumber % 2) {
        returnValue = returnValue.toLowerCase()
    } else {
        returnValue = returnValue.toUpperCase()
    }
    lineNumber++
    
    return returnValue + "\n"
})).pipe(process.stdout)