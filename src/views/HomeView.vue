<template>
  <main class="min-h-screen bg-black text-white px-4 py-10 flex flex-col items-center">
    <!-- Profile Section -->
    <section class="flex flex-col items-center text-center">
      <img
        :src="avatarUrl"
        alt="Morryxa"
        class="w-28 h-28 rounded-full border-2 border-white object-cover mb-4"
      />
      <h1 class="text-xl font-bold">@morryxa</h1>
      <p class="text-sm text-gray-400">Visual Artist & Editor</p>
    </section>

    <!-- Link Buttons with Dropdowns -->
    <section class="mt-8 w-full max-w-sm space-y-3">
      <!-- Commission -->
      <button
        @click="showCommission = !showCommission"
        class="w-full bg-neutral-800 rounded-xl text-center py-3 hover:bg-neutral-700 transition cursor-pointer"
      >
        Commission (open)
      </button>
      <transition name="fade">
        <div
          v-if="showCommission"
          class="w-full bg-neutral-900 rounded-xl p-4 space-y-3"
        >
          <a
            href="https://instagram.com/morryxa"
            target="_blank"
            class="flex items-center space-x-3 bg-neutral-800 hover:bg-neutral-700 rounded-md p-3 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              class="w-6 h-6"
            />
            <span class="text-sm font-medium tracking-wide">@morryxa</span>
          </a>
          <p class="text-xs text-gray-400 text-center">
            DM me via Instagram for visual and motion edit commissions.
          </p>
        </div>
      </transition>

      <!-- My Works -->
      <button
        @click="showWorks = !showWorks"
        class="w-full bg-neutral-800 rounded-xl text-center py-3 hover:bg-neutral-700 transition cursor-pointer"
      >
        My Works
      </button>
      <transition name="fade">
        <div
          v-if="showWorks"
          class="w-full bg-neutral-900 rounded-xl p-4 space-y-4"
        >
          <div
            v-for="item in works"
            :key="item.id"
            @click="goToWork(item.slug)"
            class="relative overflow-hidden rounded-md cursor-pointer shadow-md hover:opacity-80 transition"
          >
            <video
              :src="item.src"
              autoplay
              muted
              loop
              playsinline
              class="w-full aspect-square object-cover rounded-md"
            ></video>
            <div
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition"
            >
              <span class="text-white text-xs font-semibold tracking-widest pointer-events-none">
                {{ item.label }}
              </span>
            </div>
          </div>
        </div>
      </transition>

      <!-- About Me -->
      <button
        @click="showAbout = !showAbout"
        class="w-full bg-neutral-800 rounded-xl text-center py-3 hover:bg-neutral-700 transition cursor-pointer"
      >
        About Me
      </button>
      <transition name="fade">
        <div
          v-if="showAbout"
          class="w-full bg-neutral-900 rounded-xl p-4 text-sm text-gray-300 leading-relaxed"
        >
          <p class="text-center">
            Multidisciplinary visual artist passionate about motion edits, aesthetics, and stylized storytelling.
            Always open for creative collaborations.
          </p>
        </div>
      </transition>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showWorks = ref(false)
const showCommission = ref(false)
const showAbout = ref(false)

const avatarUrl = new URL('/assets/works/morryxa-avatar.jpg', import.meta.url).href

const works = [
  {
    id: 1,
    type: 'video',
    src: new URL('/assets/works/sample1.mp4', import.meta.url).href,
    label: 'cut & flow',
    slug: 'project-a'
  },
  {
    id: 2,
    type: 'video',
    src: new URL('/assets/works/sample4.mp4', import.meta.url).href,
    label: 'editorial',
    slug: 'project-b'
  },
  {
    id: 3,
    type: 'video',
    src: new URL('/assets/works/sample3.mp4', import.meta.url).href,
    label: 'by morryxa',
    slug: 'project-c'
  }
]

const goToWork = (slug) => {
  router.push(`/work/${slug}`)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
