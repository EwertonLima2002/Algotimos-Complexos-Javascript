let vetor = []

function adicionar(){
    let valor_input = valores.value

    vetor.push(valor_input)

    valores_vetor.innerHTML = `Vetor:${vetor}`
}

function ordenar(){
    for(let i = 0; i < vetor.length; i++){
        for(let j = 0; j < vetor.length - i - 1; j++){
            if(Number(vetor[j]) > Number(vetor[j + 1])){
                let vetorOrdenado = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = vetorOrdenado;
            }
        }
    }
    algoritimo_ordenado.innerHTML = `Vetor Ordenado:${vetor}`;
}
