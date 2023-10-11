const livros = require('./listaLivros');
const troca = require('./troca');

// Faça: Desk Checking
// 

function insertionSort(lista) {
    livros.forEach((_, atual) => {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            troca(lista, analise);
            analise--;
        }
    });
    console.log(lista);
}

insertionSort(livros);