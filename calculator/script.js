var first=0;
var str;
function displayNumber(){
    var y=document.activeElement.id;
    if(str==undefined){
        str=y;
    }
    else{
        str=str+y;
        }
    document.getElementById("result").value=str;
}

//add back button function

function backButton(){
    document.getElementsByTagName("input")[0].value=str.slice(0,-1);
    str=document.getElementsByTagName("input")[0].value;
}
document.addEventListener("keydown",function(event){
    if(event.key=="Backspace"){
        document.getElementsByTagName("input")[0].value=str.splice(0,-1);
        str=document.getElementsByTagName("input")[0].value;
    }
})

//arithmatic operation

var pre;
function operation(){
    if(pre==null){
        first=parseFloat(document.getElementById("result").value);
        document.getElementById("result").value=null;
        pre=document.activeElement.id;
        str=null;
    }
    else{
        arithmatic();
    }
}

//add AC button

function restart(){
    document.getElementById("result").value=null;
    str=null;
}

//add result

function Result(){
    if(pre==null){
        first=document.getElementById("result").value;
        document.getElementById("result").value=first;
        str=null;
    }
    else{
        arithmatic();
        pre=null;
    }
}

//function of operations

function arithmatic(){
    if(pre=="+"){
        first=first+parseFloat(document.getElementById("result").value);
        pre=document.activeElement.id;
        document.getElementById("result").value=first;
        str=null;
        }
    else if(pre=="-"){
        first=first-parseFloat(document.getElementById("result").value);
        pre=document.activeElement.id;
        document.getElementById("result").value=first;
        str=null;
    }
    else if(pre=="*"){
        first=first*parseFloat(document.getElementById("result").value);
        pre=document.activeElement.id;
        document.getElementById("result").value=first;
        str=null;
    }
    else if(pre=="%"){
        first=first%parseFloat(document.getElementById("result").value);
        pre=document.activeElement.id;
        document.getElementById("result").value=first;
        str=null;
    }
    else if(pre=="/"){
        first=first/parseFloat(document.getElementById("result").value);
        pre=document.activeElement.id;
        document.getElementById("result").value=first;
        str=null;
    }
}