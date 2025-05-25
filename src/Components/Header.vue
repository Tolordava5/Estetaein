<template>
    <header>
        <nav>
            <div>
                <img src="../assets/photos/Symbol.png" alt="Background" />
                <h3>Estatein</h3>
            </div>
            <ul class="new-list">
                <li v-for="(item, index) in newsList" :key="index">{{ item }}</li>

            </ul>
            <button>Contact Us</button>
        </nav>
        <div class="mobile" :class="{ active: isActive }" @click="toggleActive">
            <div>
                <img src="../assets/photos/Symbol.png" alt="Background" />
                <h3>Estatein</h3>
            </div>
            <img src="@/assets/photos/List.png" alt="">
            <ul class="new-list">
                <li v-for="(item, index) in newsList" :key="index">{{ item }}</li>
            </ul>
        </div>
        <ul class="new-list">
            <li v-for="(item, index) in newsList" :key="index">{{ item }}</li>

        </ul>

    </header>
</template>

<style scoped>
header {
    background-color: #1A1A1A;
}

header nav {
    display: flex;

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

.mobile {
    display: none;
}

.mobile+.new-list {
    display: none;
}

@media screen and (max-width:600px) {
    nav {
        display: none !important;
    }

    .mobile {
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: transparent;
        padding: 20px;
        gap: 10px;
    }

    .mobile div {
        display: flex;
        align-items: center;
        gap: 20px;
        color: white;
    }

    .mobile ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow: hidden;
        max-height: 0;
        opacity: 1;
        transform: translateY(-10px);
        transition: max-height 0.6s ease, opacity 0.6s ease, transform 0.6s ease;
    }

    .mobile.active ul {
        max-height: 500px;
        opacity: 1;
        transform: translateY(0);
        display: flex;
    }
    .mobile > img{
        width: 40px;
        height: 40px;
        margin-left: 100px;
        cursor: pointer;
    }
    .mobile.active > img {
    transform: rotate(360deg);
    transition: transform 0.3s ease;
    }
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

const isActive = ref(false)

function toggleActive() {
    isActive.value = !isActive.value
}
</script>