// JavaScript não possui por padrão um "Scanner", então farei um array com tamanho definido
// mas as funções funcionam em qualquer array

const vetor = [3, 56, 94, 11, 135, 15, 1588, 153, 2135, 153, 7, 9, 8, 2]


function mostraOrdemCrescente() {
    let vetorEmOrdemCrescente = vetor.sort(function (a, b) {
        return a - b;
    });
    console.log(vetorEmOrdemCrescente)
}

function mostraOrdemDecrescente() {
    let vetorEmOrdemDecrescente = vetor.sort(function (a, b) {
        return b - a;
    });
    console.log(vetorEmOrdemDecrescente)
}


function mostraMenorValor() {
    let menorValor = vetor.reduce((acumulador, valor) => {
        if (acumulador < valor) return acumulador
        return valor;
    })
    console.log(`menorValor é ${menorValor} `)
}




function mostraMaiorValor() {
    let maiorValor = vetor.reduce((acumulador, valor) => {
        if (acumulador > valor) return acumulador
        return valor;
    })
    console.log(`menorValor é ${maiorValor} `)

}


function calculaMedia() {
    // soma os elementos
    let soma = vetor.reduce(function (acumulador, valor) {
        acumulador += valor;
        return acumulador
    });

    // divide a soma pela quantidade de elementos
    let media = soma / vetor.length;
    console.log(`a média é ${media}`)
}
calculaMedia()
