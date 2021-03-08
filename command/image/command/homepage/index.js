/**
 * @author Youngoat@163.com
 * @create 2021-03-08
 */

'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	, noda = require('noda')
	, open = require('jinang/open')
	
	/* in-package */
	;

/**
 * Parsed command line arguments.
 * 经过解析得到的命令行参数对象。
 * @param {Object} ARGS 
 */
function main(ARGS) {
	let { name } = ARGS;
	console.log(`Open homepage of docker image "${name}".`);
	let urlname = `https://hub.docker.com/_/${name}`;
	open(urlname);
}

main.desc = 'Open homepage of specified image.';
module.exports = main;