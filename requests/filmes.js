const Conteudo = (numeroFilme,diretor,date) => `<button id="myBtn"><h1 class="titulox">${numeroFilme}</h1><h2>Diretor: ${diretor}<h2> <h3>criado em :${date}</h3></button> `;
const UrlPlanets = (data) => `
        <p>${data.name}</p>
        <p>${data.climate}</p>
        <p>${data.population}</p>`;

const requestPlanetas = (url,film) => {
    return axios.get(url).then((res) => {
        const area  = document.querySelector(`#PrintArea${film-1}`).children[0].children[0]
        area.innerHTML += UrlPlanets(res.data)
    })
}
export const requestFilmes = (a,printArea) => {
    return axios.get(`https://swapi.dev/api/films/${a}`).then((res) => {
    
    if (a === ""){
        const conteudo = []
        for(var i=0; i<=res.data.count; i++){
            conteudo.push(`<section id="PrintArea${i}"></section>`)
        }

        printArea.innerHTML = conteudo.join("");
        for(var i=1; i<=res.data.count; i++){
        const area = document.querySelector(`#PrintArea${i-1}`)
        requestFilmes(i,area)
        area.innerHTML += `
        <div class="modal hidden">
            <div class="modal-content">
                <span class="close">&times;</span>
            </div>
        </div>`
        }
        return;
    }
    res.data.planets.forEach((planet) => {
        requestPlanetas(planet,a)
    })
    
    

    const conteudo = Conteudo(res.data.title,res.data.director,res.data.release_date);
    printArea.innerHTML += conteudo;
})


}