<template>
  <div class="home">
  <!-- <img alt="Vue logo" src="./assets/image.png" class="logo_photo"> -->
  <router-view ></router-view>
  <br>
  </div>
</template>

<script>

export default {
  name: 'App'
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  background-color:rgb(112, 106, 104);
  height: 800px;
  width: 1500px;
  text-align:center;
  
}
/* .home-container {
  display: flex;
  flex-direction:column;
  background-color:cyan;
  justify-content:center;

}; */
/* .logo_photo {
  height: 10%;
  width:10%;
  border-radius: 200px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  margin-bottom: 200px;
  margin-left:auto;
  margin-right:auto;

} */
</style>
