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

.banner>div img {
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
  width: 190px;
}

.btns button:first-child {
  background-color: transparent;
  color: white;
  border: 1px solid #1E1C1CCC;
}

.btns button:last-child {
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

.banner>img {
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

@media screen and (max-width: 600px) {
  .banner{
    display: flex;
    flex-direction: column-reverse;
  }
    .banner div>img {
    border-radius: 16px;
    width: calc(100% - 16px);
    margin-left: 10px;
    margin-bottom: 99px;
    margin-top: 20px;
  }
  .banner div:first-child > div:first-child > h1 {
    display: flex;
    right: 20px;
    font-size: 32px; 
    width: 100%;
    margin-top: 40px; 
    text-align: flex-start;
    margin-left: 20px;
  }
    .banner>img {
    transform: none;
    top: calc(100% - 690px );
    left: calc(100% - 355px);
    height: 120px;
    margin: 0;
  }
  
  .banner div:first-child p {
    width: 90%;
    margin: 15px auto;
  }

  .btns {
    flex-direction: column !important;
    width: 90% !important;
    max-width: 400px !important;
    margin: 0 auto 20px auto !important;
    gap: 15px !important;
  }

  .btns button {
    width: 100% !important;
    box-sizing: border-box !important;
    display: block !important;
  }


  .cus {
    margin: 40px auto;
    width: 100% !important;
  }
  .cus h2 {
  font-size: 20px;
  margin-right: 30px;
  margin: 0 auto;
}
  .cus span{
    font-size: 11px;
  }
  .cus div{
    height: 70px !important;
    width: 50px;
  }
}
</style>
