import Home from '@/pages/Index.vue'
import About from '@/pages/AboutUs.vue'
import Contact from '@/pages/Contact.vue'
import OurTeam from '@/pages/OurTeam.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'home',
      parent: 'home'
    }
  },

  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'about',
      parent: 'about'
    }
  },

  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'contact',
      parent: 'contact'
    }
  },

  {
    path: '/our-team',
    name: 'our-team',
    component: OurTeam,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'our-team',
      parent: 'our-team'
    }
  },

]

export default routes
