import React from "react";
import "../Styles/slideshow.css"

const Slideshow = () => {


  return(
    <div class="container">
  <div class="box">
    <img src="https://purewows3.imgix.net/images/articles/2020_04/bread_basket_meal_kit.png"></img>
    <span>Baked Goodness</span>
  </div>
  <div class="box">
    <img src="https://source.unsplash.com/1000x802"></img>
    <span>Deli Bites</span>
  </div>
  <div class="box">
    <img src="https://purewows3.imgix.net/images/articles/2020_04/Brownsville_Community_Culinary_Center_and_Collective_Fare_meal_kit.png"></img>
    <span>Vegan</span>
  </div>
  <div class="box">
    <img src="https://purewows3.imgix.net/images/articles/2020_04/blue_apron_meal_kit.png"></img>
    <span>Meal Kits</span>
  </div>
</div>
  )

};


export default Slideshow;
