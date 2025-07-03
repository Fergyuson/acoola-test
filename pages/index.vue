<script setup lang="ts">
import ModalWrapper from '~/components/ui/ModalWrapper.vue'
import BaseButton   from '~/components/ui/BaseButton.vue'

import HeroSlider from '~/components/hero/HeroSlider.vue'
import ServicesSlider from '~/components/services/ServicesSlider.vue'
import PriceCalculator from '~/components/calculator/PriceCalculator.vue'
import { useModal } from '~/composables/useModal'
const { open } = useModal()
</script>

<template>
  <main class="space-y-24">
    <!-- Hero -->
    <HeroSlider />

    <!-- Services -->
    <section id="services" class="container mx-auto">
      <h2 class="mb-8 text-3xl font-bold">Наши услуги</h2>
      <ServicesSlider />
    </section>

    <!-- Calculator -->
    <section id="calc" class="container mx-auto">
      <PriceCalculator @open-modal="open" />
    </section>
  </main>

  <!-- Глобальная модалка -->
  <ModalWrapper v-slot="{ content }">
    <h3 class="mb-4 text-xl font-semibold">Осталось совсем немного!</h3>
    <p v-if="content?.fromCalc" class="mb-4">
      Мы рассчитали стоимость вашего сайта — она составила
      <strong>{{ content.price.toLocaleString() }} ₽</strong>.
      Оставьте свои контакты, и наш менеджер свяжется с вами в ближайшее время.
    </p>

    <form class="space-y-4">
      <input
          type="text"
          placeholder="Ваше имя"
          class="w-full rounded-md border px-4 py-2"
          required
      />
      <input
          type="tel"
          placeholder="Телефон"
          class="w-full rounded-md border px-4 py-2"
          required
      />
      <BaseButton variant="primary" size="md" class="w-full">Отправить заявку</BaseButton>
    </form>
  </ModalWrapper>
</template>
