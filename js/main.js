const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const app = new Vue({
    el: '#app',
    data: {
        user_search: '',
        searchShow: false,
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        search_line(value, event) {
            this.searchShow = !this.searchShow;
            return this.$root.$refs.search.filters(value, event);
        }
    },
    mounted() {
        console.log(this);
    }
});

