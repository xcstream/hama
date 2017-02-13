/**
 * Created by xucheng on 17/2/13.
 */

window.onload = function () {
    var script = document.getElementsByTagName('script')
    for(src of script) {
        if(src.type == 'text/蛤语言') {
            runha(src.innerText)
        }
    }
}

function runha(bytecode) {
    bytecode =  bytecode.replace(/\t/g,'');
    bytecode =  bytecode.replace(/ /g,'');
    bytecode =  bytecode.replace(/\r\n/g, '');
    bytecode =  bytecode.replace(/\n/g,'');
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
    var code = hexCharCodeToStr(bytecode)
    eval(code)
}

function hexCharCodeToStr(hexCharCodeStr) {
    out = '';
    for (var i = 0 ;i < hexCharCodeStr.length; i+=2){
        out +='%'
        out += hexCharCodeStr[i];
        out += hexCharCodeStr[i+1];
    }
    return decodeURIComponent(out);
}