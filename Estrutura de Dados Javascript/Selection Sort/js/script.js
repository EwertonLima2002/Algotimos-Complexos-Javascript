let vetor = []

function adicionar(){
    let valor_input = valores.value

    vetor.push(valor_input)

    valores_vetor.innerHTML = `Vetor:${vetor}`
}

function ordenar(){
    insertionSort(vetor);
    algoritimo_ordenado.innerHTML = `Vetor Ordenado:${vetor}`;
}

function insertionSort(vetor) {
    for (let i = 1; i < vetor.length; i++) {
        let j = i - 1;
        let chave = vetor[i];
        while (j >= 0 && vetor[j] > chave) {
            vetor[j + 1] = vetor[j];
            j--;
        }
        vetor[j + 1] = chave;
    }
}