
const body = document.querySelector("body")
const span = document.querySelector("span")



body.onclick = function(event){
  if(event.target.nodeName === "BUTTON"){
    span.style.display = "block"
  }
  if(event.target.nodeName === "SPAN"){
    span.style.display = "none";
  }
  
}