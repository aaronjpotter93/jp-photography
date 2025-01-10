<script setup>
// Variables
const minutes = 30;
const shots = 3;
const rate = 150;
const turn_around = "3-5"
</script>

<template>
  <div class="pricing-container">
    <div class="pricing-header">
      <h1 class="pricing-title">Linkedin Profile Shot</h1>
    </div>
    <div class="pricing-content">
      <div class="pricing-details">
        <ul>
          <li>{{ minutes }} Minutes of Shooting</li>
          <li>{{ shots }} Business Head Shots</li>
          <li>Digital Copies</li>
          <li>{{ turn_around }} after the shoot</li>
          <li class="rate">${{ rate }}</li>
        </ul>
      </div>
      <div class="pricing-images">
        <img src="@/assets/dan_white_background.jpeg" alt="Headshot 1" class="headshot-image">
        <img src="@/assets/dan_black_background.jpeg" alt="Headshot 2" class="headshot-image">
        <img src="@/assets/dan_thumbs_up.jpeg" alt="Headshot 3" class="headshot-image">
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing-container {
  text-align: center;
  padding: 2rem;
  background-color: #121212;
  color: #e0e0e0;
}

.pricing-header {
  text-align: center;
  margin-bottom: 20px;
}

.pricing-title {
  font-family: Oswald,serif;
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.pricing-content {
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  gap: 1rem; /* Space between the two sections */
  padding: 1rem;
}

.pricing-details {
  font-family: "Open Sans", serif;
  font-size: 16px;
}

.pricing-details ul {
  list-style: none;
  padding: 0;
}

.pricing-details li {
  margin-bottom: 10px;
}

.rate{
  font-weight: bold;
}

.pricing-images {
  display: flex; /* Align images in a row */
  gap: 1rem;
}

.headshot-image {
  aspect-ratio: 3 / 4;
  width: 100%;
  max-width: 250px; /* Limit the image width */
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .pricing-content {
    flex-direction: column; /* Stack elements vertically on small screens */
  }

  .pricing-details,
  .pricing-images {
    max-height: 100vh; /* Limit height to viewport height */
    overflow-y: auto; /* Allow scrolling if content exceeds height */
  }

  .pricing-details {
    margin-bottom: 20px;
  }

  .pricing-images {
    margin-top: 20px;
    flex-direction: column; /* Stack images vertically on small screens */
  }

  .headshot-image {
    max-width: 100%; /* Ensure images are fully responsive */
  }
}
</style>