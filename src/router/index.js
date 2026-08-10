import { createRouter, createWebHistory } from 'vue-router'
import Home_page from '../components/Home_Page.vue'
import Branch_page from '../components/Branch_Page.vue'
import Semester_page from '../components/Semester_Page.vue'
import Subject_page from '../components/Subject_Page.vue'


const routes = [
  { path: '/',component: Home_page },
  { path: '/branch', component: Branch_page },
  
  { path: '/branch/:branch' , component: Semester_page},
  { path: '/branch/:branch/Semester/:semester', component: Subject_page}

]

const router=createRouter({
  history:createWebHistory(),
  routes
})

export default router