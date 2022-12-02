/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
	"rootDir": "src",
	"moduleFileExtensions": [
		"js",
		"json",
		"ts"
	],
	"testRegex": ".spec.ts$",
	"transform": {
		"^.+\\.(t|j)s$": "ts-jest"
	},
	"coverageDirectory": "../coverage",
	"testEnvironment": "node"
}