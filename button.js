
const body = document.querySelector("body")
const span = document.querySelector("span")



body.onclick = function(event){
  console.log(event.target);
  const modal = document.querySelector("#myModal")
  if(event.target.nodeName === "BUTTON"){
    modal.style.display = "block"
  }
  if(event.target.nodeName === "SPAN"){
    modal.style.display = "none";
  }
  
}