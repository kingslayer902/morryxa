<template>
  <section class="flex justify-center items-center min-h-screen px-6 py-24 bg-white text-neutral-800 animate-fadein">
    <div class="max-w-2xl text-center space-y-8">
      <!-- NAMA lowercase -->
      <h1 class="text-4xl sm:text-5xl font-bold tracking-wide lowercase">morryxa</h1>

      <!-- BIO -->
      <p class="text-sm sm:text-base leading-relaxed opacity-90 tracking-normal">
        i cut things and make them flow.  
        mostly messing with frames, colors, and vibes.  
        sometimes it’s music videos, sometimes it’s just feelings rendered in motion.
      </p>

      <!-- GAYA / FAKTA RINGAN -->
      <div class="text-xs text-neutral-500 tracking-wide space-y-1 pt-4">
        <p>🎞 based in pixels</p>
        <p>🎧 fueled by music</p>
        <p>🌀 editing since things went blurry</p>
      </div>

      <!-- QUOTE VIBE -->
      <blockquote class="text-[11px] sm:text-xs italic opacity-70 pt-6">
        "cut sharp. feel deep. no rules."
      </blockquote>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
section {
  font-family: 'Helvetica Neue', sans-serif;
}

@keyframes fadein {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadein {
  animation: fadein 0.5s ease-out;
}
</style>
