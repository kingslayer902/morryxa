<template>
  <section class="px-4 sm:px-6 pt-12 pb-24 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <template v-for="item in works" :key="item.id">
      <div
        v-if="item.type === 'video'"
        class="relative overflow-hidden rounded-sm shadow-md fade-in"
        :title="item.label"
      >
        <!-- THUMBNAIL VIDEO LOOP -->
        <video
          :src="item.src"
          autoplay
          muted
          loop
          playsinline
          class="w-full aspect-square object-cover transition duration-300 ease-in-out hover:opacity-80"
        ></video>

        <!-- OVERLAY TEXT -->
        <div
          class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
        >
          <span class="text-white text-xs font-semibold tracking-widest pointer-events-none">
            {{ item.label }}
          </span>
        </div>
      </div>
    </template>
  </section>
</template>

<script setup>
const works = [
  {
    id: 1,
    type: 'video',
    src: '/assets/works/sample1.mp4',
    label: 'cut & flow'
  },
  {
    id: 2,
    type: 'video',
    src: '/assets/works/sample4.mp4',
    label: 'editorial'
  },
  {
    id: 3,
    type: 'video',
    src: '/assets/works/sample3.mp4',
    label: 'by morryxa'
  }
]
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.5s ease-in-out both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
