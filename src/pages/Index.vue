<template>
  <div class="flex flex-col gap-6 mt-6">
    <section class="container">
      <hero-section />
    </section>
    <section>
      <features />
    </section>
    <section class="bg-gray200 py-12">
      <process />
    </section>
    <section>
      <download />
    </section>
  </div>
</template>

<script>
import Features from '@/components/home/Features.vue'
import Process from '@/components/home/Process.vue'
import Download from '@/components/home/Download.vue'
import HeroSection from '@/components/home/HeroSection.vue'
export default {
  components: { Features, Process, Download, HeroSection }
}
</script>
