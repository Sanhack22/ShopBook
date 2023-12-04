const btnCart = document.querySelector('#car-buy')
const modal  = document.querySelector('.container-cart-products')
const createProduct = document.querySelector('#create-Product')
const formCreate = document.querySelector('.formCreate')
const Update = document.querySelector('#Update')
const formUpdate =document.querySelector('.UpdateDiv')
const CleanCar = document.querySelector('.cart-empty')

CleanCar.addEventListener('click',()=>{
  
  ArrayProducts=[]
  showHTML()
})

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
   },
   
  {
    id:3,
    name:'Boulevard',
    img: '../asset/images/boulevard-portada.jpeg.jpg',
    price: 45000,
    category:'Romance',
    description:'Una historia en donde dos adolescentes crean su propio Boulevard ante la llovizna que hay en sus corazones, con un cielo pintado de azul cálido en una parte y otra de un azul eléctrico, tiñéndose este por completo de un grisáceo nostálgico.',
    stock:5

  },
  {
    id:4,
    name:'Inadaptados',
    img: 'https://storage.googleapis.com/catalogo-libros/extralarge/6ac72a2d-d596-8cc4-9325-654283e7109f_imagen.jpg',
    price: 30000,
    category:'Ficción',
    description:'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
    stock:10

  },
  {
    id: 5,
    name: 'Satanás',
    img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/4f/83/4f83ccdd48c8171e335531d12f58a52d.jpg',
    price: 30000,
    category: 'Ficción',
    description: 'Nos hará reflexionar sobre la falsa idea que nos venden del mundo, el éxito, el romanticismo, la felicidad, el turismo y la búsqueda del propósito. Este libro reúne un texto de análisis a la sociedad, narrado por un personaje, quien nos revela que ser un “Inadaptado” es la mejor cachetada a la parodia que nos vende el sistema.',
    stock: 10
  },
  
  {
    id: 6,
    name: 'Cien años de soledad',
    img: 'https://www.lamusica.com.co/cdn/shop/products/img20230111_12074440.jpg?v=1673457099',
    price: 25000,
    category: 'Literatura',
    description: 'Una de las obras más emblemáticas de la literatura latinoamericana. Narra la historia de la familia Buendía en el pueblo ficticio de Macondo. A lo largo de sus páginas, García Márquez nos presenta un mundo mágico y surrealista, lleno de personajes inolvidables.',
    stock: 10
  }
  ,
  {
    id: 7,
    name: 'El amor en los tiempos del cólera',
    img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/b0/3e/b03e98118b9e2cf5b94bb0548bfa59c5.jpg',
    price: 25000,
    category: 'Literatura',
    description: 'La historia de amor de Fermina Daza y Florentino Ariza, que se extiende durante más de 50 años. Una novela que explora el poder del amor, la pasión y la fidelidad.',
    stock: 10
  }
  ,
  {
    id: 8,
    name: 'Crónica de una muerte anunciada',
    img: 'https://www.penguinlibros.com/co/1668018/cronica-de-una-muerte-anunciada.jpg',
    price: 25000,
    category: 'Literatura',
    description: 'La historia de un asesinato premeditado que se narra en retrospectiva. García Márquez nos presenta una visión macabra y fatalista de la vida.',
    stock: 10
  }
  ,
  {
    id: 9,
    name: 'La metamorfosis',
    img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/7c/f8/7cf84202b1f8676cee2ea47dc152ba1b.jpg',
    price: 20000,
    category: 'Ficción',
    description: 'La historia de un hombre que se despierta una mañana convertido en un insecto. Una novela que explora temas como la alienación, la angustia y la pérdida de la identidad.',
    stock: 10
  }
  ,
  {
    id: 10,
    name: 'El guardián entre el centeno',
    img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/d1/d8/d1d83af23331b1e61922bcf3f7fa2024.jpg',
    price: 20000,
    category: 'Ficción',
    description: 'La historia de un adolescente que lucha por encontrar su lugar en el mundo. Una novela que explora temas como la rebeldía, la incomprensión y la búsqueda de la identidad.',
    stock: 10
  }
  ,
  {
    id: 11,
    name: 'El señor de las moscas',
    img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/cd/fb/cdfb82400c8ac3c4f3d71f5224856363.jpg',
    price: 20000,
    category: 'Ficción',
    description: 'La historia de un grupo de niños que se quedan varados en una isla desierta. Una novela que explora temas como la naturaleza humana, la violencia y la lucha por la supervivencia.',
    stock: 10
  }
  ,
  {
    id: 12,
    name: '1984',
    img: 'https://assets-global.website-files.com/6034d7d1f3e0f52c50b2adee/6254291caac6d1e42e8986df_62023ceb41cd1c2807b2841a_9788418933011.jpeg',
    price: 25000,
    category: 'Ficción',
    description: 'Una distopía en la que el gobierno controla todos los aspectos de la vida de las personas. Una novela que explora temas como la vigilancia, la propaganda y la pérdida de la libertad.',
    stock: 10
  }
  ,
  {
    id: 13,
    name: 'El retrato de Dorian Gray',
    img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/91/18/9118645bef1e527a3e1f14e7187ac89e.jpg',
    price: 25000,
    category: 'Ficción',
    description: 'La historia de un joven que hace un pacto con el diablo para conservar su juventud y belleza. Una novela que explora temas como la vanidad, la corrupción y el mal.',
    stock: 10
  }
  ,
  {
    id: 14,
    name: 'La invención de Morel',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/63/La_invenci%C3%B3n_de_Morel.JPG',
    price: 25000,
    category: 'Ficción',
    description: 'La historia de un hombre que llega a una isla desierta y descubre que está habitada por figuras que repiten una y otra vez los mismos movimientos. Una novela que explora temas como la identidad, la memoria y la realidad.',
    stock: 10
  }
  ,
  {
    id: 15,
    name: 'El extranjero',
    img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/bf/25/bf2575c6341c42feafcb98dbed10ca37.jpg',
    price: 25000,
    category: 'Ficción',
    description: 'La historia de un hombre que asesina a un árabe sin motivo aparente. Una novela que explora temas como la alienación, la culpa y la incomprensión.',
    stock: 10
  }
  ,
  {
    id: 16,
    name: 'El nombre de la rosa',
    img: 'https://www.ecured.cu/images/c/ce/6-el-nombre-de-la-rosa1.jpg',
    price: 25000,
    category: 'Ficción',
    description: 'La historia de un fraile franciscano que investiga una serie de asesinatos en una abadía benedictina. Una novela que explora temas como la fe, la razón y el misterio.',
    stock: 10
  }
  ,
  {
    id: 17,
    name: 'La sombra del viento',
    img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/97/a9/97a9e0ef37c3b33e9303147883d03372.jpg',
    price: 25000,
    category: 'Ficción',
    description: 'La historia de un hombre que busca a su padre, un escritor desaparecido. Una novela que explora temas como el amor, la pérdida y la memoria.',
    stock: 10
  }
  ,
  {
    id: 18,
    name: 'La ciudad de los prodigios',
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1207901670i/87819.jpg',
    price: 25000,
    category: 'Ficción',
    description: 'La historia de un niño que crece en Barcelona durante el siglo XIX. Una novela que explora temas como la magia, la historia y la fantasía.',
    stock: 10
  }
  ,
  {
      id: 19,
      name: 'El Principito',
      img: 'https://nidodelibros.com/wp-content/uploads/2021/04/9789877514308.jpeg',
      price: 25000,
      category: 'Ficción',
      description: 'Aparece un pequeño príncipe. En sus conversaciones con él, el narrador revela su propia visión sobre la estupidez humana y la sencilla sabiduría de los niños que la mayoría de las personas pierden cuando crecen y se hacen adultos.',
      stock: 10

  },
  {
      id: 20,
      name: 'Sapiens: De animales a dioses',
      img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/b5/1a/b51a9baa4e59e89a3578cb224e1f1d81.jpg',
      price:  32000,
      category: 'No Ficción',
      description: 'Una exploración reflexiva de la historia e impacto de Homo sapiens en el mundo. El libro aborda las revoluciones cognitivas, agrícolas y científicas que dieron forma a la civilización humana.',
      stock: 20

  },
 {
  id: 21,
name: 'Matar a un ruiseñor',
img: 'https://panamericana.vtexassets.com/arquivos/ids/471118/matar-un-ruisenor-9781400337712.jpg?v=638067934014700000',
price: 28000,
category: 'Ficcion',
description: 'Una novela clásica ambientada en el sur de Estados Unidos durante la década de 1930. Explora temas de injusticia racial y crecimiento moral a través de los ojos de una niña llamada Scout Finch.',
stock: 15
 }
  ,
  {
    id: 22,
    name: 'El poder del ahora',
    img: 'https://www.penguinlibros.com/co/2523717/el-poder-del-ahora.jpg',
    price: 25000,
    category: 'Autoayuda',
    description: 'Un libro sobre la importancia de vivir el presente y dejar de preocuparse por el pasado o el futuro. El poder del ahora ha sido traducido a más de 50 idiomas y ha vendido más de 10 millones de copias en todo el mundo.',
    stock: 10
  }
  ,
  {
    id: 23,
    name: 'Hamlet',
    img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/45/a0/45a01bd8bdfaf22a25dc5e4b0553e436.jpg',
    price: 25000,
    category: 'Teatro',
    description: 'Una tragedia sobre un príncipe que busca vengar la muerte de su padre. Hamlet es una de las obras de teatro más famosas y aclamadas de todos los tiempos.',
    stock: 10
  }
  ,
    {
      id: 24,
      name: 'Odes',
      img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/6f/16/6f162aadf9ddcc8d01b859c03563bb9b.jpg',
      price: 25000,
      category: 'Poesía',
      description: 'Una colección de poemas dedicados a diferentes dioses y héroes griegos. Las odas son un ejemplo de la belleza y la complejidad de la poesía griega antigua.',
      stock: 10
    }
    ,
  {
    id: 25,
    name: 'Sapiens: De animales a dioses',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sapiens_%28libro%29_portada.jpg/220px-Sapiens_%28libro%29_portada.jpg',
    price: 25000,
    category: 'No ficción',
    description: 'Una historia de la humanidad desde la prehistoria hasta la actualidad. Harari explora temas como la evolución, la religión, la ciencia y la tecnología.',
    stock: 10
  }
  
  ,
  {
    id: 26,
    name: 'El alquimista',
    img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/04/1f/041faab83743751d96b0b362733f33f4.jpg',
    price: 25000,
    category: 'Ficción',
    description: 'Un joven pastor portugués emprende un viaje en busca de un tesoro enterrado, siguiendo las indicaciones de un rey sabio. A lo largo de su viaje, el pastor aprende sobre el amor, el coraje y la importancia de seguir los sueños.',
    stock: 10
  }
  
  ,
  {
    id: 27,
    name: 'El hombre en busca de sentido',
    img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/f6/d0/f6d0aba3e83069dee397322df8889ec4.jpg',
    price: 25000,
    category: 'Ficción',
    description: 'La historia de un judío austriaco que es prisionero en un campo de concentración nazi. Una novela que explora temas como la fe, el sufrimiento y la búsqueda del sentido de la vida.',
    stock: 10
  }
  ,
  {
    id: 28,
    name: 'El señor de los anillos',
    img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/66/1a/661a3760157941a94cb8db3f5a9d5060.jpg',
    price: 25000,
    category: 'Ficción',
    description: 'La historia de un grupo de hobbits que se embarcan en una peligrosa misión para destruir el Anillo Único. Una novela que explora temas como la amistad, el bien y el mal, y la lucha contra la oscuridad.',
    stock: 10
  }
  ,
  {
    id: 29,
    name: 'La guía del autoestopista galáctico',
    img: 'https://imagessl8.casadellibro.com/a/l/s5/08/9788433973108.webp',
    price: 25000,
    category: 'Ficción',
    description: 'La historia de Arthur Dent, un hombre que sobrevive a la destrucción de la Tierra y emprende un viaje por el universo con un extraterrestre. Una novela que explora temas como el humor, la ciencia ficción y la búsqueda del sentido de la vida.',
    stock: 10
  }
  ,
  {
    id: 30,
    name: 'El juego de Ender',
    img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/ac/0e/ac0e9f99a0b470e1f8f839a9d91308d0.jpg',
    price: 25000,
    category: 'Ficción',
    description: 'La historia de Ender Wiggin, un niño prodigio que es entrenado para liderar la guerra contra una raza alienígena. Una novela que explora temas como la guerra, la política y la naturaleza humana.',
    stock: 10
  }
  


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
        <div class="bot">
        <p id="category">Categoria: ${item.category}</p>
        <p id="stock">Disponibles: ${item.stock}</p>
        <p id="price">$${item.price}</p>
        </div>
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
