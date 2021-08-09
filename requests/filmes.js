const Conteudo = (numeroFilme,diretor,date) => `<button id="myBtn"><h1 class="titulox">${numeroFilme}</h1><h2>Diretor: ${diretor}<h2> <h3>criado em :${date}</h3></button> `;
const UrlPlanets = (data) => `<div id="myModal" class="modal"> <div class="modal-content"> <span class="close">&times;</span> <p>${data.name}</p><p>${data.climate}</p><p>${data.population}</p></div></div> `;
//const UrlNave = (data) => `<p>"nave"${data.name}</p>`;

const requestPlanetas = (url,area) => {
    return axios.get(url).then((res) => {
        area.innerHTML += UrlPlanets(res.data)})
}
// const requestStarship = (url,area) => {
//     return axios.get(url).then((res) => {
//         area.innerHTML += UrlNave(res.data)})
// }

export const requestFilmes = (a,printArea) => {
    return axios.get(`https://swapi.dev/api/films/${a}`).then((res) => {
    
    if (a === ""){
    const conteudo = []
    for(var i=0; i<=res.data.count; i++){
        conteudo.push(`<section id="PrintArea${i}"></section>`)
    }

    printArea.innerHTML = conteudo.join("");
    for(var i=1; i<=res.data.count; i++){
    requestFilmes(i,document.querySelector(`#PrintArea${i-1}`))
}
return;}

    res.data.planets.forEach((planet) => {
    const area  = document.querySelector(`#PrintArea${a - 1}`)
    requestPlanetas(planet,area)
    })
    
    /*res.data.starships.forEach((starship) => {
        const area  = document.querySelector(`#PrintArea${a - 1}`)
        requestStarship(starship,area)
        })*/
    

    const conteudo = Conteudo(res.data.title,res.data.director,res.data.release_date);
    //const urlPlanet = UrlPlanets(res.data.planets.length);
    printArea.innerHTML = conteudo;
    //printArea.innerHTML = urlPlanet;
})


}