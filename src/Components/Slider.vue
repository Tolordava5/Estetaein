<template>
    <div class="property-wrapper">
  <div class="property-slider" :style="{ transform: `translateX(-${sliderIndex * 100}%)` }">
    <div v-for="(property, index) in properties" :key="index" class="property-card">
      <div>
        <img :src="property.image" alt="">
        <h3>{{ property.title }}</h3>
        <span>{{ property.description }}</span>
      </div>

      <div class="icons">
        <div v-for="(detail, i) in property.details" :key="i">
          <img src="@/assets/photos/Bed.png">
          <p>{{ detail }}</p>
        </div>
      </div>

      <div>
        <div>
          <h4>Price</h4>
          <h5>{{ property.price }}</h5>
        </div>
        <button>View Property Details</button>
      </div>
    </div>
  </div>
</div>

<!-- Arrows -->
<div class="arrows">
  <button @click="prevSlide">
    <img src="../assets/photos/Vector l.png" alt="">
  </button>
  <button @click="nextSlide">
    <img src="../assets/photos/Vector r.png" alt="">
  </button>
</div>

</template>
<script setup>
import { ref } from 'vue'

const properties = [
  {
    title: "Seaside Serenity Villa",
    description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
    image: new URL("@/assets/photos/Villa.png", import.meta.url).href,
    details: ["4-Bedroom", "3-Bathroom", "2-Garage"],
    price: "$1,250,000"
  },
  {
    title: "Metropolitan Haven",
    description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
    image: new URL("@/assets/photos/Appartament.png", import.meta.url).href,
    details: ["2-Bedroom", "2-Bathroom", "1-Garage"],
    price: "$650,000"
  },
  {
    title: "Rustic Retreat Cottage",
    description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
    image: new URL("@/assets/photos/Cottage.png", import.meta.url).href,
    details: ["3-Bedroom", "2-Bathroom", "2-Garage"],
    price: "$820,000"
  },
  {
    title: "Modern Minimalist Flat",
    description: "A bright and cozy flat perfect for city living.",
    image: "https://via.placeholder.com/400x300", // ან დაამატე შენი სურათი
    details: ["1-Bedroom", "1-Bathroom", "1-Garage"],
    price: "$430,000"
  },
]

const sliderIndex = ref(0)

function nextSlide() {
  if (sliderIndex.value < properties.length - 3) {
    sliderIndex.value++
  }
}

function prevSlide() {
  if (sliderIndex.value > 0) {
    sliderIndex.value--
  }
}
</script>
<style scoped>

.property-wrapper {
  overflow: hidden;
  width: 100%;
}

.property-slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
  gap: 30px;
}

.property-card {
  min-width: 33.3333%;
  box-sizing: border-box;
  padding: 20px;
  background: #1a1a1a;
  border-radius: 8px;
  color: white;
}
</style>
