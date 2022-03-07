import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import collectionModule from './collection/index.js';

const store = createStore({
    modules: {
        collection: collectionModule
    },
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
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});


export default store;

