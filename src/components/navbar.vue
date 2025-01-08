<script setup>
import { ref } from 'vue';

// Reactive state for toggling the mobile menu
const isMenuOpen = ref(false);

// Function to toggle the menu
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo container remains as it is -->
      <div class="logo-container">
        <router-link to="/" class="brand-logo" @click="toggleMenu">
          <img src="/jp-logo.png" alt="logo" />
        </router-link>
      </div>

      <!-- Mobile menu toggle button (only visible on smaller screens) -->
      <button class="menu-toggle" @click="toggleMenu">
        <span :class="{ 'menu-open': isMenuOpen }">☰</span>
      </button>

      <!-- Navigation links container -->
      <div class="nav-links" :class="{ 'show-menu': isMenuOpen }">
        <router-link to="/" class="nav-link" @click="toggleMenu">Home</router-link>
        <router-link to="/headshots" class="nav-link" @click="toggleMenu">Headshots</router-link>
        <router-link to="/pricing" class="nav-link" @click="toggleMenu">Pricing</router-link>
        <router-link to="/about" class="nav-link" @click="toggleMenu">About</router-link>
        <router-link to="/contact" class="nav-link" @click="toggleMenu">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>/* Base styles */
.navbar {
  background-color: #333;
  color: white;
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed; /* Fix navbar at the top */
  width: 100%;
  z-index: 1000; /* Ensure it stays on top */
  top: 0;
  left: 0;
  right: 0;
}

/* Container for the entire navbar, including logo and menu button */
.navbar-container {
  display: flex;
  justify-content: space-between; /* Space out the items: logo on the left, nav links on the right */
  align-items: center;
  max-width: 1200px; /* Limit the max-width */
  margin: 0 auto; /* Center the navbar */
}

/* Logo container */
.logo-container {
  display: flex;
  align-items: center;
}

/* Brand logo styling */
.navbar .brand-logo img {
  height: 75px; /* Adjust height as needed */
  width: auto; /* Maintain aspect ratio */
}

/* Mobile menu toggle button */
.menu-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: none; /* Hidden by default */
}

/* Navigation links container */
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffcc00;
}

.nav-link.router-link-active {
  border-bottom: 2px solid #ffcc00;
}

/* For mobile responsiveness */
@media (max-width: 768px) {
  .navbar {
    padding: 0.5rem 15px; /* Adjust padding for mobile */
  }

  .navbar .brand-logo img {
    height: 50px; /* Smaller logo for mobile */
  }

  /* Show the menu toggle button only on mobile */
  .menu-toggle {
    display: block;
    order: 1; /* Position it after the logo */
  }

  /* Show nav-links when menu is toggled */
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #333;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    display: none; /* Hidden by default */
  }

  .nav-links.show-menu {
    display: flex;
  }

  /* Navbar layout on mobile (adjusting flex properties) */
  .navbar-container {
    justify-content: space-between; /* Keep logo on left and hamburger menu on right */
  }

  .logo-container {
    flex: 1; /* Allow logo to take available space */
  }
}
</style>