<script setup>
import { ref, onMounted } from 'vue';

import photo1 from '@/assets/dan_white_background.jpeg';
import photo2 from '@/assets/dan_black_background.jpeg';
import photo3 from '@/assets/dan_thumbs_up.jpeg'
import photo4 from '@/assets/9O3A0727-4_Original.jpg'
import photo5 from '@/assets/2D8F55AD-D2E8-4B87-BA3E-0A944E1168EE.jpeg'
import photo6 from '@/assets/2F35F3C1-2C5D-4A9A-8478-3C85F8D9B928.jpeg'
import photo7 from '@/assets/5B720417-AC8F-46AE-847C-12409C38BA9A.jpeg'
import photo8 from '@/assets/401DF2B2-8F53-476B-BEE5-A84016212487.jpeg'

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

// Preloaded images state
const preloadedImages = ref([]);

// Preload function
const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      console.log(`${url} is loaded`);
    };
    preloadedImages.value.push(img);
  });
};

// Preload all headshots images as soon as the landing page is mounted
onMounted(() => {
  preloadImages(photos);
});
</script>

<template>
  <div class="landing-page">
    <h1>Welcome to Our Website</h1>
    <p>Explore amazing headshots photography!</p>
    <!-- Your landing page content here -->
  </div>
</template>

<style scoped>
h1 {
  font-family: Oswald,serif;
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 1rem;
}
.landing-page {
  text-align: center;
  padding: 2rem;
  background-color: #121212;
  font-family: "Open Sans", serif;
  font-size: 16px;
}
</style>