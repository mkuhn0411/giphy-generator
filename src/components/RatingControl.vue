<template>
    <p>Rate the gif</p>
    <ul>
        <li><button :class="{active: $store.state.currentRating === '1'}" @click.prevent="setCurrentRating('1')">1</button></li>
        <li><button :class="{active: $store.state.currentRating === '2'}" @click.prevent="setCurrentRating('2')">2</button></li>
        <li><button :class="{active: $store.state.currentRating === '3'}" @click.prevent="setCurrentRating('3')">3</button></li>
        <li><button :class="{active: $store.state.currentRating === '4'}" @click.prevent="setCurrentRating('4')">4</button></li>
        <li><button :class="{active: $store.state.currentRating === '5'}" @click.prevent="setCurrentRating('5')">5</button></li>
    </ul>
</template>

<script>
export default {
    methods: {
        setCurrentRating(number) {
            this.$store.dispatch('setCurrentRating', number);

            if (this.$store.state.ratingError) {
                this.$store.dispatch('handleRatingError', false);
            }
        }
    },
}
</script>

<style scoped>
p {
    margin: 14px 0 6px 0;
}

ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
}

button {
    border: 1px solid rgba(0,0,0,.5);
    padding: 12px 14px;
    background-color: transparent;
}

button.active {
    background-color: lightcoral;
    color: #fff;
}

</style>