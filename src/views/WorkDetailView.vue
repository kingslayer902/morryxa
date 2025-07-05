<template>
  <main class="bg-black text-white overflow-x-hidden">

    <!-- About -->
    <section class="min-h-screen flex flex-col justify-center items-center text-center px-6 py-28 bg-gradient-to-b from-black to-neutral-900" data-aos="fade-up">
      <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-400 mb-6">Morryxa</h1>
      <p class="max-w-3xl text-lg text-gray-300 leading-loose font-light">
        A multidisciplinary visual editor blending motion, rhythm, and narrative into bold visual stories.<br/>
        Let’s build something stunning together.
      </p>
    
    </section>

    <!-- My Works -->
    <section id="works" class="bg-neutral-900 px-6 py-24" data-aos="fade-up">
      <h2 class="text-4xl font-bold text-center text-white mb-14 tracking-widest">My Works</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(media, index) in displayedMedia"
          :key="index"
          class="overflow-hidden rounded-xl shadow-xl"
          data-aos="fade-up"
        >
          <iframe
            :src="`https://drive.google.com/file/d/${media.fileId}/preview`"
            class="w-full aspect-video rounded-xl"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Rates -->
    <section class="bg-black px-6 py-24 text-center" data-aos="fade-up">
      <h2 class="text-4xl font-bold text-blue-400 mb-12 tracking-widest">Rates (USD)</h2>
      <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-sm text-gray-300">
        <div class="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-lg shadow-xl">
          <h3 class="text-white font-semibold text-lg mb-2">Simple Edit</h3>
          <p>$30 — Clean cut, transitions, text, and grade</p>
        </div>
        <div class="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-lg shadow-xl">
          <h3 class="text-white font-semibold text-lg mb-2">Narrative Edit</h3>
          <p>$60 — Cinematic flow, FX, music-sync storytelling</p>
        </div>
        <div class="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-lg shadow-xl">
          <h3 class="text-white font-semibold text-lg mb-2">Full Branding</h3>
          <p>$100+ — Visual identity + promo formats</p>
        </div>
      </div>
    </section>

    <!-- Terms of Service -->
    <section class="bg-neutral-900 px-6 py-24 text-center" data-aos="fade-up">
      <h2 class="text-4xl font-bold text-white mb-10 tracking-widest">Terms of Service</h2>
      <div class="max-w-3xl mx-auto grid gap-6 text-left text-sm text-gray-300">
        <div class="bg-neutral-800 p-5 rounded-xl flex items-start gap-4">
          <span class="text-blue-400 text-xl">⏳</span>
          <p>50% upfront payment required before project starts</p>
        </div>
        <div class="bg-neutral-800 p-5 rounded-xl flex items-start gap-4">
          <span class="text-blue-400 text-xl">🛠️</span>
          <p>Turnaround time: 3–7 days depending on complexity</p>
        </div>
        <div class="bg-neutral-800 p-5 rounded-xl flex items-start gap-4">
          <span class="text-blue-400 text-xl">🚫</span>
          <p>No refunds once editing has begun (unless canceled by editor)</p>
        </div>
        <div class="bg-neutral-800 p-5 rounded-xl flex items-start gap-4">
          <span class="text-blue-400 text-xl">📦</span>
          <p>Raw files only provided if requested before start</p>
        </div>
        <div class="bg-neutral-800 p-5 rounded-xl flex items-start gap-4">
          <span class="text-blue-400 text-xl">✅</span>
          <p>One free revision included per project</p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="bg-black px-6 py-24 text-center" data-aos="fade-up">
      <h2 class="text-4xl font-bold text-blue-400 mb-10 tracking-widest">Contact Me</h2>
      <p class="text-gray-300 text-base mb-6">For inquiries, commissions, or creative collabs — DM me on Instagram:</p>
      <a
        href="https://instagram.com/morryxa"
        target="_blank"
        class="inline-block px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
      >
        @morryxa
      </a>
    </section>

    <!-- Back to Home -->
    <div class="text-center py-10">
      <button
        @click="router.push('/')"
        class="text-gray-400 hover:text-white transition text-sm underline"
      >
        ← Back to Home
      </button>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const displayedMedia = [
  { fileId: '1lhhhz6I0_FHpsbpfMZEfwO2D7QKMQUqs' },
  { fileId: '1dBFMPHIxpF253cGN5wz20zF7jw0D5C_G' },
  { fileId: '1zDUXl8k8hAtX4GCiNbMdhxLZMYTM2B65' },
  { fileId: '1uMBcCAeoA6oHyUGeNjFbXWd5DRhD39Q-' },
  { fileId: '1BCFVzy33CPr7gntAuqW9fg4MRZM2SOxh' },
  { fileId: '1_rmU11v8gMJhVhYgzPP2RE4JRPVpPqdQ' }
]
</script>

<style scoped>
[data-aos] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
[data-aos].aos-animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
