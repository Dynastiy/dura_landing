<template>
  <div class="container mb-12">
    <h1 class="lg:text-3xl md:text-2xl text-2xl font-extrabold flex gap-3 items-center">
      <icon icon="ic:outline-hub" />
      Meet Our team
    </h1>

    <div class="mt-12">
      <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
        <div class="flex flex-col gap-[1px]" v-for="i in 12" :key="i">
          <img
            src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/img/avatars/team2.jpg"
            class="w-[60px] h-[60px] rounded-full"
            alt=""
          />
          <h2 class="font-semibold mt-3 block text-[16px]">Prince Jackson</h2>
          <h6 class="text-sm text-gray-400 mb-2">CTO</h6>
          <a href="#" class="text-[12px] underline">emjo@dura.com</a>
          <a href="#" class="text-[12px] underline">+1 0899399283</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
