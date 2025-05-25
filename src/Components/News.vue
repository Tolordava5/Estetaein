<template>
  <div class="news">
    <div class="news-item" v-for="(item, index) in news" :key="index">
      <img :src="getImage(item.image)" alt="news image" class="news-img" />
      <p class="news-text">{{ item.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.news {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background-color: #161414;
  color: white;
  border: 12px solid #1A1A1A;
  justify-content: center;
  padding: 20px;
}

.news-item {
  background-color: #1A1A1A;
  width: 280px;
  height: 212px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 20px;
  text-align: center;
  padding: 10px;
}

.news-img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 10px;
}

.news-text {
  font-size: 16px;
  color: white;
}

@media screen and (max-width: 600px) {
  .news {
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
    border-width: 6px;
  }

  .news-item {
    width: 100%;
    max-width: 90%;
    height: auto;
    padding: 20px 10px;
    gap: 10px;
  }

  .news-img {
    width: 50px;
    height: 50px;
  }

  .news-text {
    font-size: 14px;
  }
}

</style>

<script setup>
import { ref } from 'vue'

const getImage = (name) => new URL(`../assets/photos/${name}`, import.meta.url).href

const news = ref([
  {
    image: 'home.png',
    text: 'Find Your Dream Home'
  },
  {
    image:"camera.png",
    text: "Unlock Propertyy Value"
  },
  {
    image:"apart.png",
    text: "Effortless Property",
  },
  {
    image:"sun.png",
    text:"Smart Investments"
  }
])
</script>