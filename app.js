
let itemsCar =[]
const list = [
    {
        id:1,
        name:'La carretera1',
        img:'../asset/images/LaCarretera.jfif',
        price:30000,
        category:'Terror',
        description:'La carretera es una novela post-apocalíptica de ciencia ficción escrita en 2006 por el novelista estadounidense Cormac McCarthy, creador de otras novelas como No es país para viejos y la trilogía de la frontera.',
        stock:10
    },
    {
        id:2,
        name:'La carretera2',
        img:'../asset/images/LaCarretera.jfif',
        price:30000,
        category:'Terror',
        description:'La carretera es una novela post-apocalíptica de ciencia ficción escrita en 2006 por el novelista estadounidense Cormac McCarthy, creador de otras novelas como No es país para viejos y la trilogía de la frontera.',
        stock:10
    },
    {
        id:3,
        name:'La carretera3',
        img:'../asset/images/LaCarretera.jfif',
        price:30000,
        category:'Terror',
        description:'La carretera es una novela post-apocalíptica de ciencia ficción escrita en 2006 por el novelista estadounidense Cormac McCarthy, creador de otras novelas como No es país para viejos y la trilogía de la frontera.',
        stock:10
    },
    {
        id:4,
        name:'La carretera',
        img:'../asset/images/LaCarretera.jfif',
        price:30000,
        category:'Terror',
        description:'La carretera es una novela post-apocalíptica de ciencia ficción escrita en 2006 por el novelista estadounidense Cormac McCarthy, creador de otras novelas como No es país para viejos y la trilogía de la frontera.',
        stock:10
    }
]
const container = document.getElementById('container')
function produts(products) {
    products.forEach(item => {
        const newItem = document.createElement('div')
        newItem.classList='cart'
        newItem.innerHTML = `
        <div class="top">
        <h3>${item.name}</h3>
        <img src="${item.img}" alt="">
        </div>
        <p id="description">${item.description}</p>
        <p id="category">Categoria:${item.category}</p>
        <p id="stock">Disponibles:${item.stock}</p>
        <p id="price">$${item.price}</p>
        <button id="${item.id-1}">Agregar</button>
        `;
        container.appendChild(newItem);

    });

}

produts(list);
let btns = document.querySelectorAll('button');
let carr = document.getElementById('carr')
for (let btn of btns) {
  btn.addEventListener('click', btnAdd);
}

function btnAdd(event) {
    let button = event.target;
    console.log(button.id);
    itemsCar.push(list[button.id])
    viewCar()
    console.log(itemsCar);
  }


const car = document.getElementById("car-buy").addEventListener('click',viewCar)

function viewCar() {
    let ModalCar = document.createElement("div");
    itemsCar.forEach(item1 =>{
    ModalCar.classList='car'
    ModalCar.innerHTML = `
    <div class="item-car">
        <p>${item1.name}</>
    </div>
  `;
  carr.appendChild(ModalCar);
})}
