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
      <div class="logo">Brand</div>
      <button class="menu-toggle" @click="toggleMenu">
        <span :class="{ 'menu-open': isMenuOpen }">☰</span>
      </button>
    </div>
    <div class="nav-links" :class="{ 'show-menu': isMenuOpen }">
      <router-link to="/" class="nav-link" @click="toggleMenu">Home</router-link>
      <router-link to="/headshots" class="nav-link" @click="toggleMenu">Headshots</router-link>
      <router-link to="/pricing" class="nav-link" @click="toggleMenu">Pricing</router-link>
      <router-link to="/about" class="nav-link" @click="toggleMenu">About</router-link>
      <router-link to="/contact" class="nav-link" @click="toggleMenu">Contact</router-link>
    </div>
  </nav>
</template>

<style scoped>
/* Base styles */
.navbar {
  background-color: #333;
  color: white;
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

/* Container for logo and menu button */
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  font-size: 1.5rem;
  font-weight: bold;
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

.menu-toggle .menu-open {
  transform: rotate(90deg);
  transition: transform 0.3s ease;
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

/* Mobile styles */
@media (max-width: 768px) {
  /* Show the menu toggle button */
  .menu-toggle {
    display: block;
  }

  /* Hide nav-links by default */
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

  /* Show nav-links when menu is toggled */
  .nav-links.show-menu {
    display: flex;
  }
}
</style>