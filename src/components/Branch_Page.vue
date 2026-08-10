<template>
  <div class="b_head">
  <h1>Welcome to the Branch Page</h1>
  <h2>Welcome</h2>
  <br/>
  <div class="branch_button">
    <button
      v-for="branch  in branches"
      :key="branch"
      @click="selectBranch(branch)"
    > {{ branch }}  
    </button>
  </div>
  </div>
  <div class="nav-buttons">
      <button @click="$router.go(-1)" class="back-btn">← Go Back</button>
      <button @click="$router.push('/')" class="home-btn">🏠 Home</button>
    </div>
</template>  

<script>
export default {
  name: 'Branch_page',
  data() {
    return {
      branches: ['CSE','Mechanical','Electrical','Civil','Chemical','Data Science']
    }
  },
  methods: {
    selectBranch(branch) {
      this.$router.push(`/branch/${branch}`)
    }
  }
}
</script>

<style scoped>

</style>