<script setup lang="ts">
import { useModal } from '~/composables/useModal'
const { isOpen, close, content } = useModal()
</script>

<template>
  <slot v-if="false" :content="content" />
  <Teleport to="body">
    <transition name="fade">
      <div
          v-if="isOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          @keydown.escape.prevent="close"
      >
        <div
            class="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
        >
          <slot :content="content" />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
