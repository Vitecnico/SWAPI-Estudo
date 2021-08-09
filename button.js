const body = document.querySelector("body")



body.onclick = function(event){
  const clique = event.target

  if(clique.nodeName === "BUTTON"){
    const modal = clique.previousSibling
    modal.style.display = "block"
  }
  if(clique.nodeName === "SPAN"){
    const modal = clique.parentNode.parentNode
    modal.style.display = "none";
  }
  
}