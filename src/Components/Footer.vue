<template>
    <div class="Footer_intro">
        <div>
            <img src="../assets/photos/Cube l.png" alt="">
            <h2>Start Your Real Estate Journey Today</h2>
            <p>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
        </div>
        <div>
            <img src="../assets/photos/Cube r.png" alt="">
            <button>Explore Properties</button>
        </div>

    </div>
 
</template>

<style scoped>
  
.Footer_intro{
    width: 1920px;
    height: 367px;
    display: flex;
    background-color: #161414;
    border: 2px solid #1E1C1CCC;
    color: white;
    position: relative;
}
       


.Footer_intro div:first-child img{
    position: absolute;
}      
.Footer_intro h2{
    padding:100px 0px 0px 162px;
    position: relative;
    font-size: 48px;
}
.Footer_intro p{
    padding: 20px 550px 0px 162px;
    position: relative;
    color: grey;
    font-size: 18px;
}
.Footer_intro div:nth-child(2){
    position: relative;
}
.Footer_intro div:nth-child(2) img {
    position: absolute;
    top: 0;
    right: 0; 
    width: auto;
    height: auto;
}
.Footer_intro div:nth-child(2) button {
    position: relative;
    margin-right: 120px;
    background-color:#703BF7;
    margin-top: 150px;
    width:192px;
    height: 62px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    color: white;
    font-size: 15px;
}
@media screen and (max-width: 600px) {
  .Footer_intro {
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 20px;
    text-align:flex-start ;
    gap: 20px;
    height: fit-content;
  }

  .Footer_intro div:first-child img {
    display: flex;
    flex-direction:column;
    width: 340px;
    position: absolute;
  }

  .Footer_intro h2 {
    padding: 0;
    font-size: 28px;
  }

  .Footer_intro p {
    position: relative;
    display: flex;
    text-align: start;
    padding: 0 ;
    font-size: 16px;
    top: 10px;
  }

  .Footer_intro div:nth-child(2) {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;;
  }

  .Footer_intro div:nth-child(2) img {
   display: none;
    
  }

  .Footer_intro div:nth-child(2) button {
    margin: 0;
    width: 100%;
    max-width: 250px;
    margin-top: 10px;
  }
}


</style>
