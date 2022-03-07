<template>
  <section>
    <div class="row">
      <div class="column column-one">
        <iframe :src="url" allowFullScreen></iframe>
      </div>
      <div class="column column-two">
         <p><span class="bold">Title: </span>{{title}}</p>
         <p class="rating" :class="ratingClass">{{rating}}</p>
         <button @click.prevent="removeGif(title)">Remove Gif</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    title: String,
    url: String,
    rating: String
  },
  computed: {
    ratingClass() {
      return {
        low: this.rating < 2,
        medium: this.rating >= 2 && this.rating < 4,
        high: this.rating >= 4
      }
    }
  },
  methods: {
      ...mapActions(['removeGif'])
  }
}
</script>

<style scoped>
iframe {
  max-width: calc(100% - 20px);
}

.row,
.column {
  display: flex;
  align-items: center;
  justify-content: center;
}

.row {
  padding: 10px 0;
  border-bottom: 1px solid rgba(0,0,0,.5);
}

.bold {
  font-weight: 700;
}

.column {
  flex-direction: column; 
  text-align: left;
}

.column-one {
  width: 40%;
}

.column-two {
  align-items: flex-start;
  width: 60%;
}

.column p {
  width: calc(100% - 40px);
}

.column .rating {
  width: auto;
  padding: 5px 10px;
  color: #fff;
  margin: 0;
}

.column .low {
  background-color: #ff8080;
}

.column .medium {
  background-color:#ffffb3;
  color: #000;
}

.column .high {
  background-color:#85e085;
}

button {
  border: none;
  background-color: #9933ff;
  color: #fff;
  padding: 5px 10px;
  margin: 10px 0 0;
}
</style>