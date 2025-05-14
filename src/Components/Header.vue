<template>
    <header>
        <nav>
            <div>
                <img src="@/assets/photos/Symbol.png" alt="Background" />
                <h3>Estatein</h3>
            </div>
            <ul class="new-list">
                <li v-for="(item, index) in newsList" :key="index">{{ item }}</li>

            </ul>
            <button>Contact Us</button>
        </nav>


    </header>
</template>

<style scoped>


header nav {
    display: flex;
    background-color: #1A1A1A;
    position: relative;
    color: white;
    align-items: center;
    justify-content: space-between;
    height: 99px;
}

header nav div {
    margin-left: 162px;
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 30px;
}

.new-list {
    list-style: none;
    display: flex;
    gap: 25px;
    text-decoration: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
}

header nav button {
    width: 136px;
    height: 59px;
    margin-right: 100px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 8px;
    cursor: pointer;

}

</style>

<script setup>

import { ref } from 'vue'

const newsList = ref([
    "Home",
    "About Us",
    "Properties",
    "Services",
])

</script>