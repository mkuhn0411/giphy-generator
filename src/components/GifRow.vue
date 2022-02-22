<template>
  <section>
    <div class="row">
      <div class="column column-one">
        <iframe :src="url" allowFullScreen></iframe>
      </div>
      <div class="column column-two">
         <p><span class="bold">Title: </span>{{title}}</p>
         <p class="rating" :class="ratingClass">{{rating}}</p>
      </div>
    </div>
  </section>
</template>

<script>
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
  }
}
</script>

<style scoped>
.row,
.column {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bold {
  font-weight: 700;
}

.column {
  flex-direction: column; 
  text-align: left;
  width: 50%;
}

.column-two {
  justify-content: flex-start
}

.column p {
  width: calc(100% - 40px);
}

.column .rating {
  width: auto;
  padding: 5px 10px;
  color: #fff;
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
</style>