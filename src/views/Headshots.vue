<script setup>
import { ref, onMounted } from 'vue';

// Image data
import photo1 from '@/assets/dan_white_background.jpeg';
import photo2 from '@/assets/dan_black_background.jpeg';
import photo3 from '@/assets/9O3A0727-4_Original.jpg'
import photo4 from '@/assets/2D8F55AD-D2E8-4B87-BA3E-0A944E1168EE.jpeg'
import photo5 from '@/assets/2F35F3C1-2C5D-4A9A-8478-3C85F8D9B928.jpeg'
import photo6 from '@/assets/5B720417-AC8F-46AE-847C-12409C38BA9A.jpeg'
import photo7 from '@/assets/401DF2B2-8F53-476B-BEE5-A84016212487.jpeg'

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

const preloadedImages = ref([]);

// Preload function
const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
    preloadedImages.value.push(img);
  });
};

// Preload images when the component mounts
onMounted(() => {
  preloadImages(photos);
});

// Reactive state for modal
const selectedImage = ref(null); // The image to display in the modal
const isModalOpen = ref(false); // Modal visibility state

// Function to open modal and set selected image
const openModal = (photo) => {
  selectedImage.value = photo;  // Set the selected image for the modal
  isModalOpen.value = true;     // Open the modal
};

// Function to close modal
function closeModal() {
  isModalOpen.value = false; // Close the modal
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
          v-for="(photo, index) in photos"
          :key="index"
          :src="photo"
          alt="Headshot"
          class="gallery-item"
          @click="openModal(photo)"
      />
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="modal" @click.self="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-image-wrapper" @click="closeModal">
          <img :src="selectedImage" alt="Full-size image" />
        </div>
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
  display: grid !important;
  grid-template-columns: repeat(3, 1fr); /* Responsive columns */
  gap: 1rem; /* Space between grid items */
  padding: 1rem;
  justify-content: center; /* Center the grid items */
}

/* Override inline styles */
.gallery > img {
  width: 100%; /* Ensure images fit their grid cells */
  height: auto;
  object-fit: cover; /* Ensure consistent image scaling */
}

.gallery-item {
  aspect-ratio: 3 / 4;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }
}

@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(1, 1fr); /* 1 column for smaller screens */
  }
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

/* Modal content wrapper */
.modal-content {
  position: relative;
  width: 90%; /* Modal container takes up 90% of the screen width */
  height: 90%; /* Modal container takes up 90% of the screen height */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Image wrapper to make sure clicking on it closes the modal */
.modal-image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Image styling to fit within the modal */
.modal-content img {
  width: auto;
  height: 90%; /* Image height should not exceed modal container */
  object-fit: contain; /* Ensure the image scales properly within the modal */
  border-radius: 8px;
}
</style>