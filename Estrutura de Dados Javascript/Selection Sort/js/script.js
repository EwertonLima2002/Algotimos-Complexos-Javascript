let vetor = []

function adicionar(){
    let valor_input = valores.value

    vetor.push(valor_input)

    valores_vetor.innerHTML = `Vetor:${vetor}`
}

function ordenar(){
 
    
    algoritimo_ordenado.innerHTML = `Vetor Ordenado:${vetor}`;
}
