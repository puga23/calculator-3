let h1=document.querySelector("h1")
let span1=document.querySelector(".span1")
let span2=document.querySelector(".span2")
let span3=document.querySelector(".span3")
let body=document.querySelector("body")
console.dir(body)
function display(x){
    console.log(h1.textContent.length)
    if(h1.textContent.length<17){
         if(h1.textContent==="" && x==="+"){
            h1.textContent=""
         }
         else{ h1.textContent=h1.textContent+x}
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
span1.addEventListener("click", () =>{
    span1.style.opacity="1"
    span2.style.opacity="0"
    span3.style.opacity="0"
    body.classList.add("tema1")
    body.classList.remove("tema2")
})

span2.addEventListener("click", () =>{
    span1.style.opacity="0"
    span2.style.opacity="1"
    span3.style.opacity="0"
    body.classList.remove("tema2")
    body.classList.remove("tema1")
})
span3.addEventListener("click", () =>{
    span1.style.opacity="0"
    span2.style.opacity="0"
    span3.style.opacity="1"
    body.classList.add("tema2")
    body.classList.remove("tema1")
})
