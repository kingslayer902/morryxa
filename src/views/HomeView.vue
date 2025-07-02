<template>
  <main class="px-6 pt-20 pb-24 animate-fadein">
    <WorkGrid />
  </main>
</template>

<script setup>
import WorkGrid from '../components/WorkGrid.vue'
</script>

<style scoped>
@keyframes fadein {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadein {
  animation: fadein 0.5s ease-in-out;
}
</style>
