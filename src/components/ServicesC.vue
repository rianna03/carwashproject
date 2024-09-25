<template>
    <div>
        <div class="services-container">
        <h1>Our Services</h1>
        <p>At Baywash, we offer a variety of premium car care services to keep your vehicle looking its best. Check out our list of professional services below.</p>

        <!-- Service Section 1 -->
        <div class="service-section">
            <div class="service">
                <img :src="imageUrl" alt="My Image" class="service-img" />
                     <h2>Exterior Hand Wash</h2>
                <p>Our team provides a thorough hand wash to ensure your car’s exterior shines with a spotless finish.</p>
            </div>

            <div class="service">
                <img :src="imageUrl2" alt="My Image" class="service-img" />
                <h2>Wax & Polish</h2>
                <p>Enhance and protect your vehicle's paint with our wax and polish services, leaving it glossy and smooth.</p>
            </div>

            <div class="service">
                <img :src="imageUrl3" alt="My Image" class="service-img" />
                <h2>Leather Conditioning</h2>
                <p>Our leather conditioning service rejuvenates and protects your car’s interior for long-lasting comfort.</p>
            </div>
        </div>


        <div class="service-section">
            <div class="service">
                <img :src="imageUrl4" alt="My Image" class="service-img" />                <h2>Headlight Restoration</h2>
                <p>Restore the clarity of your headlights to improve visibility and enhance your car’s appearance.</p>
            </div>

            <div class="service">
                <img :src="imageUrl5" alt="My Image" class="service-img" />                <h2>Headlight Restoration</h2>
                <h2>Tire & Rim Cleaning</h2>
                <p>Get your tires and rims looking brand new with our detailed cleaning services.</p>
            </div>

            <div class="service">
                <img :src="imageUrl6" alt="My Image" class="service-img" />                <h2>Headlight Restoration</h2>
                <h2>Interior Detailing</h2>
                <p>Keep your car's interior pristine with our deep cleaning services, from carpets to dashboards.</p>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="cta-section">
            <h2>Want to learn more about our services?</h2>
            <p>Contact us today to schedule an appointment or get more information about what Baywash can do for your vehicle!</p>
            <a href="ContactC.vue" class="cta-button">Contact Us</a>
        </div>

    </div>
    </div>
</template>

<script>
export default {
    name:'ServicesC',
    data(){
        return{
            imageUrl: require('../images/handwash.webp'), 
            imageUrl2: require('../images/wax.jpeg'), 
            imageUrl3: require('../images/leather.jpeg'),
            imageUrl4: require('../images/headlights.jpeg'),
            imageUrl5: require('../images/tires.jpeg'),
            imageUrl6: require('../images/interior.jpeg'),

            
            
            


        }
    }
}
</script>
<style scoped>
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    margin: 0;
    padding: 0;
}

.services-container {
    max-width: 1200px;
    margin: 50px auto;
    padding: 40px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    font-size: 38px;
    color: #333;
}

p {
    font-size: 18px;
    color: #666;
    margin-bottom: 40px;
}

.service-section {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 40px;
}

.service {
    width: 300px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.service-img {
    width: 100%;
    height: 200px;
    background-color: #ddd;
    border-radius: 8px;
    margin-bottom: 20px;
}

h2 {
    font-size: 22px;
    color: #3b3b3b;
    margin-bottom: 15px;
}

p {
    font-size: 16px;
    color: #555;
}

/* Call to Action Section */
.cta-section {
    background-color: #3b3b3b;
    color: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.cta-section h2 {
    font-size: 28px;
    color: white;
}

.cta-section p {
    font-size: 18px;
    color: #ddd;
    margin-bottom: 20px;
}

.cta-button {
    display: inline-block;
    padding: 15px 30px;
    background-color: #f9f9f9;
    color: #333;
    border-radius: 8px;
    text-decoration: none;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #ddd;
}

</style>