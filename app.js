const btnCart = document.querySelector('#car-buy')
const modal  = document.querySelector('.container-cart-products')
const createProduct = document.querySelector('#create-Product')
const formCreate = document.querySelector('.formCreate')
const Update = document.querySelector('#Update')
const formUpdate =document.querySelector('.UpdateDiv')

Update.addEventListener('click',()=>{
  formUpdate.classList.toggle('hidden-cart');
})

btnCart.addEventListener('click',()=>{
	modal.classList.toggle('hidden-cart');
})
createProduct.addEventListener('click',()=>{
	formCreate.classList.toggle('hidden-cart');
})


/*======================================================== */
// Lista de todos los contenedores de productos
const productsList = document.querySelector('#container-items');
const row_product = document.querySelector('.row-product')
let ArrayProducts =[]
const mnsj =document.querySelector('.cart-empty').textContent

const priceTotal = document.querySelector('.total-price')
const countProduct = document.querySelector('#count-products')





//
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
   }
   
  // {
  //   id:3,
  //   name:'Boulevard',
  //   img: '../asset/images/boulevard-portada.jpeg.jpg',
  //   price: 45000,
  //   category:'Romance',
  //   description:'Una historia en donde dos adolescentes crean su propio Boulevard ante la llovizna que hay en sus corazones, con un cielo pintado de azul cálido en una parte y otra de un azul eléctrico, tiñéndose este por completo de un grisáceo nostálgico.',
  //   stock:5

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:5,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:6,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // },
  // {
  //   id:4,
  //   name:'Inadaptados',
  //   img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
  //   price: 30000,
  //   category:'Ficción',
  //   description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
  //   stock:10

  // }


];
function addProduct() {
  // Obtener valores del formulario
  const name = document.getElementById('productName').value;
  const image = document.getElementById('productImage').value;
  const price = parseFloat(document.getElementById('productPrice').value);
  const category = document.getElementById('productCategory').value;
  const description = document.getElementById('productDescription').value;
  const stock = parseInt(document.getElementById('productStock').value);

  // Validar que todos los campos estén completos
  if (!name || !image || isNaN(price) || !category || !description || isNaN(stock)) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Crear un nuevo objeto producto
  const newProduct = {
    id: productList.length + 1,
    name: name,
    img: image,
    price: price,
    category: category,
    description: description,
    stock: stock,
  };

  // Agregar el nuevo producto a la lista
  productList.push(newProduct);

  // Limpiar el formulario
  document.getElementById('productForm').reset();

  // Mostrar la lista actualizada de productos (puedes modificar esto según tu necesidad)
  renderProducts(productList);
}




function renderProducts(products) {
    productsList.innerHTML = '';
    products.forEach(item => {
      const newItem = document.createElement('div');
      newItem.classList = 'cart';
      newItem.innerHTML = `
        <div class="top">
          <p class="identity">${item.id}</p>
          <h3>${item.name}</h3>
          <img src="${item.img}" alt="">
        </div>
        <p id="description">${item.description}</p>
        <p id="category">Categoria: ${item.category}</p>
        <p id="stock">Disponibles: ${item.stock}</p>
        <p id="price">$${item.price}</p>
        <button class="addToCartBtn" data-product-id="${item.id}">Agregar</button>
      `;
      productsList.appendChild(newItem);
    });
  }
  renderProducts(productList)
  productsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('addToCartBtn')) {
      const product = e.target.parentElement;
  
      const infoProduct = {
        id: parseInt(e.target.getAttribute('data-product-id')),
        quantity: 1,
        title: product.querySelector('h3') ? product.querySelector('h3').textContent : '',
        price: product.querySelector('#price') ? product.querySelector('#price').textContent : '',
        imgSrc: product.querySelector('img') ? product.querySelector('img').src : '',
      };
  
      const exist = ArrayProducts.some(product => product.id === infoProduct.id);
      if (exist) {
        const products = ArrayProducts.map(product => {
          if (product.id === infoProduct.id) {
            product.quantity++;
            return product;
          } else {
            return product;
          }
        });
        ArrayProducts = [...products];
      } else {
        ArrayProducts = [...ArrayProducts, infoProduct];
      }
  
      // Disminuir el stock del producto
      const targetProduct = productList.find((p) => p.id === infoProduct.id);
    if (targetProduct && targetProduct.stock > 0) {
      targetProduct.stock--;
      // Actualizar la lista de productos renderizando nuevamente
      renderProducts(productList);
    }

    showHTML();
  }
  });
  

  row_product.addEventListener('click', (e) => {
    if (e.target.classList.contains('icon-close')) {
      const product = e.target.parentElement;
      const productIdElement = e.target.getAttribute('close-id');
      const targetProduct = ArrayProducts.find((p) => p.id === parseInt(productIdElement));
      
  
      if (targetProduct) {
        if (targetProduct.quantity > 1) {
          targetProduct.quantity--;
        } else {
          // Aumentar el stock del producto
          
  
          // Eliminar el producto del carrito
          ArrayProducts = ArrayProducts.filter((p) => p.id !== targetProduct.id);
        }
        const correspondingProduct = productList.find((p) => p.id === targetProduct.id);
          if (correspondingProduct) {
            correspondingProduct.stock++;
            renderProducts(productList);
          }
        renderProducts(productList);
        showHTML();
      }
    }
  });

//Mostrar HTML

const showHTML = () =>{

 
  //Limpiar
  row_product.innerHTML=''

  let total = 0
  let totalOfProducts = 0

    ArrayProducts.forEach(product=>{
      const containerProduct = document.createElement('div')
      containerProduct.classList.add('cart-product')

      containerProduct.innerHTML = `
            <div class="info-cart-product">
                          <img src="">
                          <span class="cantidad-producto-carrito">${product.quantity}</span>
                          <p class="titulo-producto-carrito">${product.title}</p>
                          <span class="precio-producto-carrito">${product.price}</span>
            
                      </div>
                      <svg close-id=${product.id}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="icon-close"
                      >
                          <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                          />
                      </svg>
            `
            row_product.append(containerProduct)

          
            total = total + parseInt(product.quantity) * parseFloat(product.price.slice(1));          
            totalOfProducts = totalOfProducts+product.quantity
    })
        priceTotal.innerText = `$${total}`;
        countProduct.innerText = totalOfProducts

}


/*======================================ACTUALIZAR*/


document.querySelector('.updateProductForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener valores del formulario
  const productId = parseInt(document.getElementById('productId').value);
  const newPrice = parseFloat(document.getElementById('newPrice').value);
  const newName = document.getElementById('newName').value;
  const newCategory = document.getElementById('newCategory').value;
  const newStock = parseInt(document.getElementById('newStock').value);
  const newDescription = document.getElementById('newDescription').value;


  // Buscar el producto correspondiente en la lista
  const productToUpdate = productList.find((product) => product.id === productId);

  // Verificar si el producto existe
  if (productToUpdate) {
    // Actualizar el precio del producto
    productToUpdate.name = newName;
    productToUpdate.category=newCategory;
    productToUpdate.description=newDescription;
    productToUpdate.stock=newStock;
    productToUpdate.price = newPrice;


    this.reset();

    // Renderizar la lista actualizada de productos
    renderProducts(productList);
  } else {
    alert('Producto no encontrado');
  }
});

function fillProductDetails() {
  // Obtener el ID del producto ingresado
  const productId = parseInt(document.getElementById('productId').value);

  // Buscar el producto correspondiente en la lista
  const productDetails = productList.find((product) => product.id === productId);

  // Mostrar los detalles del producto
  const productDetailsContainer = document.getElementById('productDetails');
  if (productDetails) {

    newName.value = productDetails.name,
    newCategory.value=productDetails.category,
    newStock.value= productDetails.stock,
    newDescription.value = productDetails.description,
    newPrice.value =productDetails.price;
    
  } else {
    alert("Producto no Encontrado");
  }
}

























/*let productList = JSON.parse(localStorage.getItem('productList')) || [];
let itemsCar = JSON.parse(localStorage.getItem('cart')) || [];

productList = [
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
  }
];
*/
//const container = document.getElementById('container');

// renderProducts(productList);

// function renderProducts(products) {
//   container.innerHTML = '';
//   products.forEach(item => {
//     const newItem = document.createElement('div');
//     newItem.classList = 'cart';
//     newItem.innerHTML = `
//       <div class="top">
//         <h3>${item.name}</h3>
//         <img src="${item.img}" alt="">
//       </div>
//       <p id="description">${item.description}</p>
//       <p id="category">Categoria: ${item.category}</p>
//       <p id="stock">Disponibles: ${item.stock}</p>
//       <p id="price">$${item.price}</p>
//       <button class="addToCartBtn" data-product-id="${item.id}">Agregar</button>
//     `;
//     container.appendChild(newItem);
//   });
// }
// const addToCartBtns = document.querySelectorAll('.addToCartBtn');

// addToCartBtns.forEach(btn => {
//   btn.addEventListener('click', btnAdd);
// });

// function btnAdd(event) {
//   const button = event.target;
//   const productId = parseInt(button.getAttribute('data-product-id'));

//   const existingItem = itemsCar.find(item => item.id === productId);
//   const product = productList.find(item => item.id === productId);

//   if (product.stock > 0) {
//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       itemsCar.push({ ...product, quantity: 1 });
//     }

//     product.stock -= 1;

//   } else {
//     alert('Producto agotado');
//   }
//   updateCartAndList()
// }


// function updateRenderProducts() {
//   var datosLocalStorage = localStorage.getItem('productList');

// var objetoDatos = JSON.parse(datosLocalStorage);

// var arrayDatos = [];

// if (Array.isArray(objetoDatos)) {
//     arrayDatos = objetoDatos;
// }

// // Ahora, 'arrayDatos' contiene los datos almacenados en localStorage como un array.
// console.log(arrayDatos);
//   return arrayDatos 
// }

// const cartButton = document.getElementById('car-buy');
// cartButton.addEventListener('click', viewCart);

// function viewCart() {
//   const modalContent = document.getElementById('car');
//   modalContent.innerHTML = '';

//   // Utiliza updateRenderProducts para obtener la lista actualizada
//   const updatedProductList = updateRenderProducts();

//   itemsCar.forEach(item => {
//     const product = updatedProductList.find(p => p.id === item.id);

//     const newItem = document.createElement('div');
//     newItem.classList = 'item-car';
//     newItem.innerHTML = `<img src="${item.img}"><p>${item.name} - Cantidad: ${item.quantity}</p>
//       <button class="removeFromCartBtn" data-product-id="${item.id}">Eliminar uno</button>`;
//     modalContent.appendChild(newItem);
//   });

//   const emptyCartButton = document.createElement('button');
//   emptyCartButton.textContent = 'Vaciar Carrito';
//   emptyCartButton.addEventListener('click', emptyCart);
//   modalContent.appendChild(emptyCartButton);

//   const removeButtons = document.querySelectorAll('.removeFromCartBtn');
//   removeButtons.forEach(btn => {
//     btn.addEventListener('click', removeOneFromCart);
//   });

//   openModal();
// }

// function emptyCart() {
//   itemsCar.forEach(item => {
//     const product = productList.find(p => p.id === item.id);
//     product.stock += item.quantity;
//   });

//   itemsCar = [];
// }

// function removeOneFromCart(event) {
//   const button = event.target;
//   const productId = parseInt(button.getAttribute('data-product-id'));

//   const existingItem = itemsCar.find(item => item.id === productId);
//   const product = productList.find(item => item.id === productId);

//   if (existingItem && existingItem.quantity > 1) {
//     existingItem.quantity -= 1;
//     product.stock += 1;
//   } else {
//     const index = itemsCar.findIndex(item => item.id === productId);
//     if (index !== -1) {
//       itemsCar.splice(index, 1);
//     }
//   }

// }

// const closeModal = () => {
//   const modal = document.getElementById('modal');
//   modal.style.display = 'none';
// };




// function updateCartAndList() {
//   localStorage.setItem('cart', JSON.stringify(itemsCar));
//   localStorage.setItem('productList', JSON.stringify(productList));

//   renderProducts(updateRenderProducts());
//   viewCart();
// }
