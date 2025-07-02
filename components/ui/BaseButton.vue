<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'sm'
  icon?: boolean
}>();
</script>

<template>
  <button
      :class="[
      'inline-flex items-center justify-center font-semibold transition-colors',
      size === 'sm' ? 'px-4 py-2 text-sm' : 'px-6 py-3',
      variant === 'primary' && 'bg-btn-gradient text-white hover:opacity-90',
      variant === 'secondary' && 'bg-accent text-gray-900 hover:opacity-90',
      variant === 'ghost' && 'bg-gray-900 text-white hover:bg-gray-700',
      'rounded-pill'
    ]"
  >
    <slot />
    <svg
        v-if="icon"
        class="ml-2 h-4 w-4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </button>
</template>
