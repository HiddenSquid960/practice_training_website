<script setup>
import { ref } from "vue";

const weatherTeamp = ref("");
const city = ref("");

function find(city) {
    console.log("city", city);
    fetch(`https://wttr.in/${encodeURIComponent(city)}?format=3`)
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            weatherTeamp.value = data;
        });
}
</script>

<template>
    <div class="weather-foracast-serch">
        <div class="card">
            <h2 class="animated-heading">Check the Weather</h2>
            <input
                type="text"
                v-model="city"
                placeholder="Enter City Name"
                class="animated-input"
            />
            <br />
            <br />
            <button class="animated-button" @click="find(city)">
                Get Weather
            </button>
            <p v-if="weatherTeamp" class="weather-result animated-result">
                Weather temperature for city: {{ weatherTeamp }}
            </p>
        </div>
    </div>
</template>

<style scoped>
/* Container styling */
.weather-foracast-serch {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 20px;
}

/* Card styling */
.card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    width: 90%;
    animation: slideIn 1s ease-in-out;
    border: 2px solid #4caf50;
}

/* Heading animation */
.animated-heading {
    font-size: 2.5rem;
    margin-bottom: 20px;
    animation: fadeIn 2s ease-in-out;
    background: linear-gradient(90deg, #ff7eb3, #ff758c, #ff6a5e);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

/* Input styling */
.animated-input {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    width: 100%;
    max-width: 400px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    position: relative;
}

.animated-input:focus {
    border-color: #4caf50;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.5);
    outline: none;
}

/* Button styling */
.animated-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.animated-button:hover {
    transform: scale(1.1);
    background-color: #45a049;
}

/* Weather result styling */
.weather-result {
    margin-top: 20px;
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.animated-result {
    animation: fadeIn 1.5s ease-in-out;
}

/* Keyframes for animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>