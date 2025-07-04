<template>
  <div class="font-sans text-neutral-800 bg-[#f9f9f9] min-h-screen overflow-x-hidden flex flex-col">
    <main class="flex-grow">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// Navbar & Footer kita hapus karena gak dipakai
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  max-width: 100%;
  overflow-x: hidden;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 300;
  letter-spacing: 0.05em;
  background-color: #f9f9f9;
  -webkit-font-smoothing: antialiased;
}

img,
video {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 2px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
