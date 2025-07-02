<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white text-neutral-900 shadow-sm">
    <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-xs uppercase tracking-widest font-medium">
      
      <!-- LOGO -->
      <div class="text-[11px] font-bold select-none">morryxa</div>

      <!-- DESKTOP MENU -->
      <div class="hidden sm:flex space-x-6">
        <router-link to="/" class="hover:opacity-70 transition">Work</router-link>
        <router-link to="/about" class="hover:opacity-70 transition">About</router-link>
      </div>

      <!-- BURGER BUTTON -->
      <button @click="toggleMenu" class="sm:hidden z-50 relative w-6 h-6 flex flex-col justify-between">
        <span
          class="block w-full h-[2px] bg-black transform transition duration-300"
          :class="{ 'rotate-45 translate-y-[8px]': menuOpen }"
        ></span>
        <span
          class="block w-full h-[2px] bg-black transition duration-300"
          :class="{ 'opacity-0': menuOpen }"
        ></span>
        <span
          class="block w-full h-[2px] bg-black transform transition duration-300"
          :class="{ '-rotate-45 -translate-y-[8px]': menuOpen }"
        ></span>
      </button>
    </nav>

    <!-- DROPDOWN MENU KECIL -->
    <transition name="fade">
      <div
        v-if="menuOpen"
        class="sm:hidden bg-white w-full shadow-md py-4 px-6 text-xs uppercase tracking-widest flex flex-col items-start space-y-4"
      >
        <router-link @click="closeMenu" to="/" class="hover:opacity-70 transition">Work</router-link>
        <router-link @click="closeMenu" to="/about" class="hover:opacity-70 transition">About</router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)
</script>

<style scoped>
header {
  font-family: 'Helvetica Neue', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
