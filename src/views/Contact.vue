<script setup>
import { ref } from "vue";

const phone = "(208) 890-0170";
const email = "photographyjp123@gmail.com";
const location = "Boise, ID";
const selectedDate = ref(null); // Tracks the user's selected appointment date
</script>

<template>
  <div class="contact-container">
    <h1>Contact Me</h1>
    <div class="contact-content">
      <div class="contact-info">
        <h2>Get in Touch</h2>
        <p>Email: {{ email }}</p>
        <p>Phone: {{ phone }}</p>
        <p>Based out of {{ location }}</p>

        <div class="calendar-container">
          <h3>Book an Appointment</h3>
          <div class="calendar">
            <div class="calendar-header">
              <button class="prev-month">&lt;</button>
              <span class="month-year">January 2025</span>
              <button class="next-month">&gt;</button>
            </div>
            <div class="calendar-body">
              <div class="calendar-weekdays">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>
              <div class="calendar-days"></div>
            </div>
          </div>
        </div>
      </div>

      <form class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" placeholder="Enter your message" rows="5" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #121212;
  color: #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  font-family: "Open Sans", serif;
}

h1 {
  font-family: Oswald, serif;
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #94B3CA;
  text-align: center;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-info,
.contact-form {
  background-color: #1e1e1e;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.contact-info h2,
.contact-info h3 {
  font-family: Oswald, serif;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #94B3CA;
}

.contact-info p {
  margin: 0.5rem 0;
}

.calendar-container {
  margin-top: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #c9c9c9;
}

.calendar-container {
  margin-top: 1rem;
}

.calendar {
  display: flex;
  flex-direction: column;
  border: 1px solid #444; /* Changed border color to match dark mode */
  border-radius: 4px;
  background-color: #121212; /* Changed background to dark */
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #444; /* Changed border color to match dark mode */
}

.calendar-header button {
  background-color: transparent;
  border: none;
  color: #e0e0e0; /* Changed button color to light */
  cursor: pointer;
}

.month-year {
  font-weight: bold;
  color: #e0e0e0; /* Changed text color to light */
}

.calendar-body {
  flex: 1;
  padding: 0.5rem;
}

.calendar-weekdays {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #888; /* Changed text color to lighter gray */
}

.calendar-weekdays span {
  text-align: center;
  width: 14.28%;
}

.calendar-days {
  display: flex;
  flex-wrap: wrap;
}

.calendar-day {
  width: 14.28%;
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: #e0e0e0; /* Changed text color to light */
}

.calendar-day:hover {
  background-color: #242424; /* Changed hover background to darker */
}

.calendar-day.selected {
  background-color: #333; /* Changed selected background to darker */
}

.contact-form {
  background-color: #1e1e1e;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

label {
  font-family: "Open Sans", serif;
  display: block;
  margin-bottom: 0.5rem;
  color: #c9c9c9;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #444;
  border-radius: 4px;
  font-size: 1rem;
  font-family: "Open Sans", serif;
  background-color: #121212;
  color: #e0e0e0;
}

.submit-btn {
  background-color: #94B3CA;
  color: #121212;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-family: Oswald, serif;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #4CB7F0;
}

@media screen and (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>