var r = document.querySelector(".result");
var op1 = document.querySelector("#opening_brace");
var op2 = document.querySelector("#closing_brace");
var op3 = document.querySelector("#modulo");
var ac = document.querySelector("#AC");
var div = document.querySelector("#division");
var mul = document.querySelector("#mul");
var sub = document.querySelector("#sub");
var add = document.querySelector("#add");
var equal = document.querySelector("#res");
var dec = document.querySelector("#decimal");
var dig0 = document.querySelector("#zero");
var dig1 = document.querySelector("#one");
var dig2 = document.querySelector("#two");
var dig3 = document.querySelector("#three");
var dig4 = document.querySelector("#four");
var dig5 = document.querySelector("#five");
var dig6 = document.querySelector("#six");
var dig7 = document.querySelector("#seven");
var dig8 = document.querySelector("#eight");
var dig9 = document.querySelector("#nine");
var back = document.querySelector("#back");
var a = '';
var b = '';
var num = [];


r.textContent = "0";

function clearScr(){
    r.innerHTML = '';
    while(num.length > 0){
        num.pop();
    }
    a = '';
    b = '';
}

function getresult(){
    try{
        eval(a);
    }catch(e){
        if(e instanceof SyntaxError){
            r.innerHTML = " = ERROR";
        }
    }
    r.innerHTML = "= "+eval(a);
    var i;
    for(i=0;i<num.length;i++){
        num.pop();
    }
    a=b;
    b='';
}

function SendNum(digit){
    a = a+digit;
    r.innerHTML = a;
    num.push(digit);
}
function backspace(){
    num.pop();
    a='';
    var i;
    for(i=0;i<num.length;i++){
        a=a+num[i];
    }
    r.innerHTML=a;
}


ac.addEventListener('click', clearScr);
dig0.addEventListener('click', function(){
    SendNum('0');
});
dig1.addEventListener('click', function(){
    SendNum('1');
});
dig2.addEventListener('click', function(){
    SendNum('2');
});
dig3.addEventListener('click', function(){
    SendNum('3');
});
dig4.addEventListener('click', function(){
    SendNum('4');
});
dig5.addEventListener('click', function(){
    SendNum('5');
});
dig6.addEventListener('click', function(){
    SendNum('6');
});
dig7.addEventListener('click', function(){
    SendNum('7');
});
dig8.addEventListener('click', function(){
    SendNum('8');
});
dig9.addEventListener('click', function(){
    SendNum('9');
});
op1.addEventListener('click', function(){
    SendNum('(');
});
op2.addEventListener('click', function(){
    SendNum(')');
});
op3.addEventListener('click', function(){
    SendNum('%');
});
div.addEventListener('click', function(){
    SendNum('/');
});
mul.addEventListener('click', function(){
    SendNum('*');
});
sub.addEventListener('click', function(){
    SendNum('-');
});
add.addEventListener('click', function(){
    SendNum('+');
});
equal.addEventListener('click', getresult);
dec.addEventListener('click', function(){
    SendNum('.');
});
back.addEventListener('click', backspace);
