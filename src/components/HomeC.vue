<template>
    <div>
        <h1>   BayWash</h1>
        <h3>Welcome to Baywash, where we provide top-quality car care and cleaning services to make your ride shine like new!</h3>
        <img :src="imageUrl" alt="My Image" />

        <div class="card1">
            <h2>Feel Clean and extreme</h2>
            <h3>These are the services we offer...</h3>


            <div class="display">
     <div class="card" style="width: 12rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Exterior Hand Wash</li>
  
  </ul>
</div>

<div class="card" style="width: 12rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Wax & Polish </li>
  
  </ul>
</div>

<div class="card" style="width: 12rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Leather Conditioning</li>
  
  </ul>
</div>

<div class="card" style="width: 12rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Headlight Restoration</li>
  </ul>
</div>

</div>

<div class="display2">
    <div class="card" style="width: 12rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Glass Cleaning </li>
  
  </ul>
</div>
<div class="card" style="width: 12rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Tire & Rim Cleaning</li>
  
  </ul>
</div>
</div>

        </div>

    </div>
</template>

<script>
export default {
    name:'HomeC',
    data(){
        return{
            imageUrl: require('../images/washincar.jpg'), 

        }
    }
}
</script>
<style scoped>
img{
    height: 500px;
    width: 800px;
    margin-left: 250px;
    border-radius: 50px;
}
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    margin: 0;
    padding: 0;
}

h1, h3 {
    text-align: center;
}

h1 {
    font-size: 38px;
    color: #3b3b3b;
    margin-top: 40px;
}

h3 {
    font-size: 20px;
    color: #555;
    margin-bottom: 30px;
}

.card1 {
    max-width: 900px;
    margin: 50px auto;
    padding: 40px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.card1 h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
}

.card1 h3 {
    font-size: 22px;
    color: #666;
    margin-bottom: 40px;
}

/* Styling for the service cards */
.display, .display2 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}


.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.list-group-item {
    background-color: #f2f2f2;
    color: #555;
    border: none;
    padding: 15px;
    font-size: 16px;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 10px;
}

.list-group-item:hover {
    background-color: #e0e0e0;
}



</style>