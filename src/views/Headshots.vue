<script setup>
import { ref } from 'vue';

// Image data
import photo1 from '@/assets/dummy-photos/IMG_7106.jpeg';
import photo2 from '@/assets/dummy-photos/IMG_1791.jpeg';

// Reactive state for modal
const selectedImage = ref(null); // The image to display in the modal
const isModalOpen = ref(false); // Modal visibility state

// Function to open modal
function openModal(image) {
  selectedImage.value = image;
  isModalOpen.value = true;
}

// Function to close modal
function closeModal() {
  isModalOpen.value = false;
}
</script>

<template>
  <div class="headshots-page">
    <h1>Headshots</h1>
    <p class="description">
      Explore some of our best headshot photography. Click on any image to view it in full size.
    </p>
    <div class="gallery">
      <img
          v-for="(photo, index) in [photo1, photo2]"
          :key="index"
          :src="photo"
          alt="Headshot"
          class="gallery-item"
          @click="openModal(photo)"
      />
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <img :src="selectedImage" alt="Full-size image" />
        <button class="close-button" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Overall page styling */
.headshots-page {
  text-align: center;
  padding: 2rem;
  background-color: #121212;
  color: #e0e0e0;
}

/* Heading styling */
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* Description styling */
.description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

/* Gallery container */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

/* Individual gallery item */
.gallery-item {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
}

/* Modal styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
}

.modal-content img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Close button */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff6666;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.close-button:hover {
  background: #ff4d4d;
}
</style>