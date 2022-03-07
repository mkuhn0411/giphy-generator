<template>
    <div v-if="gifs.length > 0">
        <h3>Your Gif Collection</h3>
        <div class="sort-container">
            <p>Sort by</p>
            <div class="sort-buttons">
                <p class="sort" :class="{active: sortBy === 'high'}" @click="sort('high')">High to Low</p>
                <p class="sort" :class="{active: sortBy === 'low'}" @click="sort('low')">Low to High</p>
            </div>
        </div>
        <gif-row
            v-for="gif in gifs"
            :key="gif.title"
            :title="gif.title"
            :url="gif.url"
            :rating="gif.rating"
    ></gif-row>
    </div>
    <p v-else>Sadly, you have no gifs to show. Go rate some gifs!</p>
</template>

<script>
import GifRow from './GifRow.vue';
// import { mapGetters } from 'vuex';

export default {
    components: {
        GifRow
    },
    data() {
        return {
            sortBy: null,
        }
    },
    computed: {
        gifs() {
            let arrayCopy = [...this.$store.state.allGifs];

            if (this.sortBy === 'low') {
                arrayCopy.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
            } else if (this.sortBy === 'high') {
                arrayCopy.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
            }
            
            return arrayCopy
        },
        // ...mapGetters({
        //     ...mapGetters('collection', ['getGifCollection'])
        // })
    },
    methods: {
        sort(direction) {
            this.sortBy = direction;
        }
    }
}
</script>

<style scoped>
p {
    margin: 0;
}

.sort-container,
.sort-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
}

.sort-container {
    flex-direction: column;
    /* align-items: flex-end; */
}

.sort-buttons {
    margin: 10px 0 20px 0;
}

.sort {
    color: #6600cc;
    border: 2px solid #6600cc;
    border-radius: 20px;
    padding: 5px 10px;
    margin: 0 5px;
}

.sort.active {
    background-color: #6600cc;
    color: #fff;
}
</style>