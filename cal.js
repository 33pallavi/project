let b = document.querySelector("h1");
function addvalue(val){
 if (b.innerHTML=="0"){
    b.innerHTML = val
 }
 else{
    b.innerHTML+=val
 }
}
function calculation(){
    b.innerHTML = eval(b.innerHTML)
}
function delval(){
    b.innerHTML=b.innerHTML.slice(0,-1)
    if(b.innerHTML==''){
        b.innerHTML='0';
    }
}
function clearval(){
    b.innerHTML=''
    if(b.innerHTML==''){
        b.innerHTML='0';
    }
}