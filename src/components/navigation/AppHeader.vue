<template>
  <header class="sticky top-0 bg-gray-50">
    <div class="container">
      <nav class="flex justify-between items-center py-6 ">
        <span role="button" @click="$router.push('/')">
          <img src="@/assets/brandImg/logo.png" class="w-12" alt="" />
        </span>

        <span class="lg:hidden md:hidden block" role="button" @click="visible = !visible">
          <icon icon="material-symbols:menu" class="text-[30px] text-primary" />
        </span>

        <div class="hidden md:flex lg:flex gap-4 items-center">
          <ul class="flex gap-6 items-center">
            <li v-for="(item, idx) in menu" :key="idx">
              <router-link :to="item.href" class="block text-[13px] capitalize font-medium">
                <span class="">{{ item.label.split('-').join(' ') }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <Sidebar v-model:visible="visible" header="" position="right">
      <ul class="flex flex-col gap-4">
        <li v-for="(item, idx) in menu" :key="idx">
          <span @click="menuFunc(item)" class="flex gap-3 uppercase text-sm font-medium">
            <span class="text-[24px]">
              <icon :icon="item.icon" />
            </span>
            <span class="">{{ item.label.split('-').join(' ') }}</span>
          </span>
        </li>
      </ul>
    </Sidebar>
  </header>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      visible: false
    }
  },

  methods: {
    menuFunc(e) {
      this.visible = false
      this.$router.push(e.href)
    }
  },

  computed: {},

  created() {}
}
</script>

<style>
.router-link-exact-active span {
  color: var(---secondary);
  font-weight: 600 !important;
}

.normal-flag[data-v-60be6971] {
  margin: 0 !important;
}
</style>
