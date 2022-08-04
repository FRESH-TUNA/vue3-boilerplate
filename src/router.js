import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/Home'
import AboutPage from './pages/About'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/home', component: HomePage },
  { path: '/time', component: AboutPage },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })


export default router;
