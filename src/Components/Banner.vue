<template>
    <div class="banner">
        <!-- first child -->
        <div>
            <!-- first child -->
            <div>
                <h1>Discover Your Dream Property with Estatein</h1>
                <p>Your journey to finding the perfect property begins here. Explore our listings to find the home
                    that matches your dreams.</p>
            </div>
            <!-- nth 2 child -->
            <div class="btns">
                <button>Learn More</button>
                <button>Browse Properties</button>
            </div>
            <!-- last child -->
            <div class="cus">
                <!-- first div -->
                <div>
                    <h2>200 +</h2>
                    <span>Happy customers</span>
                </div>
                <!-- nth 2 div -->
                <div>
                    <h2>10K +</h2>
                    <span>Properties For Clients</span>
                </div>
                <!-- last div -->
                <div>
                    <h2>16 +</h2>
                    <span>Years Of Experience</span>
                </div>
            </div>
        </div>
        <!-- last child -->
        <div>
            <img src="@/assets/photos/ContainerMain.png" alt="">
        </div>
        <img src="../assets/photos/midl-arrow.png" alt="">
    </div>
</template>
<style scoped>

.banner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #161414;
    color: white;
    position: relative;
}

.banner div:first-child {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
}

.banner div:first-child h1 {
    font-size: 60px;
    width: 600px;
    margin-top: 100px;
}

.banner div:first-child p {
    font-size: 18px;
    width: 500px;
    color: #999999;
    margin-right: 109px;
    margin-top: 15px;
}
.banner > div img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.btns {
    display: flex;
    gap: 20px;
    margin-right: 266px;
    margin-bottom: 50px;

}

.banner div:first-child div:nth-of-type(2) button {

    height: 63px;
    cursor: pointer;
    border-radius: 8px;
}

.btns button:first-child {
    background-color: transparent;
    color: white;
    border: 1px solid #1E1C1CCC;
    width: 139px;
}

.btns button:last-child {
    width: 191px;
    background-color: #703BF7;
    color: white;

}

.cus {
    display: flex;
    gap: 25px;
    margin-bottom: 100px;
    margin-left: 80px;
}

.banner div:last-child>div {
    background-color: #1A1A1A;
    border-radius: 8px;
    display: flex;
    width: 220px;
    height: 121px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
}
.banner > img{
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 100px;
}
.cus h2 {
    font-size: 40px;
    margin-right: 30px;
}

.intro div:last-child>div:nth-child(2) h2 {
    margin-right: 57px;
}

.intro div:last-child>div:last-child h2 {
    margin-right: 79px;
}

.cus span {
    font-size: 18px;
}
</style>
