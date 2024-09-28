import Home from '@/pages/Index.vue'
import About from '@/pages/AboutUs.vue'
import Contact from '@/pages/Contact.vue'
import OurTeam from '@/pages/OurTeam.vue'
import KYC from '@/pages/KYC.vue'
import SubmittedKYC from '@/pages/SubmittedKYC.vue'

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

  {
    path: '/kyc',
    name: 'kyc',
    component: KYC,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'kyc',
      parent: 'kyc'
    }
  },

  {
    path: '/submitted',
    name: 'submitted',
    component: SubmittedKYC,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'submitted',
      parent: 'submitted'
    }
  },

]

export default routes
