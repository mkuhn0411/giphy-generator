<template>
    <section>
        <p>Welcome to the GIPHY generator!</p>
        <div class="links-container">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/collection">Collection</router-link></li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
 section {
     background-color: #ff0080;
     color: #fff;
     font-size: 2.0rem;
     padding: 10px 0;
 }

 p {
     margin: 0;
 }

 ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0 5px 0;
 }

 li {
     margin: 0 10px;
     font-size: 20px;
 }

 a {
     color: #fff;
     text-decoration: none;
     margin: 0;
 }


</style>