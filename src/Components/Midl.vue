<template>
  <div class="featured-section">
    <!-- Header -->
    <div class="intro">
      <div class="intro-text">
        <h2>Featured Properties</h2>
        <p>
          Explore our handpicked selection of featured properties. Each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein. Click "View Details" for more information.
        </p>
      </div>
      <button class="view-all-btn">View All Properties</button>
    </div>

    <!-- Property Slider -->
    <div class="property-wrapper">
      <div
        class="property-slider"
        :style="{ transform: `translateX(-${sliderIndex * 100}%)` }"
      >
        <div
          v-for="(property, index) in properties"
          :key="index"
          class="property-card"
        >
          <div class="property-image">
            <img :src="property.image" alt="Property Image" />
          </div>
          <div class="property-info">
            <h3>{{ property.title }}</h3>
            <span class="description">{{ property.description }}</span>
          </div>
          <div class="icons">
            <div v-for="(detail, i) in property.details" :key="i" class="icon-detail">
              <img src="@/assets/photos/Bed.png" alt="Detail Icon" />
              <p>{{ detail }}</p>
            </div>
          </div>
          <div class="property-footer">
            <div class="price-info">
              <h4>Price</h4>
              <h5>{{ property.price }}</h5>
            </div>
            <button class="details-btn">View Property Details</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Arrows -->
    <div class="arrows">
      <button @click="prevSlide" class="arrow-btn left">
        <img src="../assets/photos/Vector l.png" alt="Left Arrow" />
      </button>
      <button @click="nextSlide" class="arrow-btn right">
        <img src="../assets/photos/Vector r.png" alt="Right Arrow" />
      </button>
    </div>
  </div>
</template>
<style scoped>

.featured-section {
  background-color: #161414;
  padding: 80px;
  color: white;
  font-family: sans-serif;
}

.intro {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-left: 100px;
  
}

.intro-text {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.intro h2 {
  font-size: 48px;
  color: white;
  margin: 0;
}

.intro p {
  font-size: 18px;
  color: #999;
  margin: 0;
}

.view-all-btn {
  height: 63px;
  padding: 0 32px;
  background-color: #1a1a1a;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
}

.property-wrapper {
  overflow: hidden;
}

.property-slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
  gap: 50px;
  margin-left: 90px;
}

.property-card {
  width: 512px;
  height: 690px;
  background: #141414;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  transition: box-shadow 0.3s ease;
  margin-bottom: 60px;
  margin-top: 60px;
}

.property-image img {
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.property-info h3 {
  margin: 0;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 30px;
  color: white;
}

.description {
  color: #aaa;
  font-size: 15px;
}

.icons {
  display: flex;
  gap: 20px;
  margin-top: 10px;
  border-radius: 8px;
}

.icon-detail {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #1A1A1A;
  width: 200px;
  height: 40px;
  border-radius: 8px;
  justify-content: center;
}

.icon-detail p {
  margin: 0;
  font-size: 14px;
}

.property-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.price-info h4 {
  margin: 0;
  font-size: 18px;
  color: #777;
}

.price-info h5 {
  margin: 0;
  font-size: 24px;
  color: #fff;
}

.details-btn {
    width: 285px;
    height: 63px;
    background-color: #703BF7;
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;
}
.details-btn:hover{
    background-color: #5b2ed1;
    box-shadow: 0 6px 20px rgba(112, 59, 247, 0.5);
    transform: translateY(-2px);
}

.arrows {
  display: flex;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
}

.arrow-btn {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.arrow-btn.left {
  background-color: transparent;
  border: 2px solid #444;
}

.arrow-btn.right {
  background-color: #1a1a1a;
  border: 2px solid #1a1a1a;
}
</style>


<script setup>
import { ref } from 'vue'

const properties = [
  {
    title: 'Seaside Serenity Villa',
    description:
      'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.',
    image: new URL('@/assets/photos/Villa.png', import.meta.url).href,
    details: ['4-Bedroom', '3-Bathroom', '1-Toilet'],
    price: '$1,250,000'
  },
  {
    title: 'Metropolitan Haven',
    description:
      'A chic and fully-furnished 2-bedroom apartment with panoramic city views.',
    image: new URL('@/assets/photos/Appartament.png', import.meta.url).href,
    details: ['2-Bedroom', '2-Bathroom', '1-Toilet'],
    price: '$650,000'
  },
  {
    title: 'Rustic Retreat Cottage',
    description:
      'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.',
    image: new URL('@/assets/photos/Cottage.png', import.meta.url).href,
    details: ['3-Bedroom', '2-Bathroom', '1-Toilet'],
    price: '$820,000'
  },
  {
    title: 'Modern Minimalist Flat',
    description: 'A bright and cozy flat perfect for city living.',
    image: 'https://via.placeholder.com/400x300',
    details: ['1-Bedroom', '1-Bathroom', '1-Garage'],
    price: '$430,000'
  }
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


