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
button.innerText = 'Finalizar';
button.type = 'submit';
section.appendChild(button);


for (let i = 0; i < products.length; i++){
    soma += products[i].valor
    let compra = document.createElement('li');
    let meuProduto = `${products[i].item}       ${products[i].valor}`
    compra.innerText= meuProduto
   list.appendChild(compra);
}

let valorTotal = document.createElement('li')
list.appendChild(valorTotal)
valorTotal.innerText = `Total     ${soma}`
