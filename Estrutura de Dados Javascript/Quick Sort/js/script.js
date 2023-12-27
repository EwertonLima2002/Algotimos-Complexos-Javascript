let vetor = [];

function adicionar() {
    let valor_input = valores.value;
    vetor.push(Number(valor_input)); // Convert input to number before pushing to the vetoray
    valores_vetor.innerHTML = `Vetor: ${vetor}`;
}

function ordenar() {
    quickSort(vetor, 0, vetor.length - 1);
    algoritimo_ordenado.innerHTML = `Vetor Ordenado: ${vetor}`;
}

function quickSort(vetor, low, high) {
    if (low < high) {
        let pi = particao(vetor, low, high);
        quickSort(vetor, low, pi - 1);
        quickSort(vetor, pi + 1, high);
    }
}

function particao(vetor, low, high) {
    let pivot = vetor[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (vetor[j] < pivot) {
            i++;

            let temp = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = temp;
        }
    }


    let temp = vetor[i + 1];
    vetor[i + 1] = vetor[high];
    vetor[high] = temp;

    return i + 1;
}
