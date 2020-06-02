<template>
  <main>
    <picture class="fixed top-0 left-0 right-0 z-10 w-full h-full mt-16">
      <img :src="tourBg" class="w-full h-full object-cover" alt="Tour background">
      <div class="fixed top-0 left-0 right-0 z-10 w-full h-full bg-blue-900 opacity-75"></div>
    </picture>
    <section v-if="data" class="relative z-20 pt-4 text-gray-300">
      <h1 class="mb-4 text-base font-bold">Информация о выбранном туре:</h1>
      <div class="mb-4 pb-4 text-sm border-b border-blue-700">
        <p><b>Направление</b>: {{ data.tourCityFrom }} - {{ data.tourCountry }}, {{ data.tourCityTo }}</p>
        <p><b>Отель</b>: {{ data.tourHotel }} {{ data.tourHotelRating }}</p>
        <p><b>Дата</b>: {{ data.tourDopData }}</p>
        <p><b>Ночей</b>: {{ data.tourDopHights }}</p>
        <p><b>Питание</b>: {{ data.tourDopMeal }}</p>
        <p><b>Цена</b>: {{ data.tourPriceUSD }}$ (~ {{ data.tourPriceUAH }} грн)</p>
      </div>
      <p class="mb-4 text-center">Заполните форму и наши менеджеру свяжуться с Вами для подтверждения заказа или консультации</p>
      <form
        @submit.prevent="submitForm"
        class="w-full mb-4"
      >
        <input
          v-model="fromTo"
          type="hidden"
        >
        <input
          v-model="hotel"
          type="hidden"
        >
        <input
          v-model="date"
          type="hidden"
        >
        <input
          v-model="nights"
          type="hidden"
        >
        <input
          v-model="meal"
          type="hidden"
        >
        <input
          v-model="price"
          type="hidden"
        >
        <div class="flex">
          <label class="block w-full mb-1">
            <span class="block tracking-wide text-gray-300 text-xs font-bold mb-1">*Ваше имя</span>
            <input
              v-model="name"
              class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 border-none rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Укажите Ваше имя"
              required
            >
          </label>
        </div>
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
            <span class="block tracking-wide text-gray-300 text-xs font-bold mb-1">*Телефон</span>
            <input
              v-model="phone"
              class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 border-none rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="tel"
              placeholder="Телефон"
              required
            >
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
    <div v-if="loading" class="absolute inset-0 z-30 flex items-center justify-center bg-blue-900"><Loader/></div>
  </main>
</template>

<script>
import axios from "axios";
import Loader from "../components/Loader";
import tourBg from '@/assets/tour-bg.jpg';
export default {
  data() {
    return {
        fromTo: '',
        hotel: '',
        date: '',
        nights: '',
        meal: '',
        price: '',
        name: '',
        email: '',
        phone: '',
        formData: [],
        tourBg,
        loading: true,
        tourId: this.$route.params.tourId,
        data: null,
    }
  },
  components: {
    Loader,
  },
  methods: {
    submitForm() {
      this.formData.name = this.name;
      this.formData.email = this.email;
      this.formData.phone = this.phone;
      this.formData.fromTo = this.fromTo;
      this.formData.hotel = this.hotel;
      this.formData.date = this.date;
      this.formData.nights = this.nights;
      this.formData.meal = this.meal;
      this.formData.price = this.price;
      console.log(this.formData);
    }
  },
  mounted() {
    axios
      .get('http://test3.workshop-it.ru/admin/components/createAndroidJson')
      .then(response => {
          this.data = response.data[this.tourId];
          this.fromTo = this.data.tourCityFrom + ' - ' + this.data.tourCountry + ', ' + this.data.tourCityTo,
          this.hotel = this.data.tourHotel + ' ' + this.data.tourHotelRating,
          this.date = this.data.tourDopData,
          this.nights = this.data.tourDopHights,
          this.meal = this.data.tourDopMeal,
          this.price = this.data.tourPriceUSD + '$ (' + this.data.tourPriceUAH + ' грн)',
          console.log(this.data);
      })
      .catch(error => {
          console.log(error);
      })
      .finally(() => (
          this.loading = false
      ));
  }
}
</script>
