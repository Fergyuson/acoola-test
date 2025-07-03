<script setup lang="ts">
interface Project {
  id: number
  img: string
  link: string
}

const projects: Project[] = [
  { id:1, img:'/img/proj1.jpg', link:'/projects/1' },
  { id:2, img:'/img/proj2.jpg', link:'/projects/2' },
  { id:3, img:'/img/proj3.jpg', link:'/projects/3' },
  { id:4, img:'/img/proj4.jpg', link:'/projects/4' },
  { id:5, img:'/img/proj5.jpg', link:'/projects/5' }
]
</script>

<template>
  <section class="hero container mx-auto px-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <!-- Левая колонка -->
      <div class="relative bg-gradient-to-r from-[#0804A1] to-[#9278FA] rounded-xl p-8">
        <p class="text-sm text-white mb-2">digital creative agency</p>
        <h1 class="text-5xl font-bold text-white mb-6">
          СОЗДАНИЕ<br/>И ПРОДВИЖЕНИЕ<br/>САЙТОВ
        </h1>

        <!-- Горизонтальный скролл проектов -->
        <ul class="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          <li v-for="p in projects" :key="p.id" class="shrink-0">
            <a :href="p.link">
              <img :src="p.img"
                   alt=""
                   class="h-24 w-24 object-cover rounded-lg border-2 border-white"/>
            </a>
          </li>
        </ul>

        <!-- Ссылка «Наши проекты» -->
        <a href="/projects"
           class="absolute top-4 right-4 inline-flex items-center justify-center bg-white rounded-full p-2">
          <svg class="h-4 w-4 text-[#7B66FF]" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </a>
      </div>

      <!-- Правая колонка
      <div class="relative">
        <img src="/img/flower-hero.jpg" alt="Flower" class="rounded-xl w-full object-cover"/>
        <div class="absolute bottom-4 left-4 bg-white rounded-xl p-4 flex items-center justify-between">
          <div>
            <p class="text-2xl font-bold">320&nbsp;000&nbsp;₽</p>
            <p class="text-xs text-gray-500">Top-10 самых креативных сайтов в России</p>
          </div>
          <button class="ml-4 inline-flex items-center bg-accent rounded-full px-4 py-2 text-sm font-semibold">
            Заказать
            <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none"/></svg>
          </button>
        </div>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
