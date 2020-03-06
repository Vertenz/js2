Vue.component('search', {
    props: ['user_search',],
    data() {
        return {
            findItem: [],
            cartAPI: this.$root.$refs.cart,
            productAPI: this.$root.$refs.products,
            img: this.$root.$refs.products.imgCatalog,
        };
    },
    methods: {
        filters(value, event) {
            console.log(this.searchShow);
            this.searchShow = !this.searchShow;
            console.log(`это findItem в начале ${this.findItem}`);
            console.log(this.findItem);
            this.findItem = [];
            const regexp = new RegExp(value, 'i');
            let filtered =  this.productAPI.filtered.filter(product => regexp.test(product.product_name));
            console.log(`это filtered после поиска ${filtered}`);
            console.log(filtered);
            filtered.forEach((item, i, arr) => {
                this.findItem.push(filtered[i]);
            });
            console.log(`это findItem в конце ${this.findItem}`);
            console.log(this.findItem);
        }
    },
    template:
        `
        <div class="products">
            <product v-for="item of findItem" :key="item.id_product" :img="img" :product="item"></product>
        </div>
    `
});

