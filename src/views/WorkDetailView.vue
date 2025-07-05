<template>
  <main class="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center font-sans">
    <!-- Title -->
    <section class="text-center mb-16">
      <h1 class="text-3xl sm:text-4xl font-bold tracking-widest uppercase text-neutral-200 mb-3">
        My Works
      </h1>
      <p class="text-sm text-gray-400 max-w-xl mx-auto">
        Handpicked edits curated for aesthetic storytelling. Visuals speak louder than words.
      </p>
    </section>

    <!-- Video Gallery -->
    <section class="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 fade-in">
      <div
        v-for="(media, index) in visibleMedia"
        :key="index"
        class="overflow-hidden rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
      >
        <iframe
          :src="`https://drive.google.com/file/d/${media.fileId}/preview`"
          width="100%"
          height="360"
          allow="autoplay"
          class="rounded-xl w-full aspect-square bg-black"
        ></iframe>
      </div>
    </section>

    <!-- Divider -->
    <div class="w-16 border-t border-gray-700 my-16"></div>

    <!-- Rate -->
    <section class="max-w-2xl text-sm text-gray-300 space-y-2 mb-14 fade-in text-center">
      <h2 class="text-lg text-white font-semibold tracking-wider uppercase mb-1">Rates</h2>
      <p>Starting from <span class="text-white font-semibold">$25</span> per edit.</p>
      <p>Custom pricing available for complex or multi-layered visuals.</p>
      <p class="italic text-gray-500">Let's craft something memorable.</p>
    </section>

    <!-- Contact -->
    <section class="max-w-2xl text-sm text-gray-300 space-y-2 mb-14 fade-in text-center">
      <h2 class="text-lg text-white font-semibold tracking-wider uppercase mb-1">Contact</h2>
      <p>DM me on <a href="https://instagram.com/morryxa" class="underline hover:text-white" target="_blank">@morryxa</a></p>
      <p>Or email: <span class="underline">hello@morryxa.studio</span></p>
      <p class="italic text-gray-500">Open to collabs, commissions, or just a nice chat.</p>
    </section>

    <!-- Terms -->
    <section class="max-w-2xl text-sm text-gray-400 text-center fade-in">
      <h2 class="text-lg text-white font-semibold tracking-wider uppercase mb-2">Terms of Service</h2>
      <ul class="space-y-1">
        <li>・ No refunds once project is delivered.</li>
        <li>・ Max 2x revisions per edit.</li>
        <li>・ Personal use only unless commercial rights are discussed.</li>
        <li>・ Credit appreciated but not mandatory.</li>
      </ul>
    </section>

    <!-- Back Button -->
    <div class="mt-20">
      <button
        @click="goBack"
        class="text-sm text-gray-400 hover:text-white underline transition"
      >
        ← Back to Home
      </button>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// Tampilkan hanya beberapa video biar clean dan fokus
const allMedia = [
  // cut & flow
  { fileId: '1lhhhz6I0_FHpsbpfMZEfwO2D7QKMQUqs' },
  { fileId: '1dBFMPHIxpF253cGN5wz20zF7jw0D5C_G' },
  { fileId: '1zDUXl8k8hAtX4GCiNbMdhxLZMYTM2B65' },
  // editorial
  { fileId: '1FiVe1fiSyHp12hb4A_Q4VVbMMuqhn5m4' },
  { fileId: '1dBOaCagofBcru670qWTuyH_aetmPOTB_' },
  // by morryxa
  { fileId: '1mPpWqH7ACCPZ8JbhBszxObGEXv054Ea1' },
  { fileId: '1maCpHCxdOSN4SdLCfTDTLJqrG9gmShET' }
]

// batasin tampilan (bisa load more nanti)
const visibleMedia = allMedia.slice(0, 7)

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.6s ease-in-out both;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
