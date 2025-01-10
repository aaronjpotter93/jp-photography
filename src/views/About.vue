<script setup>
</script>

<template>
  <div class="about">
    <div class="image-container">
      <img src="../assets/jp.JPG" alt="JP" class="about-image">
    </div>
    <div class="text-container">
      <h1>Jordan Potter</h1>
      <p>Or better known as JP, is a professional photographer specializing in business headshots that elevate personal and professional brands. With a focus on creating polished, confident, and approachable images, Jordan brings years of expertise and a personalized touch to every session. As the founder of JP Photography, Jordan is dedicated to helping professionals stand out with headshots that leave a lasting impression.</p>
    </div>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  display: flex; /* Use flexbox for easier layout */
  flex-direction: column; /* Default to vertical stacking */
  align-items: center; /* Center items horizontally */
}

.image-container {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem; /* Optional spacing below image */
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-container {
  text-align: center; /* Center text within the container */
}

h1 {
  font-family: Oswald,serif;
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-family: "Open Sans", serif;
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
}
</style>