<template>
  <h1>Welcome To Semester Selection </h1>
  <h2>Welcome To {{ $route.params.branch }} Engineering</h2>
  <br/>
  <div class="sem_show">
  <div class="semester_button">
    <button 
    v-for="semester in semesters"
    :key="semester"
    @click="selectSemester(semester)">{{ semester }}
    
    </button>
    </div>
    <div class="nav-buttons">
      <button @click="$router.go(-1)" class="back-btn">← Go Back</button>
      <button @click="$router.push('/')" class="home-btn">🏠 Home</button>
    </div>
  </div>
  
  <br />
</template>

<script>
export default {
  name: 'Semester_page',
  data() {
    return {
       semesters: [1,2,3,4,5,6,7,8]
    }
  },
  methods: {
    selectSemester(semester) {
      this.$router.push(`/branch/${this.$route.params.branch}/semester/${semester}`)
    }
  }
}

</script>

<style scoped>

</style>