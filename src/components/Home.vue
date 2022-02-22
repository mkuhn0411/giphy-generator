<template>
    <section>
        <iframe :src="getCurrentGif" allowFullScreen></iframe>
        <form @submit.prevent="addGif">
            <div class="rating-container">
                <rating-control></rating-control>
            </div>
            <p class="error-text" v-if="$store.state.ratingError">Please select a rating</p>
            <p>Then type a keyword to generate a new gif!</p>
            <div class="form-control">
                <input 
                    :class="{error: $store.state.formError}" 
                    type="text" 
                    name="gif-input" 
                    v-model="gifInput" 
                    @input="checkError"
                />
                <button>Generate Gif</button> 
            </div>     
        </form>
        
    </section>   
</template>

<script>
import RatingControl from './RatingControl.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'home',
    components: {
        RatingControl
    },
    data() {
        return {
            gifInput: '',
        }
    },
    methods: {
        addGif() {
            //check if rating exists
            if (this.$store.state.currentRating === null) {
                this.$store.dispatch('handleRatingError', true);
            } 
            
            //check if user has filled out input
            if (this.gifInput === '') {
                this.$store.dispatch('handleFormError', true);
            }
            
            if (this.$store.state.currentRating && this.gifInput.length > 0) {
                this.$store.dispatch('setCurrentGif', this.gifInput);
                this.gifInput = '';
                this.formError = false;
            }
            
        },
        checkError() {
            if (this.$store.state.formError && this.gifInput.length > 0) {
                this.$store.dispatch('handleFormError', false);
            }
        }
    },
    computed: {
        ...mapGetters(['getCurrentGif'])
    },
}
</script>

<style scoped>
.form-control {
    margin: 20px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

input {
    width: 60%;
    height: 25px;
}

button {
    background-color: #ff0080;
    padding: 10px 40px;
    width: auto;
    border: none;
    color: #fff;
    margin: 5px 0 0;
}

.error {
    border: 1px solid red;
}

.error-text {
    color: red;
}

</style>