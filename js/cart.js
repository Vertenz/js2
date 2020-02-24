/*

// при нажатии на 'добавить в корзину" дродукт добавляется в массив cartGoods
let button = document.querySelector('.products__btn');

button.addEventListener('click', () => {

});

// добавление
class CartList {
    constructor(container='.cart-block', cartGoods) {
        this.container = container;
        this.cartGoods = cartGoods;
        this.cartRender() {
            const block = document.querySelector(this.container);

            for (let product of cartGoods) {
                 const cartProductObject = new ProductItem(product);
                block.insertAdjacentHTML("beforeend", productObject.render());
            }
        }
    }
}

 */
/*
//можно добавить форму в блоке продукта, чтобы пережавать сразу колличество
class CartProductItem extends ProductItem{
    constructor(product, image = 'https://via.placeholder.com/150C/O https://placeholder.com/', quantity) {
        super(product, image = 'https://via.placeholder.com/150C/O https://placeholder.com/');
        this.quanity = quantity;
    }

    delete() {
        //метод удаления из карзины
}
    changeQuanity() {
        //метод изменения колличества товара
    }

 */

// function  addToCart () {
//     window.addEventListener('load', () => {
//         let btn = document.querySelector('.products__btn');
//         console.log(btn);
//         document.querySelector('.products__btn').addEventListener('click', () => {
//             console.log('btn OK');
//         })
//     })
// };
//
//
// class CartItem {
//     constructor(product, image = 'https://via.placeholder.com/150C/O https://placeholder.com/') {
//     }
//
// }
//
// addToCart();
// new CartItem();
// class CartItem extends ProductItem {
//     constructor(productToCart) {
//         super();
//     }
// }
// window.addEventListener('load', () => {
//     let products = document.querySelector('.products'); //не знал, как сделать несколько кнопок с одной и тойже функцией. Тч тут определяю зону действия
//     products.onclick = function(event) {
//         let target = event.target; // тут определяю на что клик
//         if (target.className === 'products__btn') { //если кнопка, то уже действие
//             let id = Number(target.getAttribute('data-id')); //получение ID кнопки, чтобы по этому же ID найти продукт
//             let productToCart = product.allProducts.find( coordinates => coordinates.id_product === id); //поиск продукта по ID кнопки
//             let newProductToCat = new CartItem(productToCart);
//             console.log(newProductToCat);
//         }
//     };
// });
