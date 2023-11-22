// script.js
let itemsCar = JSON.parse(localStorage.getItem('cart')) || [];
let productList = [
  {
    id: 1,
    name: 'La carretera1',
    img: '../asset/images/LaCarretera.jfif',
    price: 30000,
    category: 'Terror',
    description: 'La carretera es una novela post-apocalíptica de ciencia ficción...',
    stock: 10
  },
  {
    id: 2,
    name: 'La carretera2',
    img: '../asset/images/LaCarretera.jfif',
    price: 30000,
    category: 'Terror',
    description: 'La carretera es una novela post-apocalíptica de ciencia ficción escrita en 2006 por el novelista estadounidense Cormac McCarthy, creador de otras novelas como No es país para viejos y la trilogía de la frontera.',
    stock: 10
  },
  {
    id: 3,
    name: 'La carretera3',
    img: '../asset/images/LaCarretera.jfif',
    price: 30000,
    category: 'Terror',
    description: 'La carretera es una novela post-apocalíptica de ciencia ficción escrita en 2006 por el novelista estadounidense Cormac McCarthy, creador de otras novelas como No es país para viejos y la trilogía de la frontera.',
    stock: 10
  },
  {
    id: 4,
    name: 'La carretera',
    img: '../asset/images/LaCarretera.jfif',
    price: 30000,
    category: 'Terror',
    description: 'La carretera es una novela post-apocalíptica de ciencia ficción escrita en 2006 por el novelista estadounidense Cormac McCarthy, creador de otras novelas como No es país para viejos y la trilogía de la frontera.',
    stock: 10
  }
];

const container = document.getElementById('container');

function renderProducts(products) {
  container.innerHTML = '';

  products.forEach(item => {
    const newItem = document.createElement('div');
    newItem.classList = 'cart';
    newItem.innerHTML = `
      <div class="top">
        <h3>${item.name}</h3>
        <img src="${item.img}" alt="">
      </div>
      <p id="description">${item.description}</p>
      <p id="category">Categoria: ${item.category}</p>
      <p id="stock">Disponibles: ${item.stock}</p>
      <p id="price">$${item.price}</p>
      <button class="addToCartBtn" data-product-id="${item.id}">Agregar</button>
    `;
    container.appendChild(newItem);
  });
}

renderProducts(productList);

const addToCartBtns = document.querySelectorAll('.addToCartBtn');

addToCartBtns.forEach(btn => {
  btn.addEventListener('click', btnAdd);
});

function btnAdd(event) {
  const button = event.target;
  const productId = parseInt(button.getAttribute('data-product-id'));

  const existingItem = itemsCar.find(item => item.id === productId);
  const product = productList.find(item => item.id === productId);

  if (product.stock > 0) {
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      itemsCar.push({ ...product, quantity: 1 });
    }

    product.stock -= 1;

    updateCartAndList();
  } else {
    alert('Producto agotado');
  }
}

function updateCartAndList() {
  localStorage.setItem('cart', JSON.stringify(itemsCar));
  localStorage.setItem('productList', JSON.stringify(productList));

  viewCart();
}

const cartButton = document.getElementById('car-buy');
cartButton.addEventListener('click', viewCart);

function viewCart() {
  const modalContent = document.getElementById('car');
  modalContent.innerHTML = '';

  itemsCar.forEach(item => {
    const newItem = document.createElement('div');
    newItem.classList = 'item-car';
    newItem.innerHTML = `<img src="${item.img}"><p>${item.name} - Cantidad: ${item.quantity}</p>
      <button class="removeFromCartBtn" data-product-id="${item.id}">Eliminar uno</button>`;
    modalContent.appendChild(newItem);
  });

  const emptyCartButton = document.createElement('button');
  emptyCartButton.textContent = 'Vaciar Carrito';
  emptyCartButton.addEventListener('click', emptyCart);
  modalContent.appendChild(emptyCartButton);

  const removeButtons = document.querySelectorAll('.removeFromCartBtn');
  removeButtons.forEach(btn => {
    btn.addEventListener('click', removeOneFromCart);
  });

  openModal();
}

function emptyCart() {
  itemsCar.forEach(item => {
    const product = productList.find(p => p.id === item.id);
    product.stock += item.quantity;
  });

  itemsCar = [];
  updateCartAndList();
}

function removeOneFromCart(event) {
  const button = event.target;
  const productId = parseInt(button.getAttribute('data-product-id'));

  const existingItem = itemsCar.find(item => item.id === productId);
  const product = productList.find(item => item.id === productId);

  if (existingItem && existingItem.quantity > 1) {
    existingItem.quantity -= 1;
    product.stock += 1;
  } else {
    const index = itemsCar.findIndex(item => item.id === productId);
    if (index !== -1) {
      itemsCar.splice(index, 1);
    }
  }

  updateCartAndList();
}

const closeModal = () => {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
};

const openModal = () => {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
};

document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('car-buy').addEventListener('click', viewCart);
