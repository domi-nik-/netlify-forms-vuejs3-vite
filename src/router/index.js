import { createRouter, createWebHistory } from "vue-router"

// import Views for router
import Form from '@/views/FormView.vue'
import SubmissionSuccess from '@/views/SubmissionSuccessView.vue'
import SubmissionFailure from "@/views/SubmissionFailureView.vue"

const routes= [
    {path: '/', name: 'Form', component: Form },
    {path: '/success', name: 'Success', component: SubmissionSuccess },
    {path: '/failure', name: 'Failure', component: SubmissionFailure }
]


const router = createRouter( {
    history: createWebHistory(),
    routes
})

export default router