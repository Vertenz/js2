class ProductItem {
    constructor(product, image = 'https://via.placeholder.com/150C/O https://placeholder.com/') {
        this.image = image;
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
    }

    render() {
        return `<div class="products__item" data-id='${this.id}'>
                <a href="#"><img src="${this.image}" alt="#" class="products__img"></a>
                <h3 class="products__h">${this.title}</h3>
                <p class="products__p">${this.price}</p>
                <button class="products__btn">Добавить в корзину</button>
            </div>`
    }


}

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this.render();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    calcTotalPrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.goods.length; i++) {
            totalPrice += this.goods[i].price;
        }
        return console.log(totalPrice);
    }

    render() {
        const block = document.querySelector(this.container);

        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML("beforeend", productObject.render());
        }
    }


}

const product = new ProductList();
product.calcTotalPrice();

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