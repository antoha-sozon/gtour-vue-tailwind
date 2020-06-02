<template>
  <main class="relative min-h-full">
    <picture class="fixed inset-0 -m-4">
      <img class="w-full h-full object-cover" :src="SearchTourBg" alt="Search Tour Background">
      <span class="absolute inset-0 bg-blue-900 opacity-75"></span>
    </picture>
    <section class="relative">
      <h1 class="mb-2 py-2 text-xl text-gray-300 text-center">Запрос на поиск тура</h1>
      <p class="mb-1 text-sm text-gray-300">Заполните форму и наши менеджеры подберут для Вас лучший вариант.</p>
      <small class="block mb-4 text-gray-500">* Заполните форму и получите скидку от 5%</small>
      <form
        @submit.prevent="submitForm"
        class="w-full mb-4"
      >
        <div class="flex">
          <label class="block w-full mb-1">
            <span class="block tracking-wide text-gray-300 text-xs font-bold mb-1">*Ваше имя</span>
            <input
              v-model="name"
              class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 border-none rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Ваше имя"
              required
            >
          </label>
        </div>
        <div class="flex">
          <label class="block w-full mb-1">
            <span class="block tracking-wide text-gray-300 text-xs font-bold mb-1">*Ваш номер телефона</span>
            <input
              v-model="phone"
              class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 border-none rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="tel"
              placeholder="Укажите ваш телефон"
              required
            >
          </label>
        </div>
        <div class="flex">
          <div class="flex w-1/2 pr-1">
            <label class="block w-full mb-1">
              <span class="block tracking-wide text-gray-300 text-xs font-bold mb-1">*Дата вылета</span>
              <input
                v-model="dateStart"
                class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 border-none rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="date"
                required
              >
            </label>
          </div>
          <div class="flex w-1/2 pl-1">
            <label class="block w-full mb-1">
              <span class="block tracking-wide text-gray-300 text-xs font-bold mb-1">*Дата возвращения</span>
              <input
                v-model="dateFinish"
                class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 border-none rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="date"
                required
              >
            </label>
          </div>
        </div>
        <div class="flex">
          <label class="block w-full mb-1">
            <span class="block tracking-wide text-gray-300 text-xs font-bold mb-1">*Город вылета</span>
            <input
              v-model="cityFrom"
              class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 border-none rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Город вылета"
              required
            >
          </label>
        </div>
        <div class="flex">
          <label class="block w-full mb-1">
            <span class="block tracking-wide text-gray-300 text-xs font-bold mb-1">*Страна прибытия</span>
            <input
              v-model="countryTo"
              class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 border-none rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Страна прибытия"
              required
            >
          </label>
        </div>
        <div class="flex">
          <label class="block w-full mb-1">
            <span class="block tracking-wide text-gray-300 text-xs font-bold mb-1">Комментарий</span>
            <textarea
              v-model="comments"
              class="appearance-none block w-full h-32 bg-gray-200 text-sm text-gray-700 border-none rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Опишите ваши пожелания по туру (например количество человек, интересующий рейтинг отеля, питание, экскурсии и т.д.)"
              value=""
            ></textarea>
          </label>
        </div>
        <div class="flex">
          <button
            class="block w-2/3 m-auto px-4 py-2 rounded bg-blue-700 text-gray-300"
            type="submit"
          >Отправить</button>
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
      name: '',
      phone: '',
      dateStart: '',
      dateFinish: '',
      cityFrom: '',
      countryTo: '',
      comments: '',
      formData: [],
      textarea: null,
      SearchTourBg,
    }
  },
  methods: {
    submitForm() {
      this.formData.name = this.name;
      this.formData.phone = this.phone;
      this.formData.dateStart = this.dateStart;
      this.formData.dateFinish = this.dateFinish;
      this.formData.cityFrom = this.cityFrom;
      this.formData.countryTo = this.countryTo;
      this.formData.comments = this.comments;
      console.log(this.formData);
    }
  }
}
</script>
