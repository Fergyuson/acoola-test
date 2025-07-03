<script setup lang="ts">
// 1. Импортируем Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

// 2. Объявляем данные карточек (можно в будущем вынести в JSON)
const services = [
  { title: 'Landing page', desc: 'Лендинги с адаптивным дизайном для всех типов устройств' },
  { title: 'Внедрение Bitrix24', desc: 'Оформление интерфейсов под устройства' },
  { title: 'Интернет-магазин', desc: 'Удобные интерфейсы с фокусом на мобильную версию' },
  { title: 'Личный кабинет', desc: 'Интуитивно понятные личные кабинеты' },
  { title: 'Техподдержка', desc: 'Сопровождение сайта на 30 дней — в подарок' },
  { title: 'Сайты на WordPress', desc: 'Оформление интерфейсов под устройства.' },
  { title: 'Проектирование интерфейса', desc: 'Удобные интерфейсы с фокусом на мобильную версию' }
]
</script>

<template>
  <ClientOnly>
    <Swiper
        class="py-8"
        :space-between="20"
        :navigation="true"
        :slides-per-view="3"
        :breakpoints="{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 1.5 },
    1024: { slidesPerView: 3 }
  }"
    >
      <SwiperSlide
          v-for="(srv, i) in services"
          :key="i"
          class="relative shrink-0 w-[413px] h-[400px] rounded-xl bg-white p-6 shadow-md"
      >
        <h3 class="bg-gradient-to-r text-transparent bg-clip-text text-xl font-semibold mb-2 break-words"
            style="background-image: linear-gradient(to bottom, #0804A1, #9278FA);"
        >{{ srv.title }}</h3>
        <p class="absolute bottom-10 text-[#313131]">{{ srv.desc }}</p>
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<style scoped>
/* точка активного слайда — кастомный цвет */
:deep(.swiper-pagination-bullet-active) {
  background: var(--color-accent);
}
/* стрелки поверх карточек */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: var(--color-primary-to);
  z-index: 10;
}
:deep(.swiper-slide) {
  width: 413px !important;
  height: 400px !important;
}
</style>
