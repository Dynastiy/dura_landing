<template>
  <div>
    <footer class="site-footer bg-primary lg:px-12 md:px-8 px-6 py-6">
      <div class="">
        <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12">
          <div class="">
            <img src="@/assets/brandImg/logo.svg" width="100" alt="" />
            <p class="text-white text-xs tracking-wide leading-normal mt-3">
              Dura Exchange is a secured decentralized trading platform/wallet that prioritizes user privacy,
security, and full control over crypto currency assets. It offers a user-friendly interface for trading
various cryptocurrencies, ensuring that users can execute transactions without intermediaries.
The exchange supports a wide range of digital assets and provides advanced trading features.
It allows users to store, send, receive, trade and convert various digital assets to fiat securely.
            </p>
            <ul class="flex gap-2 mt-3">
              <li>
                <a class="text-white" href="#"><i class="fa fa-facebook"></i></a>
              </li>
              <li>
                <a class="text-white" href="#"><i class="fa fa-twitter"></i></a>
              </li>
              <li>
                <a class="text-white" href="#"><i class="fa fa-github"></i></a>
              </li>
              <li>
                <a class="text-white" href="#"><i class="fa fa-linkedin"></i></a>
              </li>
              <!-- <li>
                <a class="text-primary-color" href="#"
                  ><i class="fa fa-envelope"></i
                ></a>
              </li> -->
            </ul>
          </div>

          <div class="">
            <h6 class="text-secondary uppercase mb-2 text-sm">Quick Links</h6>
            <ul class="flex flex-col gap-1">
              <li class="text-white" v-for="(item, i) in menu" :key="i">
                <router-link class="text-sm capitalize" :to="item.href">{{ item.label.split('-').join(' ') }}</router-link>
              </li>
            </ul>

            <div class="flex lg:flex-row md:flex-row flex-col justify-between gap-2 mt-3">
              <p class="text-secondary text-xs">
                Copyright &copy; {{ thisYear }} Dura. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<!-- <script
import { computed } from 'vue'

const thisYear = computed(() => {
  const yearToday = new Date().getFullYear()
  return yearToday
})
</script> -->

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => [],
      required: true
    }
  },

  computed: {
    thisYear() {
      const yearToday = new Date().getFullYear()
      return yearToday
    }
  }
}
</script>
