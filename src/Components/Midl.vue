<template>
    <div class="midl">
        <!-- header = first div -->
        <div class="intro">
            <div>
                <h2>Featured Properties</h2>
                <p>Explore our handpicked selection of featured properties. Each listing offers a glimpse into
                    exceptional homes and investments available through Estatein. Click "View Details" for more
                    information.</p>
            </div>
            <button>View All Properties</button>
        </div>




        <!-- Midl = nth 2 div -->
        <div class="property">

            <!-- first child -->
            <div>
                <div>
                    <img src="@/assets/photos/Villa.png" alt="">
                    <h3>Seadside Serenity Villa</h3>
                    <span>A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..</span>
                </div>

                <div class="icons">
                    <div>
                        <img src="@/assets/photos/Bed.png">
                        <p>4-Bedroom</p>
                    </div>

                    <div>
                        <img src="@/assets/photos/bath.png" alt="">
                        <p>3-Bathroom</p>
                    </div>
                    <div>
                        <img src="@/assets/photos/Bed.png">
                        <p>4-Bedroom</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Price</h4>
                        <h5>$1,250,000</h5>
                    </div>
                    <button>View Property Details</button>
                </div>

            </div>



            <!-- nth2 chlid -->
            <div>
                <div>
                    <img src="@/assets/photos/Appartament.png" alt="">
                    <h3>Metropolitan Haven</h3>
                    <span>A chic and fully-furnished 2-bedroom apartment with panoramic city views.</span>
                </div>
                <div class="icons_2">
                    <div>
                        <img src="@/assets/photos/Bed.png">
                        <p>4-Bedroom</p>
                    </div>

                    <div>
                        <img src="@/assets/photos/bath.png" alt="">
                        <p>2-Bathroom</p>
                    </div>
                    <div>
                        <img src="@/assets/photos/Bed.png">
                        <p>2-Bedroom</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Price</h4>
                        <h5>$650,000</h5>
                    </div>
                    <button>View Property Details</button>
                </div>

            </div>


            <!-- last child -->
            <div>
                <div>
                    <img src="@/assets/photos/Cottage.png" alt="">
                    <h3>Rustic Retreat Cottage</h3>
                    <span>An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.</span>
                </div>
                <div class="icons_3">
                    <div>
                        <img src="@/assets/photos/Bed.png">
                        <p>4-Bedroom</p>
                    </div>

                    <div>
                        <img src="@/assets/photos/bath.png" alt="">
                        <p>2-Bathroom</p>
                    </div>
                    <div>
                        <img src="@/assets/photos/Bed.png">
                        <p>2-Bedroom</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Price</h4>
                        <h5>$650,000</h5>
                    </div>
                    <button>View Property Details</button>
                </div>
            </div>
        </div>
        <div class="arrows">
            <button><img src="../assets/photos/Vector l.png" alt=""></button>
            <button><img src="../assets/photos/Vector r.png" alt=""></button>
        </div>

    </div>
</template>


<style scoped>

.midl {
    background-color: #161414;
    height: 1200px;
   
}

.intro {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 80px 0px 0px 80px;

}

.intro>div:first-child {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 1150px;
}

.intro h2 {
    font-size: 48px;
    color: white;
}

.intro p {
    font-size: 18px;
    color: #4D4D4D;
}

.intro button {
    width: 196px;
    height: 63px;
    background-color: #1A1A1A;
    border: none;
    color: white;
    border-radius: 8px;
    margin-left: 400px;
    margin-top: 100px;
    cursor: pointer;
    font-size: 15px;

}

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
.property {
    height: 690px;
    color: white;
    display: flex;
    justify-content: flex-start;
    margin-top: 100px;
}

.property>div {
    border: 1.5px solid #1E1C1CCC;
    width: 512px;
    border-radius: 8px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.property>div:first-child>div:first-child>img {
    width: 432px;
    height: 318px;
    margin-left: 40px;
    margin-top: 40px;
}

.property>div:first-child>div:first-child>h3 {
    font-size: 24px;
    margin-left: 40px;
    margin-top: 40px;

}

.property>div:first-child div:first-child span {
    color: #999999;
    font-size: 18px;
    width: 400px;
    margin-left: 40px;
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
}

.property>div:first-child>div:last-child img {
    width: 24px;
}

.icons {
    width: 140px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    margin-left: 20px;

}

.icons>div {
    color: white;
    width: 147px;
    height: 43px;
    display: flex;
    align-items: center;
    background-color: #1A1A1A;
    border-radius: 12px;
    gap: 15px;
    padding-left: 20px;
    cursor: pointer;
}

.property>div:first-child>div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 40px;
    gap: 50px;
    margin-top: 20px;

}

.property>div:first-child>div:last-child button {
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
button:hover {
    background-color: #5b2ed1; 
    box-shadow: 0 6px 20px rgba(112, 59, 247, 0.5); 
    transform: translateY(-2px); 
}


.property>div:first-child>div:last-child h4 {
    color: #999999;
    font-size: 20px;
}

.property>div:first-child>div:last-child h5 {
    font-size: 24px;
}

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
.property>div:nth-child(2)>div:first-child img {
    width: 432px;
    height: 318px;
    margin-left: 40px;
    margin-top: 40px;
}

.property>div:nth-child(2)>div:first-child h3 {
    font-size: 24px;
    margin-left: 40px;
    margin-top: 40px;
}

.property>div:nth-child(2)>div:first-child span {
    color: #999999;
    font-size: 18px;
    width: 400px;
    margin-left: 40px;
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
}

.icons_2 {
    width: 140px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    margin-left: 20px;

}

.icons_2>div {
    color: white;
    width: 147px;
    height: 43px;
    display: flex;
    align-items: center;
    background-color: #1A1A1A;
    border-radius: 12px;
    gap: 15px;
    padding-left: 20px;
    cursor: pointer;
}

.property>div:nth-child(2)>div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 40px;
    gap: 50px;
    margin-top: 20px;

}

.property>div:nth-child(2)>div:last-child button {
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
button:hover {
    background-color: #5b2ed1; 
    box-shadow: 0 6px 20px rgba(112, 59, 247, 0.5); 
    transform: translateY(-2px); 
}

.property>div:nth-child(2)>div:last-child h4 {
    color: #999999;
    font-size: 20px;
}

.property>div:nth-child(2)>div:last-child h5 {
    font-size: 24px;
}

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
.property>div:last-child>div:first-child img {
    width: 432px;
    height: 318px;
    margin-left: 40px;
    margin-top: 40px;
}
.property>:last-child>div:first-child h3 {
    font-size: 24px;
    margin-left: 40px;
    margin-top: 40px;
}
.property>div:last-child>div:first-child span {
    color: #999999;
    font-size: 18px;
    width: 400px;
    margin-left: 40px;
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
}
.icons_3 {
    width: 140px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    margin-left: 20px;

}

.icons_3>div {
    color: white;
    width: 147px;
    height: 43px;
    display: flex;
    align-items: center;
    background-color: #1A1A1A;
    border-radius: 12px;
    gap: 15px;
    padding-left: 20px;
    cursor: pointer;
}
.property>div:last-child>div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 40px;
    gap: 50px;
    margin-top: 20px;

}
.property>div:last-child>div:last-child button {
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
button:hover {
    background-color: #5b2ed1; 
    box-shadow: 0 6px 20px rgba(112, 59, 247, 0.5); 
    transform: translateY(-2px); 
}
.property>div:last-child>div:last-child h4 {
    color: #999999;
    font-size: 20px;
}

.property>div:last-child>div:last-child h5 {
    font-size: 24px;
}
.arrows{
    margin-top: 70px;
    display: flex;
    gap: 20px;
    justify-content: center;

}
.arrows button:first-child{
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 2px solid #1E1C1CCC;
    background-color: transparent;

}
.arrows button:last-child{
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 2px solid #1A1A1A;
    background-color: #1A1A1A;

}
</style>
