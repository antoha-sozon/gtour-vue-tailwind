<template>
  <main>
    <picture class="fixed top-0 left-0 right-0 z-10 w-full h-full mt-16">
      <img :src="tourBg" class="w-full h-full object-cover" alt="Tour background">
      <div class="fixed top-0 left-0 right-0 z-10 w-full h-full bg-blue-900 opacity-75"></div>
    </picture>
    <section class="relative z-20 text-gray-300 py-4">
      <h1 class="mb-6 text-xl leading-none"><b>G-Tour APP</b> - <span class="text-base">сервис для быстро поиска горячих, интересеных и доступных туров по популярным направлениям.</span></h1>
      <p class="mb-2 text-sm font-bold">Возможности приложения:</p>
      <ul class="pl-2 mb-6 text-sm italic">
        <li>- Горячие туры проверенные менеджерами G-Tour</li>
        <li>- Туры популярных направлений</li>
        <li>- Туры подобраны у ручном режиме. Отобраны выгодные цены, качественные отели и интересные даты</li>
        <li>- При подборе туров присутствует удобный фильтр</li>
        <li>- Форма заказа подбора тура</li>
        <li>- Форма заказа тура</li>
      </ul>
      <p class="mb-2 text-sm font-bold">Если у Вас возникли вопросы или есть предложения, Вы всегда можете связаться c руководителями G-Tour удобным для Вас способом:</p>
      <ul class="pl-2 mb-4 text-sm italic">
        <li>- По телефонам:<br>(093)-7-222-7-02 (Viber), (099)-7-222-7-05</li>
        <li>- Наш офис:<br>г. Харьков, Ул. Тобольская 42. Офис 416 (Метро 23 Августа)</li>
        <li>- На сайте:<br><a href="http://g-tour.com.ua/" target="_blank">G-tour.com.ua</a></li>
      </ul>
      <p class="mb-2 text-sm font-bold">Телеграм бот "Горячих туров": <a class="text-blue-400" href="https://t.me/g_tour_hot_bot" target="_blank">@g_tour_hot_bot</a></p>
      <p class="text-sm font-bold">Разработка приложения: <a class="text-blue-400" href="mailto:sozonenko.anton@gmail.com">sozonenko.anton@gmail.com</a></p>
    </section>
  </main>
</template>

<script>
import tourBg from '@/assets/tour-bg.jpg';
export default {
    data() {
        return {
            data: null,
            tourBg,
        }
    },
}
</script>
