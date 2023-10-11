const livros = require('./listaLivros');
const menorValor = require('./menorValor');

// Faça: Desk Checking
// O(n^2)

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice); 
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
    livros[indice] = livroMenorPreco;
    livros[menor] = livroAtual;

})
/*
for (let atual = 0; atual < livros.length - 1; atual++) {  
    let menor = menorValor(livros, atual); 
    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}
*/
console.log(livros);