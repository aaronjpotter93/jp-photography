<script setup>
import { ref, onMounted } from 'vue';

// Image data for headshots
import photo1 from '@/assets/IMG_7106.jpeg';
import photo2 from '@/assets/IMG_1791.jpeg';
const photos = [photo1, photo2];

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
.landing-page {
  text-align: center;
  padding: 2rem;
  background-color: #121212;
  color: #e0e0e0;
}
</style>