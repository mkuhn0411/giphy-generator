export default {
    async setCurrentGif(state, payload) {
        const gif = await fetch("http://api.giphy.com/v1/gifs/random?tag=" + payload + "&api_key=CPdViVtUTSm8s22Pq2ICfk7QIwQFqX00&limit=1", { Accept: 'application/json'} );
        const g = await gif.json();
        state.commit('setCurrentGif', g.data);
        
    },
    setCurrentRating(context, payload) {
        context.commit('setCurrentRating', payload);
    },
    removeGif(context, payload) {
        context.commit('removeGif', payload);
    },
    handleRatingError(context, payload) {
        context.commit('handleRatingError', payload);
    },
    handleFormError(context, payload) {
        context.commit('handleFormError', payload);
    }
}