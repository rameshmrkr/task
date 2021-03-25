import Vue from 'vue'
import VueRouter from 'vue-router'
import Job from '../components/Job.vue'
import JobDetails from '../components/JobDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Job',
    component: Job
  },
  {
    path: '/:id',
    name: 'JobDetails',
    component: JobDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
