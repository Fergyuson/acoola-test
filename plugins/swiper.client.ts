import { defineNuxtPlugin } from '#app'
import Swiper from 'swiper'                       // default-экспорт = SwiperCore
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

Swiper.use([Navigation, Pagination, Autoplay])    // регистрируем модули

export default defineNuxtPlugin(() => {})