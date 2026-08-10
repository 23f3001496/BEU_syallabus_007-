<template>
  <div class="subject_head">
    <h1>See Your Subjects</h1>
    <h2>Branch : {{ $route.params.branch }}</h2>
    <h2>Semester : {{ $route.params.semester }}</h2>
  </div>
  <div class="subject">
    <h1>Subject</h1>
    <div v-for="(subject,index) in subjects" :key="index">
      <h3> {{ index+1 }}  : {{ subject }}</h3>
      
    </div>

  </div>
  <div class="nav-buttons">
      <button @click="$router.go(-1)" class="back-btn">← Go Back</button>
      <button @click="$router.push('/')" class="home-btn">🏠 Home</button>
    </div>
</template>  


<script>
import subjectsData from '@/assets/student_data.json'
export default {
  name: 'Subject_page',
  data() {
    return {
      branchData: {},
      subjects:[],
      allData: subjectsData
    }
  },
  mounted() {
    
    const branch=this.$route.params.branch
    const semester=this.$route.params.semester
    // this.branchData=this.allData.branches[branch] || {}
    // console.log('subject',this.branchData)
    const branchData=this.allData.branches[branch]
    if(branchData[semester]) {
      this.subjects=branchData[semester]
      console.log('subject',this.subjects)
    }
  }
}

</script>

<style scoped>

</style>