<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white text-neutral-900 shadow-sm">
    <nav class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-xs uppercase tracking-widest font-medium overflow-visible">
      
      <!-- LOGO -->
      <div class="text-[11px] font-bold select-none">morryxa</div>

      <!-- DESKTOP MENU -->
      <div class="hidden sm:flex space-x-6">
        <router-link
          to="/"
          class="hover:opacity-70 transition tracking-[.2em] text-[10px] font-light italic"
        >
          ✦ my art ✦
        </router-link>
        <router-link
          to="/about"
          class="hover:opacity-70 transition text-[10px] font-light italic"
        >
          about
        </router-link>
      </div>

      <!-- BURGER BUTTON -->
      <div class="sm:hidden relative z-50">
        <button
          @click="toggleMenu"
          aria-label="Toggle menu"
          class="relative w-8 h-8 flex flex-col justify-center items-center space-y-1"
        >
          <span
            class="block w-6 h-[2px] bg-black transition duration-300"
            :class="{ 'rotate-45 translate-y-[6px]': menuOpen }"
          ></span>
          <span
            class="block w-6 h-[2px] bg-black transition duration-300"
            :class="{ 'opacity-0': menuOpen }"
          ></span>
          <span
            class="block w-6 h-[2px] bg-black transition duration-300"
            :class="{ '-rotate-45 -translate-y-[6px]': menuOpen }"
          ></span>
        </button>
      </div>
    </nav>

    <!-- DROPDOWN MENU MOBILE -->
    <transition name="fade">
      <div
        v-if="menuOpen"
        class="sm:hidden fixed top-[56px] left-0 w-full bg-white shadow-md py-6 px-6 text-xs uppercase tracking-widest flex flex-col items-start space-y-4 z-40"
      >
        <router-link @click="closeMenu" to="/" class="hover:opacity-70 transition">
          ✦ my art ✦
        </router-link>
        <router-link @click="closeMenu" to="/about" class="hover:opacity-70 transition">
          about
        </router-link>
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
