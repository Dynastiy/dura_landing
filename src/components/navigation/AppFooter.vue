<template>
  <div>
    <footer class="site-footer bg-primary lg:px-12 md:px-8 px-6 py-6">
      <div class="">
        <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
          <div class="">
            <img src="@/assets/brandImg/logo.svg" alt="" />
            <p class="text-white text-xs tracking-wide leading-normal mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nisi porro earum.
              Reiccusamus fuga! Autem ratione commodi dignissimos corrupti libero culpa!
            </p>
            <ul class="flex gap-2">
              <li>
                <a class="text-primary-color" href="#"
                  ><i class="fa fa-facebook"></i
                ></a>
              </li>
              <li>
                <a class="text-primary-color" href="#"
                  ><i class="fa fa-twitter"></i
                ></a>
              </li>
              <li>
                <a class="text-primary-color" href="#"
                  ><i class="fa fa-github"></i
                ></a>
              </li>
              <li>
                <a
                  class="text-primary-color"
                  href="#"
                  ><i class="fa fa-linkedin"></i
                ></a>
              </li>
              <!-- <li>
                <a class="text-primary-color" href="#"
                  ><i class="fa fa-envelope"></i
                ></a>
              </li> -->
            </ul>
          </div>

          <div class="">
            <h6 class="text-primary-color">Quick Links</h6>
            <ul class="flex flex-col gap-1">
              <li><router-link to="/">Home</router-link></li>
            </ul>

            <div class="flex lg:flex-row md:flex-row flex-col justify-between gap-2">
              <p class="text-primary-color text-xs">
                Copyright &copy; {{ thisYear }} Dura. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const thisYear = computed(() => {
  const yearToday = new Date().getFullYear()
  return yearToday
})
</script>
