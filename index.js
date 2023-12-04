/*
var listaDeCarros = ["Palio", "Jetta", "Gol", "Maverick", "V12"];

var elementoLista = document.getElementById("lista");

var elementoItem = document.createElement("li");
elementoItem.innerText = "Palio";
elementoLista.appendChild(elementoItem);

listaDeCarros.forEach(carro => {
    elementoItem = document.createElement("li");
    elementoItem.innerText = carro;
    elementoLista.appendChild(elementoItem);
    
})

//EXEMPLOS TIMES
var elementoLista = document.getElementById("lista")

var flamengo = { nome: "Flamengo", cor: ["Vermelho", "Preto"] };
var cruzeiro = { nome: "Cruzeiro", cor: ["Azul"] };
var atletico = { nome: "Atlético", cor: ["Preto", "Branco"] };

var listaDeTimes = [flamengo, cruzeiro, atletico];
console.log(listaDeTimes)
var li = document.createElement("li")

listaDeTimes.forEach(time => {

    li = document.createElement("li");
    console.log(time.cor)
    if (time.nome == "Flamengo") {
        if (time.cor.length == 1) {
            li.innerText = "A seleção se chama " + time.nome + " e suas cor é " + time.cor

        }
        else {
            li.innerText = "A seleção se chama " + time.nome + " e suas cores são " + time.cor[0] + " e " + time.cor[1];

        }
    }
    else {
        if (time.cor.length == 1) {
            li.innerText = "O time se chama " + time.nome + " e suas cor é " + time.cor

        }
        else {
            li.innerText = "O time se chama " + time.nome + " e suas cores são " + time.cor[0] + " e " + time.cor[1];

        }
    }
    elementoLista.appendChild(li)



})*/


