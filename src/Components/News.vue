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
    display:flex;
    height: 252px;
    align-items: center;
    background-color: #161414;
    color: white;
    border: 12px solid #1A1A1A;
    gap: 20px;
}
.news div{
    background-color:#1A1A1A;
    width:420px;
    height: 212px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-left: 25px;
    font-size: 20px;
}

  @media screen and (max-width:600px){
  .news{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: max-content !important;
    padding-right:12px;
    height: 300px;
    gap:1px !important;
  }
  .news div{
    display: flex;
    width: 150px;
    height: 100px;
    margin-left:20px ;
  }
  .news div img{
    width: 50px;
    height: 50px;
  }
  .news div p{
    font-size: 12px;
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