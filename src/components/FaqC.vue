<template>
    <div>
       <div class="faq-container">
        <h1>Frequently Asked Questions</h1>

        <div class="faq-item">
            <h2>What services does Baywash offer?</h2>
            <p>We provide a range of services including full car wash, interior cleaning, waxing, and detailing.</p>
        </div>

        <div class="faq-item">
            <h2>Do I need to make an appointment?</h2>
            <p>While we accept walk-ins, we recommend scheduling an appointment to avoid waiting times.</p>
        </div>

        <div class="faq-item">
            <h2>How long does a full car wash take?</h2>
            <p>A full car wash typically takes 30-45 minutes depending on the size and condition of the vehicle.</p>
        </div>

        <div class="faq-item">
            <h2>Are your cleaning products eco-friendly?</h2>
            <p>Yes, we use eco-friendly cleaning products for all our services.</p>
        </div>
``
        <div class="faq-item">
            <h2>Where is Baywash located?</h2>
            <p>We are located at 1234 Carwash Street, Nairobi. You can find us easily using Google Maps.</p>
        </div>

   
        <div class="ask-question">
            <h2>Ask a Question</h2>
            <form action="#" method="post">
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Your Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="question">Your Question:</label>
                <textarea id="question" name="question" rows="5" required></textarea>

                <button type="submit">Submit Question</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name:'FaqC'
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

.faq-container {
    max-width: 900px;
    margin: 50px auto;
    padding: 40px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    font-size: 38px;
    color: #333;
    margin-bottom: 50px;
}

.faq-item {
    padding: 25px;
    background-color: #f9f9f9;
    border-radius: 10px;
    margin-bottom: 30px;
    border-left: 5px solid #3b3b3b;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.faq-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.faq-item h2 {
    font-size: 24px;
    color: #444;
    margin-bottom: 12px;
}

.faq-item p {
    font-size: 16px;
    color: #666;
    line-height: 1.7;
}

/* Ask a Question Form */
.ask-question {
    margin-top: 50px;
    padding: 35px;
    background-color: #ececec;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.ask-question h2 {
    color: #3b3b3b;
    font-size: 28px;
    margin-bottom: 25px;
    text-align: center;
}

.ask-question label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    color: #555;
}

.ask-question input, .ask-question textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f7f7f7;
    font-size: 16px;
    transition: border-color 0.3s;
}

.ask-question input:focus, .ask-question textarea:focus {
    border-color: #3b3b3b;
}

.ask-question button {
    width: 100%;
    padding: 15px;
    font-size: 18px;
    color: white;
    background-color: #3b3b3b;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.ask-question button:hover {
    background-color: #2c2c2c;
}
</style>