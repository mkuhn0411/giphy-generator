import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router/router.js'

const store = createStore({
    state() {
        return {
            currentGif: '',
            currentTitle: '',
            currentRating: null,
            ratingError: false,
            formError: false,
            allGifs: [],
        }
    },
    mutations: {
        setCurrentGif(state, payload) {

            if (state.currentRating === null) {
                state.currentGif = payload.embed_url;
                state.currentTitle = payload.title;
            }
            else {
                var obj = { url: state.currentGif, title: state.currentTitle, rating: state.currentRating }
                state.allGifs.push(obj);

                state.currentGif = payload.embed_url;
                state.currentTitle = payload.title;
                state.currentRating = null;

            }
            
        },
        setCurrentRating(state, payload) {
            state.currentRating = payload;
        },
        handleRatingError(state, payload) {
            state.ratingError = payload;
        },
        handleFormError(state, payload) {
            state.formError = payload;
        }
    },
    actions: {
        async setCurrentGif(state, payload) {
            const gif = await fetch("http://api.giphy.com/v1/gifs/random?tag=" + payload + "&api_key=CPdViVtUTSm8s22Pq2ICfk7QIwQFqX00&limit=1", { Accept: 'application/json'} );
            const g = await gif.json();
            state.commit('setCurrentGif', g.data);
            
        },
        setCurrentRating(context, payload) {
            context.commit('setCurrentRating', payload);
        },
        handleRatingError(context, payload) {
            context.commit('handleRatingError', payload);
        },
        handleFormError(context, payload) {
            context.commit('handleFormError', payload);
        }
    },
    getters: {
        getCurrentGif(state) {
            return state.currentGif;
        },
        getCurrentRating(state) {
            return state.currentRating;
        },
        getGifCollection(state) {
            return state.allGifs
        }
    },
});

const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');

