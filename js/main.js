/*
*1. Добавить методы и обработчики событий для поля поиска. Создать в объекте данных поле searchLine и привязать к нему содержимое поля ввода.
    На кнопку «Искать» добавить обработчик клика, вызывающий метод FilterGoods.
2. Добавить корзину. В html-шаблон добавить разметку корзины. Добавить в объект данных поле isVisibleCart, управляющее видимостью корзины.
3. *Добавлять в .goods-list заглушку с текстом «Нет данных» в случае, если список товаров пуст.
*/
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        allProducts: [],
        products: [],
        cartProducts: [],
        imgCatalog: 'https://placehold.it/200x150',
        searchName: '',
        isVisible: true,
        cartVisible: false,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            let filtered = this.allProducts.filter(el => el.id_product === product.id_product);
            let check = this.cartProducts.filter(el => el.id_product === product.id_product);
            if (check.length > 0) {
                return;
            } else {
                filtered.forEach((item, i, arr) => {
                    this.cartProducts.push(filtered[i]);
                });
            }
            if (this.cartProducts.length > 0) {
                this.$refs.none.style.display = 'none';
            }
        },
        filter(value, event) {
            this.products = [];
            const regexp = new RegExp(value, 'i');
            let filtered = this.allProducts.filter(product => regexp.test(product.product_name));
            let check = this.products.filter(product => regexp.test(product.product_name));
            if (check.length > 0) {
                return;
            } else {
                filtered.forEach((item, i, arr) => {
                    this.products.push(filtered[i]);
                });
                this.$refs.noneSearch.innerText = '';
                this.isVisible = false;
            }
            if (this.products.length <= 0) {
                this.$refs.noneSearch.innerText = 'Нет данных';
            }
        }
    },
    // хук жизненного цикла
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.allProducts.push(el);
                }
            });
        if (this.cartProducts.length <= 0) {
            this.$refs.none.innerText = "корзина пуста";
        }
    }
});