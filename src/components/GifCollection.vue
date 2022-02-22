<template>
    <div v-if="gifs.length > 0">
        <h3>Your Gif Collection</h3>
        <gif-row
        v-for="gif in gifs"
        :key="gif.title"
        :title="gif.title"
        :url="gif.url"
        :rating="gif.rating"
    ></gif-row>
    </div>
    <p v-else>Please rate the gif and hit submit to see your collection...</p>
</template>

<script>
import GifRow from './GifRow.vue';
// import { mapGetters } from 'vuex';

export default {
    components: {
        GifRow
    },
    computed: {
        gifs() {
            console.log(this.$store.state.allGifs)
            return this.$store.state.allGifs
        }
        // ...mapGetters({
        //     gifs: 'getGifCollection'
        // })
    },
}
</script>