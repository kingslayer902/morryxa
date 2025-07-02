<template>
  <footer class="w-full px-6 py-10 mt-12 border-t border-neutral-200 text-neutral-600 text-xs text-center space-y-6 tracking-wide">
    
    <!-- CONTACT -->
    <div class="space-y-3">
      <!-- Email -->
      <a
        href="mailto:morxyxa@example.com"
        class="block hover:text-black transition"
      >
        📩 morxyxa@example.com
      </a>

      <!-- Instagram -->
      <a
        href="https://instagram.com/morryxa"
        target="_blank"
        rel="noopener"
        class="block hover:text-black transition"
      >
        📷 @morryxa
      </a>
    </div>

    <!-- COPYRIGHT -->
    <p class="opacity-70 italic">
      © {{ new Date().getFullYear() }} morryxa — edited with chaos & coffee.
    </p>
  </footer>
</template>

<script setup>
// none
</script>

<style scoped>
footer {
  font-family: 'Helvetica Neue', sans-serif;
}
</style>
