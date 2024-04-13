let h1=document.querySelector("h1")
console.dir(h1)
function display(x){
    console.log(h1.textContent.length)
    if(h1.textContent.length<17){
         h1.textContent=h1.textContent+x
     }
    // h1.textContent=h1.textContent+x
}
function reset(){
    h1.textContent=""
}
function tolia(){
    h1.textContent=eval(h1.textContent)
}
function del(){
    h1.textContent=h1.textContent.slice(0,-1)
}