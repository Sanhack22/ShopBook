const list = [
    {
        id:1,
        name:'La carretera',
        img:'../asset/images/LaCarretera.jfif',
        price:30000,
        category:'Terror',
        description:'La carretera es una novela post-apocalíptica de ciencia ficción escrita en 2006 por el novelista estadounidense Cormac McCarthy, creador de otras novelas como No es país para viejos y la trilogía de la frontera.',
        stock:10
    },
    {
        id:1,
        name:'La carretera',
        img:'../asset/images/LaCarretera.jfif',
        price:30000,
        category:'Terror',
        description:'La carretera es una novela post-apocalíptica de ciencia ficción escrita en 2006 por el novelista estadounidense Cormac McCarthy, creador de otras novelas como No es país para viejos y la trilogía de la frontera.',
        stock:10
    },
    {
        id:1,
        name:'La carretera',
        img:'../asset/images/LaCarretera.jfif',
        price:30000,
        category:'Terror',
        description:'La carretera es una novela post-apocalíptica de ciencia ficción escrita en 2006 por el novelista estadounidense Cormac McCarthy, creador de otras novelas como No es país para viejos y la trilogía de la frontera.',
        stock:10
    },
    {
        id:1,
        name:'La carretera',
        img:'../asset/images/LaCarretera.jfif',
        price:30000,
        category:'Terror',
        description:'La carretera es una novela post-apocalíptica de ciencia ficción escrita en 2006 por el novelista estadounidense Cormac McCarthy, creador de otras novelas como No es país para viejos y la trilogía de la frontera.',
        stock:10
    },
]
const container = document.getElementById('container')
function produts(products) {
    products.forEach(item => {
        const newItem = document.createElement('div')
        newItem.classList='cart'
        newItem.innerHTML = `
        <h3>${item.name}</h3>
        <img src="${item.img}" alt="">
        <p id="description">Descripcion:${item.description}</p>
        <p id="category">Categoria:${item.category}</p>
        <p id="stock">Disponibles:${item.stock}</p>
        <p id="price">$${item.price}</p>
        <button>Agregar</button>
        `;
        container.appendChild(newItem);

    });

   

}
produts(list)