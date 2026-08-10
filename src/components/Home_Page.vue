<template>
  <div class="hello">
    
    <h1>Welcome To BEU Syallabus App </h1>
    <br />
    <br />
    <button class="start_" @click="$router.push('/branch')"> START</button>
    <br />
    
  
  </div>
</template>

<script>
export default {
  name: 'Home_page'
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.start_ {
  border-color: aqua;
}
</style>
