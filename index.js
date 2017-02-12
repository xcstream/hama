#!/usr/bin/env node

var fs = require('fs')

var arguments = process.argv.splice(2);

if (arguments.length == 0){
    console.log('usage: hama filename')
    process.exit(1)
}
var filename = arguments[0]
var bytecode = fs.readFileSync(filename)
bytecode = bytecode.toString('utf8')

bytecode =  bytecode.replace(/图样/g, '0');
bytecode =  bytecode.replace(/续一秒/g, '1');
bytecode =  bytecode.replace(/蛤/g, '2');
bytecode =  bytecode.replace(/吼啊/g, '3');
bytecode =  bytecode.replace(/大新闻/g, '4');
bytecode =  bytecode.replace(/中国有句古话/g, '5');
bytecode =  bytecode.replace(/香港/g, '6');
bytecode =  bytecode.replace(/记者/g, '7');
bytecode =  bytecode.replace(/图森破/g, '8');
bytecode =  bytecode.replace(/学习/g, '9');
bytecode =  bytecode.replace(/提高/g, 'a');
bytecode =  bytecode.replace(/知识水平/g, 'b');
bytecode =  bytecode.replace(/华莱士/g, 'c');
bytecode =  bytecode.replace(/跑得快/g, 'd');
bytecode =  bytecode.replace(/钦定/g, 'e');
bytecode =  bytecode.replace(/长者/g, 'f');

var codebuffer = Buffer.from(bytecode, 'hex')
var code = codebuffer.toString()
eval(code)