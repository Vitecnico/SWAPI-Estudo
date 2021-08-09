const Conteudo = (numeroFilme,diretor,date) => `<button id="myBtn"><h1 class="titulox">${numeroFilme}</h1><h2>Diretor: ${diretor}<h2> <h3>criado em :${date}</h3></button> `;
const UrlPlanets = (data) => `
<div class = "planeta">
        <p>Planeta ${data.name}</p>
        <p>Clima ${data.climate}</p>
        <p>Numero de Habitantes ${data.population}</p>
</div>`

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