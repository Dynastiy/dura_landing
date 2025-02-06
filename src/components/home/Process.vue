<template>
  <div class="container">
    <h1 class="font-bold text-xl text-center">Seamless Processes</h1>
    <h5 class="text-center text-[14px] text-gray500 lg:w-4/12 md:w-7/12 w-full mx-auto">
      Explore how you can engage in direct peer-to-peer (P2P) trading on Dura-Exchange while
      maintaining privacy and control over your assets:
    </h5>
    <div class="flex lg:flex-row md:flex-row flex-col gap-4 mt-8">
      <div
        class="w-full card-img h-[250px] flex flex-col justify-end p-6"
        v-for="(item, i) in info"
        :key="i"
        :style="`background: linear-gradient( transparent, #000), url(${item.cardImg}); background-position:center; background-size:cover`"
      >
        <h6 class="text-white text-sm font-bold">{{ item.title }}</h6>
        <p class="text-white text-xs">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          cardImg:
            'https://static.vecteezy.com/system/resources/thumbnails/019/153/476/small_2x/checklist-is-completed-by-hand-and-pen-document-for-testing-filling-out-exam-form-vector.jpg',
          title: 'Create Account',
          desc: 'Create an account on Dura-Exchange by providing necessary details. Set-up security features like two-factor authentication (2FA) for added protection.'
        },
        {
          cardImg: 'https://www.hurix.com/wp-content/uploads/2022/01/Cyber-security.jpg',
          title: 'Trade Securely',
          desc: 'Dura-Exchange ensures privacy by not storing sensitive user data. Users retain control over their private keys and funds.'
        },
        {
          cardImg:
            'https://xtb.scdn5.secure.raxcdn.com/kb_main_photo/0102/49/thumb_10148114_kb_main_photo_front.png',
          title: 'Direct Peer-to-Peer Trading',
          desc: 'Buyers and sellers communicate directly to negotiate terms. They can use chat features within our platform.'
        }
      ]
    }
  }
}
</script>

<style>
.card-img {
  /* background-color: linear-gradient( transparent, #000); */
}
</style>
