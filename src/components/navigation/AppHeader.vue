<template>
  <header class="">
    <div class="container">
      <nav class="flex justify-between items-center py-6 sticky top-0 bg-gray-50">
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
                <span class="">{{ item.label }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <section class="grid lg:grid-cols-2 items-center h-full md:grid-cols-2 grid-cols-1 gap-6 mt-4">
        <div>
          <h6 class="text-sm text-gray400 uppercase">Lorem Ipsum is simply </h6>
          <h1 class="lg:text-5xl md:text-4xl text-3xl font-extrabold">
            Lorem Ipsum is simply dummy text of the printi Ipsum
            has been the
          </h1>
          <h6 class="text-sm text-gray400 mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </h6>
          <div class="mt-3">
            <button>
              <img width="180" src="@/assets/img/playstore.svg" alt="">
            </button>
          </div>
        </div>
        <div class="flex justify-end">
          <img class="lg:w-9/12 md:8-10/12 w-full" src="@/assets/brandImg/hero-section-img.svg" alt="" />
        </div>
      </section>
    </div>

    <Sidebar v-model:visible="visible" header="" position="right">
      <ul class="flex flex-col gap-4">
        <li v-for="(item, idx) in menu" :key="idx">
          <span @click="menuFunc(item)" class="flex gap-3 uppercase text-sm font-medium">
            <span class="text-[24px]">
              <icon :icon="item.icon" />
            </span>
            <span class="">{{ item.label }}</span>
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
