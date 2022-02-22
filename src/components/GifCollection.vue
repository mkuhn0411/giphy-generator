<template>
    <div v-if="$store.state.allGifs.length > 0">
        <gif-row
        v-for="(gif, index) in gifs"
        :key="index"
        :title="gif.title"
    ></gif-row>
    </div>
    <p v-else>Please rate the gif and hit submit to see your collection...</p>
</template>

<script>
import GifRow from './GifRow.vue';
import { mapGetters } from 'vuex';

export default {
    Components: {
        GifRow
    },
    computed: {
        ...mapGetters({
            gifs: 'getGifCollection'
        })
    },
}
</script>