import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import Project from '@/pages/Project'
import EditorExample from '@/pages/EditorExample'

// router hook guide: https://adeuran.tistory.com/14
const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/projects/:id', component: Project },
  { path: '/editor', component: EditorExample },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;
