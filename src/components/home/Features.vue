<template>
  <div class="container">
    <div class="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 justify-center gap-6">
      <div class="" v-for="(item, idx) in features" :key="idx">
        <span
          class="block text-amber-600 bg-amber-100 rounded-full w-fit text-3xl p-[10px] mx-auto mb-2"
        >
          <icon :icon="item?.icon" />
        </span>
        <h5 class="font-medium text-sm text-center">{{ item?.header }}</h5>
        <h6 class="font-light text-xs text-center text-gray500">
          {{ item?.description }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          header: 'Non-custodial wallet',
          description:
            'Dura exchange provides a non-custodial wallet, meaning users retain full control over their funds and private keys.',
          icon: 'ic:round-lock'
        },
        {
          header: 'Cryptocurrency trading',
          description: 'Allows users to securely buy, sell, trade and convert cryptocurrencies.',
          icon: 'twemoji:chart-increasing'
        },
        {
          header: 'Fiat-crypto trading',
          description: 'Allows users to trade cryptocurrencies and fiat money.',
          icon: 'twemoji:currency-exchange'
        },
        {
          header: 'Multi-Signature Security',
          description:
            'Dura-Exchange employs multi-signature (multisig) technology, requiring multiple private keys to authorize transactions, enhancing security and reducing the risk of unauthorized access.',
          icon: 'mdi:shield-key'
        },
        {
          header: 'User-Friendly Interface',
          description:
            'The platform is designed with an intuitive interface, making it accessible for both beginners and experienced traders.',
          icon: 'ic:baseline-touch-app'
        },
        {
          header: 'Security features',
          description:
            'Dura Exchange has strong security procedures, including encryption, two-factor authentication, and defense against DDoS attacks',
          icon: 'mdi:security'
        },
        {
          header: 'Supporting services',
          description:
            'We provide services to help users earn interest and transact cryptocurrencies.',
          icon: 'fluent:service-cluster-24-regular'
        }
      ]
    }
  }
}
</script>

<style>
.line {
  height: 1px;
  background: var(---gray-300);
}
</style>
