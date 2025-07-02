<template>
  <section class="px-6 pt-20 pb-32 grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div
      v-for="(media, index) in projectMedia"
      :key="index"
      class="fade-in rounded-sm shadow-sm overflow-hidden"
    >
      <iframe
        :src="`https://drive.google.com/file/d/${media.fileId}/preview`"
        width="100%"
        height="360"
        allow="autoplay"
        class="rounded-sm w-full aspect-square bg-black"
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const projectSlug = route.params.slug

const projectMediaMap = {
  'project-a': [
    { fileId: '1lhhhz6I0_FHpsbpfMZEfwO2D7QKMQUqs' },
    { fileId: '1dBFMPHIxpF253cGN5wz20zF7jw0D5C_G' },
    { fileId: '1zDUXl8k8hAtX4GCiNbMdhxLZMYTM2B65' },
    { fileId: '1PtB4rgSgkbA5zpFbX-XyTpvX_sywh0hR' },
    { fileId: '1KHKBcSKOgKTKX3XN8oLYqJ2ZhQ_vfazh' }
  ],
  'project-b': [
    { fileId: '1uMBcCAeoA6oHyUGeNjFbXWd5DRhD39Q-' },
    { fileId: '138sZ7_LPZyIArUKIkGyT-MrLjOsQKNpG' },
    { fileId: '1FiVe1fiSyHp12hb4A_Q4VVbMMuqhn5m4' },
    { fileId: '1dBOaCagofBcru670qWTuyH_aetmPOTB_' },
    { fileId: '1BCFVzy33CPr7gntAuqW9fg4MRZM2SOxh' }
  ],
  'project-c': [
    { fileId: '1_rmU11v8gMJhVhYgzPP2RE4JRPVpPqdQ' },
    { fileId: '1mPpWqH7ACCPZ8JbhBszxObGEXv054Ea1' },
    { fileId: '1mZIher61EeBKwahmDBlif-ikVf4w-3iK' },
    { fileId: '1maCpHCxdOSN4SdLCfTDTLJqrG9gmShET' },
    { fileId: '1mUTPK1nTnh0cRCbdIz6lsT2MQHtrZI9n' }
  ]
}

const projectMedia = projectMediaMap[projectSlug] || []
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
