var content = document.querySelector(".name");


var value = 'Manisha Kesarwani.';
var i = 1;
var idx = 1;
function setValue(name){
    content.textContent = name;
}

function getsubstring(name, idx){
    return value.substring(0, idx);
}



setInterval(function (){
    var substring = getsubstring(value, i);
    setValue(substring);
    if(i === value.length){
        idx = -1;
    }
    if(i === 0){
        idx = 1;
    }
    i = i+idx;
}
    , 100);