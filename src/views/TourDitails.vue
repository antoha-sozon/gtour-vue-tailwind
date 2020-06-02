<template>
  <main>
    <picture class="fixed top-0 left-0 right-0 z-10 w-full h-full mt-16">
      <img :src="tourBg" class="w-full h-full object-cover" alt="Tour background">
      <div class="fixed top-0 left-0 right-0 z-10 w-full h-full bg-blue-900 opacity-75"></div>
    </picture>
    <section v-if="data" class="relative z-20">
      <article class="flex items-center justify-between py-6">
        <h1 class="flex flex-col text-xl font-bold text-gray-300 pl-2 pr-2 border-l-2 border-blue-700">
          <span class="text-xs italic font-light">Город:</span>
          {{ data.tourCityTo }}
          <span class="text-xs italic font-light">Отель:</span>
          <span class="text-xs">{{ data.tourHotel }} {{ data.tourHotelRating }}</span>
        </h1>
        <div class="flex flex-col flex-shrink-0">
          <div class="-mr-2 p-2 bg-gray-300 text-blue-900 rounded">
            <span class="block p-2 px-4 leading-none border border-dashed border-blue-900 rounded">{{ data.tourPriceUSD }} $</span>
          </div>
          <span class="block text-right text-sm text-gray-300 ">~ {{ data.tourPriceUAH }} грн</span>
        </div>
      </article>
      <article class="relative p-4 -mx-4">
        <div class="relative z-10">
          <div class="inline-block mb-4">
            <a class="flex items-center justify-center mb-4 py-1 px-4 text-xs text-gray-300 bg-blue-500 rounded" :href="data.tourHotelLink" target="_blank">
              Подробнее об отеле
              <svg class="h-4 w-4 ml-2 fill-current text-gray-300" viewBox="0 0 768 1024" xmlns="http://www.w3.org/2000/svg"><path d="M640 768H128V257.906L256 256V128H0v768h768V576H640v192zM384 128l128 128-192 192 128 128 192-192 128 128V128H384z"/></svg>
            </a>
          </div>
          <div class="flex items-center justify-between mb-3 pb-3 border-b border-blue-500 text-xs">
            <div class="flex items-center w-1/2 pr-2">
              <svg class="h-6 w-6 mr-2 flex-shrink-0 fill-current text-gray-300" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M272.037 102.9l-35.285-32.559c-.397-.369-.893-.574-1.372-.574-.397 0-.741.139-1.021.41l-4.93 4.771c-.292.287-.479.75-.475 1.213.002.262.066.631.354.904l28.146 26.877 14.583-1.042zM90.067 360.223l-26.084-28.891c-.309-.348-.733-.396-.96-.396-.445 0-.877.172-1.186.469l-4.868 4.773c-.699.67-.492 1.742.09 2.412l31.531 36.189 1.477-14.556zM355.219 96.766l-35.286-32.547c-.4-.373-.903-.58-1.39-.58-.401 0-.746.137-1.025.404l-4.899 4.771c-.305.301-.487.75-.484 1.215.002.264.067.639.365.924l28.135 26.867 14.584-1.054zM98.559 277.264L72.473 248.34c-.294-.32-.73-.371-.963-.371-.438 0-.866.17-1.171.467l-4.924 4.783c-.681.666-.441 1.732.135 2.395l31.532 36.193 1.477-14.543z"/><path d="M173.906 119.658a3.996 3.996 0 0 1-3.445-1.533C129.784 65.859 93.19 36.719 55.297 26.422c-.017-.004-.03-.012-.046-.018-.015-.004-.03-.004-.045-.008-4.708-1.385-18.376-3.619-24.921 2.611-4.602 4.381-5.497 12.564-2.659 24.324 9.226 38.199 37.315 75.594 88.399 117.682a4.004 4.004 0 0 1 1.437 3.488L87.795 469.018l20.063 15.086 80.512-214.563a4 4 0 0 1 6.038-1.873l140.787 98.426a4 4 0 0 1 1.673 3.809l-11.361 84.947 15.9 20.238 34.855-64.449a3.995 3.995 0 0 1 2.636-1.998 3.994 3.994 0 0 1 3.238.668l13.679 9.967 16.737 2.34-1.852-16.791-9.596-13.961a3.998 3.998 0 0 1 1.493-5.836l65.43-33.051-19.776-16.455-85.226 8.947a3.993 3.993 0 0 1-3.76-1.781L264.85 199.199a3.99 3.99 0 0 1-.443-3.49 3.99 3.99 0 0 1 2.486-2.49l216.735-74.422-14.519-20.506-295.203 21.367z"/></svg>
              <span class="flex items-center text-gray-300">{{ data.tourCityFrom }} - {{ data.tourCountry }}</span>
            </div>
            <div class="flex items-center justify-end w-1/2 pl-2">
              <span class="flex items-center text-gray-300">{{ data.tourDopMeal }}</span>
              <svg class="h-6 w-6 ml-2 flex-shrink-0 fill-current text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 15h-1c0-1.1-.9-2-2-2-.4 0-.7.1-1 .3V13c0-1.1-.9-2-2-2-.4 0-.7.1-1 .3V11c0-1.1-.9-2-2-2-.4 0-.7.1-1 .3V9c0-1.1-.9-2-2-2s-2 .9-2 2v.3c-.3-.2-.6-.3-1-.3-1.1 0-2 .9-2 2v.3c-.3-.2-.6-.3-1-.3-1.1 0-2 .9-2 2v.3c-.3-.2-.6-.3-1-.3-1.1 0-2 .9-2 2H0c1.2 2.8 3.3 5.1 6 6.5V23c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-.3c1 .2 2 .3 3 .3s2-.1 3-.3v.3c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1.5c2.7-1.4 4.8-3.7 6-6.5zm-10 0c0-.6.4-1 1-1s1 .4 1 1h-2zm2-1.7c-.3-.2-.7-.3-1-.3s-.7.1-1 .3V13v-.3c.3.2.7.3 1 .3s.7-.1 1-.3v.6zm-3-2c-.3-.2-.7-.3-1-.3s-.7.1-1 .3V11v-.3c.3.2.7.3 1 .3s.7-.1 1-.3v.6zm0 1.7c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1zm-5 2c0-.6.4-1 1-1s1 .4 1 1H8zm2-1.7c-.3-.2-.6-.3-1-.3s-.7.1-1 .3V13v-.3c.3.2.6.3 1 .3s.7-.1 1-.3v.6zM7 15H5v-.3c.3.2.6.3 1 .3s.7-.1 1-.3v.3zm4-.3c.3.2.7.3 1 .3s.7-.1 1-.3v.3h-2v-.3zm6 0c.3.2.7.3 1 .3s.7-.1 1-.3v.3h-2v-.3zm4-.7c.6 0 1 .4 1 1h-2c0-.6.4-1 1-1zm-3-2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3-2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3-2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3 2c.6 0 1 .4 1 1H2c0-.6.4-1 1-1zm5 9H7v-1c.3.1.7.3 1 .4v.6zm9 0h-1v-.6c.3-.1.7-.2 1-.4v1zm-5-2c-3.4 0-6.5-1.6-8.5-4h16.9c-1.9 2.4-5 4-8.4 4zM8.7 4.3s-.2.4.1.6.7 0 .7 0c.8-.8.8-2-.2-2.8-.4-.4-.4-1 .1-1.5 0 0 .2-.3-.1-.5-.2-.2-.6 0-.6 0-.8.8-.7 2 .1 2.8.4.5.3 1-.1 1.4zM11.7 4.3s-.2.4.1.6.7 0 .7 0c.8-.8.8-2-.2-2.8-.4-.4-.4-1 .1-1.5 0 0 .2-.3-.1-.5-.2-.2-.6 0-.6 0-.8.8-.7 2 .1 2.8.4.5.3 1-.1 1.4zM14.7 4.3s-.2.4.1.6.7 0 .7 0c.8-.8.8-2-.2-2.8-.4-.4-.4-1 .1-1.5 0 0 .2-.3-.1-.5-.2-.2-.6 0-.6 0-.8.8-.7 2 .1 2.8.4.5.3 1-.1 1.4z"/></svg>
            </div>
          </div>
          <div class="flex items-center justify-between mb-3 pb-3 border-b border-blue-500 text-xs">
            <div class="flex items-center w-1/2 pr-2">
              <svg class="h-6 w-6 mr-2 flex-shrink-0 fill-current text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.9 1H18c0-.6-.4-1-1-1s-1 .4-1 1H8c0-.6-.4-1-1-1S6 .4 6 1H1.1C.5 1 0 1.5 0 2.1v20.8c0 .6.5 1.1 1.1 1.1h21.8c.6 0 1.1-.5 1.1-1.1V2.1c0-.6-.5-1.1-1.1-1.1zM22 22H2V8h20v14zm0-15H2V3h4v1c0 .6.4 1 1 1s1-.4 1-1V3h8v1c0 .6.4 1 1 1s1-.4 1-1V3h4v4z"/><path d="M10.3 17.7c.4.4 1 .4 1.4 0l4.1-4.1c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L11 15.7l-1.4-1.4c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.1 2z"/></svg>
              <span class="flex items-center text-gray-300">Вылет: {{ data.tourDopData }}</span>
            </div>
            <div class="flex items-center justify-end w-1/2 pl-2">
              <span class="flex items-center text-gray-300">{{ data.tourHotelRoom }}</span>
              <svg class="h-6 w-6 ml-2 flex-shrink-0 fill-current text-gray-300" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><path d="M14 26c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm24-12H22v14H6V10H2v30h4v-6h36v6h4V22c0-4.42-3.58-8-8-8z"/></svg>
            </div>
          </div>
          <div class="flex items-center justify-between mb-12 pb-3 border-b border-blue-500 text-xs">
            <div class="flex items-center w-1/2 pr-2">
              <svg class="h-6 w-6 mr-2 flex-shrink-0 stroke-current text-gray-300" fill="transparent" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 22h-1.9c-.8-1.8-2.5-3-4.6-3-2.8 0-5 2.2-5 5s2.2 5 5 5h6.5c1.9 0 3.5-1.6 3.5-3.5S16.4 22 14.5 22z"/><path d="M8 19c2.8 0 5 2.2 5 5"/><path d="M26.9 6.8h-1.2C25.3 5.7 24.2 5 23 5c-1.7 0-3 1.3-3 3s1.3 3 3 3H26.9c1.2 0 2.1-.9 2.1-2.1s-.9-2.1-2.1-2.1z"/><path d="M23 5c1.7 0 3 1.3 3 3"/><path d="M17.7 27C24 26.7 29 21.5 29 15.1 27.5 18 24.5 20 21 20c-5 0-9-4-9-9 0-3.5 2-6.5 4.9-8C10.3 3.1 5 8.4 5 15c0 1.6.3 3.1.9 4.5"/></svg>
              <span class="flex items-center text-gray-300">Ночей: {{ data.tourDopHights }}</span>
            </div>
            <div class="flex items-center justify-end w-1/2 pl-2">
              <span class="flex items-center text-gray-300">Кол-во чел.: {{ data.tourDopAdult }}</span>
              <svg class="h-6 w-6 ml-2 flex-shrink-0 fill-current text-gray-300" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><circle cx="23" cy="15" r="7"/><circle cx="53" cy="15" r="7"/><circle cx="80" cy="56" r="5"/><path d="M90.8 74.2l-3.5-8.4c-1.2-1.7-3.1-3-5.2-3.6-.6-.1-1.4-.2-2.1-.2h-5l-4.2-7.1c.1-.5.2-1 .1-1.5l-4.7-23.6c-1.9-2.1-4.3-3.7-7.1-4.7-1.9-.7-4-1.1-6.2-1.1s-4.2.4-6.2 1.1c-2.7 1-5.1 2.6-7.1 4.7L38 38.7l-1.8-8.9c-1.9-2.1-4.3-3.7-7.1-4.7-1.9-.7-4-1.1-6.2-1.1s-4.2.4-6.2 1.1c-2.7 1-5.1 2.6-7.1 4.7L5.1 53.4c-.3 1.6.7 3.2 2.4 3.5.1.1.3.1.5.1 1.4 0 2.7-1 2.9-2.4L15 34.3V88h6V57h4v31h6V34.3l4.1 20.3C35.3 56 36.6 57 38 57s2.7-1 2.9-2.4L45 34.3v10.9l-3.8 18.9H45V88h6V64h4v24h6V64.1h3.8L61 45.2V34.3l4.1 20.3c.2 1.2 1.2 2.1 2.3 2.3L75 69.8V88h4V76h2v12h4V70.6l2.2 5.2c.3.8 1.1 1.2 1.8 1.2.3 0 .5 0 .8-.2 1-.4 1.5-1.6 1-2.6z"/></svg>
            </div>
          </div>
          <router-link :to="'/order/' + tourId">
            <button class="block w-full mb-4 p-2 text-center text-xs uppercase text-gray-300 bg-blue-500 rounded" type="button">Забронировать тур</button>
          </router-link>
          <div class=" text-xs text-gray-300">
            <span class="block mb-2 text-base font-bold">О туре:</span>
            <p>{{ data.tourDop }}</p>
          </div>
        </div>
      </article>
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
        tourBg,
        loading: true,
        tourId: this.$route.params.tourId,
        data: null,
      }
    },
    components: {
      Loader,
    },
    mounted() {
      axios
        .get('http://test3.workshop-it.ru/admin/components/createAndroidJson')
        .then(response => {
            this.data = response.data[this.tourId];
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
