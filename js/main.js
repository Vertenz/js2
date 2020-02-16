/*
1. Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.
2. Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?
3. *Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
 */
const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, image = 'https://via.placeholder.com/150C/O https://placeholder.com/' ) => {
    return `<div class="products__item">
                <a href="#"><img src="${image}" alt="#" class="products__img"></a>
                <h3 class="products__h">${title}</h3>
                <p class="products__p">${price}</p>
                <button class="products__btn">Добавить в корзину</button>
            </div>`;
};

/*
* Успрощенная версия

const renderProducts = (list) => {
    return document.querySelector('.products').innerHTML = list.map((element) => renderProduct(element.title, element.price));
};
*/

const renderProducts = (list) => {
    for(index = 0; index < list.length; index++ ) {
        document.querySelector('.products').innerHTML += renderProduct(list[index].title, list[index].price);
    }
};

renderProducts(products);
