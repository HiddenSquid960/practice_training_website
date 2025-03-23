<template>
  <div class="app-container">
    <header class="app-header">
      <h1>Weather Forecast App</h1>
    </header>
    <main class="app-main">
      <WeatherForacastSerch />
    </main>
    <footer class="app-footer">
      <p>© 2025 Weather Forecast App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import WeatherForacastSerch from "./components/WeatherForacastSerch.vue";

export default {
  name: "App",
  components: {
    WeatherForacastSerch,
  },
};
</script>

<style scoped>
/* App container styling */
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  text-align: center;
  overflow: hidden;
  animation: backgroundAnimation 10s infinite alternate ease-in-out;
}

/* Header styling */
.app-header {
  margin-top: 20px;
}

.app-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Main content styling */
.app-main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* Footer styling */
.app-footer {
  padding: 10px 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
}

.app-footer p {
  margin: 0;
  color: #fff;
  opacity: 0.8;
}

/* Hover effect for interactive elements */
button, input {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover, input:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Background animation */
@keyframes backgroundAnimation {
  0% {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
  }
  50% {
    background: linear-gradient(135deg, #43e97b, #38f9d7);
  }
  100% {
    background: linear-gradient(135deg, #fa709a, #fee140);
  }
}
</style>