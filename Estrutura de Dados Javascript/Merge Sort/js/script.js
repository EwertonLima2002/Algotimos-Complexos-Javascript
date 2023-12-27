let vetor = []

function adicionar(){
    let valor_input = valores.value

    vetor.push(valor_input)

    valores_vetor.innerHTML = `Vetor:${vetor}`
}

function ordenar() {
    vetor = mergeSort(vetor);
    algoritimo_ordenado.innerHTML = `Ordenado: ${vetor}`;
}

function mergeSort(vetor) {
    if (vetor.length <= 1) {
        return vetor;
    }

    const meio = Math.floor(vetor.length / 2);
    const metadeEsquerda = mergeSort(vetor.slice(0, meio));
    const metadeDireita = mergeSort(vetor.slice(meio));

    return merge(metadeEsquerda, metadeDireita);
}

function merge(vetorEsquerda, vetorDireita) {
    let resultado = [];
    let i = 0;
    let j = 0;

    while (i < vetorEsquerda.length && j < vetorDireita.length) {
        if (Number(vetorEsquerda[i]) < Number(vetorDireita[j])) {
            resultado.push(vetorEsquerda[i]);
            i++;
        } else {
            resultado.push(vetorDireita[j]);
            j++;
        }
    }

    return resultado.concat(vetorEsquerda.slice(i)).concat(vetorDireita.slice(j));
}
