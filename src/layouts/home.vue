<template>
  <div>
    <app-header :menu="menu" />
    <slot />
    <app-footer />
  </div>
</template>

<script>
import menu from '@/api/menuItems'
import AppHeader from '@/components/navigation/AppHeader.vue'
import AppFooter from '@/components/navigation/AppFooter.vue'
export default {
  components: { AppHeader, AppFooter },
  data(){
    return {
      menu
    }
  }
}
</script>

<style>

</style>
