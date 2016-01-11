var map = require("through2-map")

process.stdin.pipe(map(function (input) {
	return input.toString().toUpperCase()
})).pipe(process.stdout)