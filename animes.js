const animes = require("./animes.json")

console.log(`Total de animes: ${animes.length}`)

function addAnimes(obj) {
    animes.push(obj)
    console.log(`\nAnime "${obj.titulo}" adicionado com sucesso!`)
}

function mostrarAnimes(lista) {
    console.log("---- ESTOQUE DE ANIMES ----")
    lista.forEach((item) => {
        console.log(`${item.titulo} - 
                     ${item.autor} 
                Ano: ${item.ano} 
          Episódios: ${item.episodios} 
           Preço: R$ ${item.preco.
            toFixed(2).replace(".", ",")}`)
    })
}

function filtrarPorPreco(valorMaximo) {
    console.log(`\n--- ANIMES ATÉ R$ ${valorMaximo} ---`)
    const filtrados = animes.filter(anime => anime.preco < valorMaximo)
    
    filtrados.forEach(anime => {
        console.log(`${anime.titulo} - R$ ${anime.preco.toFixed(2).replace(".", ",")}`)
    })
}


addAnimes({
    titulo: "Berserk",
    autor: "Kentaro Miura / OLM",
    ano: 1997,
    episodios: 25,
    sinopse: "Guts, um guerreiro solitário...",
    preco: 159.90
})

filtrarPorPreco(150)



let animesDesconto = animes.map((anime) => {
    return {...anime, preco: anime.preco * 0.9}
})
console.log("Com desconto de 10%:")
mostrarAnimes(animesDesconto)



