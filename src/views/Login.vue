<template>
  <main class="relative min-h-full">
    <picture class="fixed inset-0 -m-4">
      <img class="w-full h-full object-cover" :src="SearchTourBg" alt="Search Tour Background">
      <span class="absolute inset-0 bg-blue-900 opacity-75"></span>
    </picture>
    <section class="relative">
      <h1 class="mb-6 py-2 text-xl text-gray-300 text-center">Авторизация</h1>
      <form
        @submit.prevent="submitForm"
        class="w-full mb-4"
      >
        <div class="flex">
          <label class="block w-full mb-1">
            <span class="block tracking-wide text-gray-300 text-xs font-bold mb-1">*Ваш e-mail адрес</span>
            <input
              v-model="email"
              class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 border-none rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="email"
              placeholder="Укажите Вашу почту"
              required
            >
          </label>
        </div>
        <div class="flex">
          <label class="block w-full mb-1">
            <span class="block tracking-wide text-gray-300 text-xs font-bold mb-1">*Пароль</span>
            <input
              v-model="password"
              class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 border-none rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="password"
              placeholder="Пароль"
              required
            >
          </label>
        </div>
        <div class="flex">
          <button
            class="block w-2/3 m-auto px-4 py-2 rounded bg-blue-700 text-gray-300"
            type="submit"
          >Войти</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
    import SearchTourBg from '@/assets/search-tour-bg.jpg';
    export default {
        data() {
            return {
                email: '',
                password: '',
                formData: [],
                SearchTourBg,
            }
        },
        methods: {
            submitForm() {
                this.formData.email = this.email;
                this.formData.password = this.password;
                console.log(this.formData);
            }
        }
    }
</script>
