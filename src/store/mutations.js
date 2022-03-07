export default {
    setCurrentGif(state, payload) {

        if (state.currentRating === null) {
            state.currentGif = payload.embed_url;
            if (payload.title === '') {
                payload.title = 'No Title';
            }
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
    removeGif(state, payload) {
        const ind = state.allGifs.findIndex(gif => gif.title === payload);
        state.allGifs.splice(ind, 1);
    },
    handleRatingError(state, payload) {
        state.ratingError = payload;
    },
    handleFormError(state, payload) {
        state.formError = payload;
    },

}