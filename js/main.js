const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

let getRequest2 = (url) => {
    return new Promise(((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    reject(console.log(`${xhr} ${xhr.readyState}`));
                    console.log('Error');
                } else {
                    resolve(console.log(`${xhr} ${xhr.readyState}`));
                    xhr.responseText;
                }
            }
        }
        xhr.send();
    }));
};

class ProductItem {
    constructor(product, image = 'https://via.placeholder.com/150C/O https://placeholder.com/') {
        this.image = image;
        this.product_name = product.product_name;
        this.price = product.price;
        this.id_product = product.id_product;
    }

    render() {
        return `<div class="products__item" data-id='${this.id}'>
                <a href="#"><img src="${this.image}" alt="#" class="products__img"></a>
                <h3 class="products__h">${this.product_name}</h3>
                <p class="products__p">${this.price}</p>
                <button class="products__btn" data-id="${this.id_product}">Добавить в корзину</button>
            </div>`
    }
}

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getProducts().then(data => {
            this.goods = [...data];
            this.render();
        });
    }

    _getProducts() {
        return fetch(API)
            .then(result => result.json())
            .catch(error => {
                alert(error);
            });
    }

    calcTotalPrice() {
        console.log(this.allProducts);
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
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

class CartItem extends ProductItem {
    constructor(product) {
        super(product);
    }

    render() {
        return super.render();
    }// TODO исключить ренедр кнопки (или сразу заменить на кнопку "удалить")
}

class CartList extends ProductList {
    constructor(container = '.cart-box') {
        super();
    }

    render() {
        const block = document.querySelector(this.container);

        for (let product of this.goods) {
            const productObject = new CartItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML("beforeend", productObject.render());
        }
    }
}
window.addEventListener('load', () => {
    let products = document.querySelector('.products'); //не знал, как сделать несколько кнопок с одной и тойже функцией. Тч тут определяю зону действия
    products.onclick = function(event) {
        let target = event.target; // тут определяю на что клик
        if (target.className === 'products__btn') { //если кнопка, то уже действие
            let id = Number(target.getAttribute('data-id')); //получение ID кнопки, чтобы по этому же ID найти продукт
            let productToCart = product.allProducts.find( coordinates => coordinates.id_product === id); //поиск продукта по ID кнопки
            let newProductToCat = new CartItem(productToCart);
        }
    };
});
