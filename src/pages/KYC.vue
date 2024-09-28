<template>
  <div class="container">
    <div class="bg-white lg:w-7/12 md:w-8/12 w-full my-6 mx-auto p-6 rounded-lg">
      <span
        class="text-primary bg-secondary flex items-center justify-center w-[80px] h-[80px] rounded-full"
      >
        <icon icon="mage:id-card-fill" class="h-[30px] w-[30px]" />
      </span>
      <h1 class="font-bold text-2xl mb-0 mt-3">KYC Verification</h1>
      <span class="block text-sm"
        >Please, submit the details requested to verify your account.</span
      >
      <!-- <div class="mb-8">
        <router-link to="/" class="text-[13px] underline text-neutral-600 block w-fit"
          >Login as a talent</router-link
        >
      </div> -->

      <!-- <div class="flex flex-row items-center justify-between my-8 gap-[20px]">
        <hr class="bg-[#FFFFFF40] h-[1px] lg:w-[100%] w-[50%]" />
        <h6 class="flex flex-row text-center items-center w-auto gap-[14px]">or</h6>
  
        <hr class="bg-[#FFFFFF40] h-[1px] lg:w-[100%] w-[50%]" />
      </div> -->

      <div class="mt-5">
        <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-2">
          <div>
            <label for="">Full Legal Name</label>
            <Field
              name="full_legal_name"
              class="input"
              placeholder="Enter your full legal name"
              type="text"
              rules="required"
            />
            <ErrorMessage
              name="full_legal_name"
              class="text-xs text-red-500 text-semibold"
            ></ErrorMessage>
          </div>

          <div>
            <label for="">Email</label>
            <Field
              name="email"
              class="input"
              placeholder="Enter your email"
              type="email"
              rules="required"
            />
            <ErrorMessage name="email" class="text-xs text-red-500 text-semibold"></ErrorMessage>
          </div>

          <div>
            <label for="">Phone Number</label>
            <Field
              name="phoneNumber"
              class="input"
              placeholder="Enter your Valid Phone Number"
              type="tel"
              rules="required"
            />
            <ErrorMessage
              name="phoneNumber"
              class="text-xs text-red-500 text-semibold"
            ></ErrorMessage>
          </div>

          <div>
            <label for="">Document Type</label>
            <Field name="document_type" class="select" as="select" rules="required">
              <option value="">--Select Document Type</option>
              <option
                v-for="item in ['NIN', 'Voters Card', 'International Passport', 'Other']"
                :key="item"
                value="item"
              >
                {{ item }}
              </option>
            </Field>
            <ErrorMessage
              name="document_type"
              class="text-xs text-red-500 text-semibold"
            ></ErrorMessage>
          </div>

          <div>
            <label for="">Document</label>
            <div
              class="dropzone-container flex flex-col items-center justify-center text-center"
              @dragover="dragover"
              @dragleave="dragleave"
              @drop="drop"
            >
              <input
                type="file"
                name="file"
                id="fileInput45"
                class="hidden-input"
                @change="onChange"
                ref="file"
                accept="image/*"
              />

              <label
                for="fileInput45"
                class="file-label mb-0 flex flex-col items-center"
                v-if="Object.keys(files).length <= 0"
              >
                <icon icon="ph:upload-simple-fill" class="text-[30px]" />
                <div v-if="isDragging">Release to drop files here.</div>
                <div v-else class="text-[16px] font-medium mb-0">
                  <span class="text-primary font-semibold"> Upload Document </span>
                </div>
              </label>

              <div
                v-else
                class="dropzone-container flex flex-col items-center justify-center"
                :style="generateURL"
              >
                <div class="flex flex-col gap-2">
                  <label
                    class="bg-white py-2 px-4 font-semibold shadow text-primary capitalize text-sm block w-fit rounded-md"
                    for="fileInput"
                    role="button"
                  >
                    replace
                  </label>
                  <button
                    class="bg-white py-2 px-4 font-semibold shadow text-red-600 capitalize text-sm block w-fit rounded-md"
                    @click="removePhoto"
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- "full_legal_name": "string", "phoneNumber": "string", "document_type": "string",
          "document": "string", "email": "string" -->

          <div class="mt-3 text-center">
            <button
              class="w-full brand-btn-md flex items-center justify-center gap-2"
              :disabled="isLoading || !meta.valid"
              :class="[
                isLoading
                  ? 'bg-neutral-400 text-neutral-700'
                  : !meta.valid
                    ? 'bg-neutral-400 text-neutral-700'
                    : 'brand-btn-md brand-primary'
              ]"
            >
              <span class="flex justify-center" v-if="isLoading">
                <icon icon="line-md:loading-alt-loop" class="text-[20px]" />
              </span>
              <span> Submit </span>
            </button>
          </div>

          <!-- <span class="block text-center font-regular text-[12px]"
            >By continuing you agree to the
            <a href="#" class="text-[#007BFF]">terms of service</a> and
            <a href="#" class="text-[#007BFF]">privacy policy</a>
          </span> -->
        </vForm>
      </div>
    </div>
  </div>
</template>

<script>
import $request from '@/axios/index'
export default {
  components: {},

  data() {
    return {
      isLoading: false,
      typePassword: 'password',
      isDragging: false,
      files: {},
      hasPreview: false
    }
  },

  methods: {
    onSubmit(values) {
      console.log(values)
      // this.$router.push('/dashboard')
      this.isLoading = true
      //   const payload = {
      //     ...values,
      //     document: this.files
      //   }
      //    "full_legal_name": "string", "phoneNumber": "string", "document_type": "string",
      //     "document": "string", "email": "string"
      let formdata = new FormData()
      formdata.append('full_legal_name', values.full_legal_name)
      formdata.append('phoneNumber', values.phoneNumber)
      formdata.append('document_type', values.document_type)
      formdata.append('email', values.email)
      formdata.append('document', this.files[0])
      // try {
      $request
        .post('/account/complete-kyc', formdata)
        .then((req) => {
          console.log(req)
          this.$router.push('/submitted')
        })
        .catch((err) => {
            console.log(err.response.data.message)
          this.$swal
            .fire({
              title: 'Error 😫',
              text: err.response.data.message,
              icon: 'warning',
              confirmButtonText: 'Retry'
            })
            // .then((result) => {
            //   console.log(result, 'kkk')
            //   if (result.isConfirmed) {
            //     this.$router.push('/login')
            //   }
            // })
        })
        .finally(() => {
          this.isLoading = false
        })
    },

    onChange() {
      this.files = this.$refs.file.files
    },

    dragover(e) {
      e.preventDefault()
      this.isDragging = true
    },

    dragleave() {
      this.isDragging = false
    },

    drop(e) {
      e.preventDefault()
      this.$refs.file.files = e.dataTransfer.files
      this.onChange()
      this.isDragging = false
    },

    removePhoto() {
      if (Object.keys(this.files).length !== 0) {
        this.files = {}
      }
    }
  },

  computed: {
    generateURL() {
      let fileSrc = URL.createObjectURL(this.files[0])
      // setTimeout(() => {
      //   URL.revokeObjectURL(fileSrc)
      // }, 1000)
      return { backgroundImage: `url(${fileSrc})` }
    }
  },

  mounted() {
    // const isAuth = this.$store.getters['auth/isAuthenticated']
    // if (isAuth) {
    //   const isEmailVerified = this.user.email_verified_at
    //   if (isEmailVerified !== null) {
    //     this.$router.push('/department').catch(() => {})
    //   } else {
    //     this.$router.push('/auth/verification')
    //   }
    // }
  }
}
</script>

<style scoped>
/* .main {
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: 100vh;
    justify-content: center;
    text-align: center;
  } */

.dropzone-container {
  height: 140px;
  width: 100%;
  background: #ededed;
  /* border: 2px solid var(---primary-color); */
  /* border-style: ; */
  border-radius: 12px;
  background-size: cover;
  background-position: center;
}

.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

.file-label {
  font-size: 20px;
  display: block;
  cursor: pointer;
}

.preview-container {
  display: flex;
  margin-top: 2rem;
}

.preview-card {
  display: flex;
  border: 1px solid #a2a2a2;
  padding: 5px;
  margin-left: 5px;
}

.preview-img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #a2a2a2;
  background-color: #a2a2a2;
}
</style>
