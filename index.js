const products = [{
    id: 1,
    item: 'Uva Crimson',
    valor: 44.99,
},{
    id: 2,
    item: 'Vinho Canção',
    valor: 17.98,
},{
    id: 3,
    item: 'Água de coco',
    valor: 8.99,
},{
    id: 4,
    item: 'Mamão',
    valor: 9.98,
},{
    id: 5,
    item: 'Água tônica',
    valor: 17.98,
}];
const main = document.createElement("main");
const body = document.querySelector("body");
body.appendChild(main);
const list = document.createElement('ul');
main.appendChild(list);
let soma = 0;
const button = document.createElement('button')
const section = document.createElement('section');
main.appendChild(section);
button.innerText = 'Finalizar compra';
button.type = 'submit';
section.appendChild(button);
const array1 = [];
products.forEach(element => {
    soma += element.valor
    array1.push(soma)
    let compra = document.createElement('li');
    let nomeProduto = document.createElement('p')
    let valorProduto = document.createElement('p')
    nomeProduto.innerText=element.item
    valorProduto.innerText=element.valor
   // let meuProduto = `${element.item}       ${element.valor}`
  //  compra.innerText= meuProduto
    list.appendChild(compra);
    compra.appendChild(nomeProduto);
    compra.appendChild(valorProduto);
});

let valorTotal = document.createElement('li')
list.appendChild(valorTotal)
valorTotal.innerText = `Total     ${soma}`

