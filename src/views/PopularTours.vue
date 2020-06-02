<template>
  <main>
    <div
      :class="{'translate-x-0': openFilter, '-translate-x-full': !openFilter }"
      class="fixed z-30 left-0 flex flex-col mt-16 transition duration-150 ease-in-out transform">
      <button
        @click="openFilter = !openFilter"
        class="absolute right-0 p-2 rounded-tr rounded-br bg-blue-900 transform translate-x-full focus:outline-none"
        type="button"
      >
        <svg class="w-5 h-5 fill-current stroke-current text-gray-200" :viewBox="openFilter ? '0 0 24 24' : '0 0 18 12'" xmlns="http://www.w3.org/2000/svg">
          <path :class="{'hidden': openFilter, 'inline-flex': !openFilter }" d="M7 12h4v-2H7v2zM0 0v2h18V0H0zm3 7h12V5H3v2z"/>
          <path :class="{'hidden': !openFilter, 'inline-flex': openFilter }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <select class="block w-full bg-gray-200 text-sm text-gray-700 border-b py-2 px-4 leading-tight focus:outline-none focus:bg-white">
        <option selected disabled hidden>Цена</option>
        <option value="min">От дешевых</option>
        <option value="max">От дорогих</option>
      </select>
      <select class="block w-full bg-gray-200 text-sm text-gray-700 border-b py-2 px-4 leading-tight focus:outline-none focus:bg-white">
        <option selected disabled hidden>Рейтинг отелей</option>
        <option value="1">Рейтинг 1*</option>
        <option value="2">Рейтинг 2*</option>
        <option value="3">Рейтинг 3*</option>
        <option value="4">Рейтинг 4*</option>
        <option value="4">Рейтинг 5*</option>
      </select>
      <select class="block w-full bg-gray-200 text-sm text-gray-700 border-b py-2 px-4 leading-tight focus:outline-none focus:bg-white">
        <option selected disabled hidden>Город вылета</option>
        <option value="kh">Харьков</option>
        <option value="kv">Киев</option>
        <option value="dn">Днепр</option>
        <option value="lv">Львов</option>
      </select>
      <select class="block w-full bg-gray-200 text-sm text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white">
        <option selected disabled hidden>Страна прибытия</option>
        <option value="kh">Египет</option>
        <option value="kv">Турция</option>
        <option value="dn">Франция</option>
        <option value="lv">Кипр</option>
      </select>
    </div>
    <section >
      <article
        class="relative overflow-hidden flex flex-wrap -mx-4 pt-8 pb-4 px-4 text-white bg-cover bg-center"
        v-for="(tour, innerIndex) in data"
        :key="innerIndex"
      >
        <div class="absolute inset-0 z-10">
          <picture>
              <img class="w-full h-full object-cover" :src="tourBg" :alt="tour.tourCityTo">
          </picture>
          <div class="absolute inset-0 bg-black opacity-75"></div>
        </div>
        <div class="relative z-20 w-full">
          <div class="flex items-center justify-between w-full mb-16 pl-2 border-l-2 border-blue-900">
            <span class="text-base font-bold">{{ tour.tourCityTo }}</span>
            <div class="flex-shrink-0 -mt-4 -mr-4 bg-gray-200 py-2 px-2 rounded-tl	rounded-bl">
              <span class="px-2 py-1 text-xl text-blue-900 font-bold rounded border border-blue-900 border-dashed">{{ tour.tourPriceUSD }}$</span>
            </div>
          </div>
          <div class="flex items-end">
            <div class="flex flex-col w-2/3 pr-4 text-xs">
              <span class="flex items-center mb-2">
                <svg class="h-4 w-4 mr-2 flex-shrink-0 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M272.037 102.9l-35.285-32.559c-.397-.369-.893-.574-1.372-.574-.397 0-.741.139-1.021.41l-4.93 4.771c-.292.287-.479.75-.475 1.213.002.262.066.631.354.904l28.146 26.877 14.583-1.042zM90.067 360.223l-26.084-28.891c-.309-.348-.733-.396-.96-.396-.445 0-.877.172-1.186.469l-4.868 4.773c-.699.67-.492 1.742.09 2.412l31.531 36.189 1.477-14.556zM355.219 96.766l-35.286-32.547c-.4-.373-.903-.58-1.39-.58-.401 0-.746.137-1.025.404l-4.899 4.771c-.305.301-.487.75-.484 1.215.002.264.067.639.365.924l28.135 26.867 14.584-1.054zM98.559 277.264L72.473 248.34c-.294-.32-.73-.371-.963-.371-.438 0-.866.17-1.171.467l-4.924 4.783c-.681.666-.441 1.732.135 2.395l31.532 36.193 1.477-14.543z"/><path d="M173.906 119.658a3.996 3.996 0 0 1-3.445-1.533C129.784 65.859 93.19 36.719 55.297 26.422c-.017-.004-.03-.012-.046-.018-.015-.004-.03-.004-.045-.008-4.708-1.385-18.376-3.619-24.921 2.611-4.602 4.381-5.497 12.564-2.659 24.324 9.226 38.199 37.315 75.594 88.399 117.682a4.004 4.004 0 0 1 1.437 3.488L87.795 469.018l20.063 15.086 80.512-214.563a4 4 0 0 1 6.038-1.873l140.787 98.426a4 4 0 0 1 1.673 3.809l-11.361 84.947 15.9 20.238 34.855-64.449a3.995 3.995 0 0 1 2.636-1.998 3.994 3.994 0 0 1 3.238.668l13.679 9.967 16.737 2.34-1.852-16.791-9.596-13.961a3.998 3.998 0 0 1 1.493-5.836l65.43-33.051-19.776-16.455-85.226 8.947a3.993 3.993 0 0 1-3.76-1.781L264.85 199.199a3.99 3.99 0 0 1-.443-3.49 3.99 3.99 0 0 1 2.486-2.49l216.735-74.422-14.519-20.506-295.203 21.367z"/></svg>
                {{ tour.tourCityFrom }} - {{ tour.tourCountry }}
              </span>
                <span class="flex items-center mb-2">
                <svg class="h-4 w-4 mr-2 flex-shrink-0 fill-current" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><path d="M14 26c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm24-12H22v14H6V10H2v30h4v-6h36v6h4V22c0-4.42-3.58-8-8-8z"/></svg>
                {{ tour.tourHotel }} {{ tour.tourHotelRating }}
              </span>
                <span class="flex items-center">
                <svg class=" w-4 mr-2 flex-shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.9 1H18c0-.6-.4-1-1-1s-1 .4-1 1H8c0-.6-.4-1-1-1S6 .4 6 1H1.1C.5 1 0 1.5 0 2.1v20.8c0 .6.5 1.1 1.1 1.1h21.8c.6 0 1.1-.5 1.1-1.1V2.1c0-.6-.5-1.1-1.1-1.1zM22 22H2V8h20v14zm0-15H2V3h4v1c0 .6.4 1 1 1s1-.4 1-1V3h8v1c0 .6.4 1 1 1s1-.4 1-1V3h4v4z"/><path d="M10.3 17.7c.4.4 1 .4 1.4 0l4.1-4.1c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L11 15.7l-1.4-1.4c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.1 2z"/></svg>
                <time class="mr-2 pr-2 border-r leading-none" :datetime="tour.tourDopData">{{ tour.tourDopData }}</time> {{ tour.tourDopHights }} ночей
              </span>
            </div>
            <router-link :to="'/ditails/' + innerIndex">
              <button class="py-1 px-2 text-gray-300 bg-blue-900 rounded" type="button">Подробнее</button>
            </router-link>
          </div>
        </div>
      </article>
    </section>
    <div v-if="loading" class="absolute inset-0 z-30 flex items-center justify-center bg-blue-900"><Loader/></div>
  </main>
</template>

<script>
import axios from 'axios';
import Loader from "./../components/Loader";
import tourBg from '@/assets/defaultTourBg.jpg';
export default {
  data() {
    return {
        tourBg,
        data: null,
        loading: true,
        openFilter: false,
    }
  },
  components: {
      Loader,
  },
  mounted() {
    axios
      .get('http://test3.workshop-it.ru/admin/components/createAndroidJson')
      .then(response => {
        this.data = response.data;
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
