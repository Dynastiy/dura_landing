<template>
  <div>
    <div class="border border-gray200 rounded-lg p-4">
      <section class="flex justify-between mb-4 items-center">
        <div class="flex flex-col items-center justify-center">
          <img src="https://crests.football-data.org/4.png" class="w-12" alt="" />
          <span class="text-[12px] text-gray400 uppercase font-medium tracking-tighest">CHE</span>
          <span class="font-bold tracking-tighest">Chelsea</span>
        </div>
        <div class="flex flex-col items-center justify-center">
          <span class="font-bold text-3xl">18:30</span>
          <span class="text-[12px] text-gray400 uppercase font-medium">today</span>
        </div>
        <div class="flex flex-col items-center justify-center gap-[2px]">
          <img src="https://crests.football-data.org/9.svg" class="w-12" alt="" />
          <span class="text-[12px] text-gray400 uppercase font-medium block tracking-tighest">CHE</span>
          <span class="font-bold block tracking-tighest">Chelsea</span>
        </div>
      </section>

      <section class="flex justify-between">
        <span
          v-for="(item, i) in pred"
          :key="i"
          class="flex capitalize gap-6 bg-gray-100 py-2 px-3 border border-gray200 font-medium rounded-full text-sm"
        >
          <span class="text-sm">{{ item.title }}</span>
          <span class="font-semibold block text-sm">{{ item.pre }}</span>
        </span>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pred: [
        {
          title: '1x',
          pre: '2.56'
        },
        {
          title: 'X',
          pre: '1.23'
        },
        {
          title: '2x',
          pre: '3.36'
        }
      ]
    }
  }
}
</script>

<style></style>
