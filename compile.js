#!/usr/bin/env node
var fs = require('fs')

var arguments = process.argv.splice(2);

if (arguments.length == 0){
    console.log('usage: hamac filename')
    process.exit(1)
}
var filename = arguments[0]
var source = fs.readFileSync(filename)

var hexstring = source.toString('hex')

var codemap = {
    '0':'图样',
    '1':'续一秒',
    '2':'蛤',
    '3':'吼啊',
    '4':'大新闻',
    '5':'中国有句古话',
    '6':'香港',
    '7':'记者',
    '8':'图森破',
    '9':'学习',
    'a':'提高',
    'b':'知识水平',
    'c':'华莱士',
    'd':'跑得快',
    'e':'钦定',
    'f':'长者'
}

var out = '';


for (let ch of hexstring){
    out+=codemap[ch]
}


var out2= ''
count = 0
var l=0
for (let ch of out){
    count ++
    out2+=ch

    if(count >= 35+Math.sin(l/6)){
        count = 0
        out2+='\n'
        l++
    }

}

fs.writeFileSync(filename.replace('.js','.ha'),out2)