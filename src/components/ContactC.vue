<template>
    <div>
      <div class="all">
        <h1>Contact us</h1>
        <p>We’d love to hear from you and give you the services you need.</p>
        
        <div class="main">
          <div>
            <!-- Google Maps iframe -->
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.400671927706!2d36.78892135620119!3d-1.2622393266607859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6c882173b%3A0x72506dd1868b6f7!2sInstitute%20of%20Software%20Technologies!5e0!3m2!1sen!2ske!4v1709108606842!5m2!1sen!2ske" 
              width="500" height="550" style="border:0; margin-left: 100px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">            </iframe>
          </div>
          
          <div class="select">
            <form id="registrationForm" action="process_registration.php" method="post">
              
              <label for="firstname"><b>First Name</b></label><br><br>
              <input type="text" placeholder="Enter first name" id="firstname" style="width: 180px; height: 35px;" name="firstname" required>
              <input type="text" placeholder="Enter last name" id="lastname" style="width: 180px; margin-left: 40px; height: 35px;" name="lastname" required>
              <br><br>
              
              <label for="email"><b>Email</b></label><br><br>
              <input type="email" id="email" style="width: 440px; height: 35px;" name="email" required>
              <br><br>
              
              <label for="phone"><b>Phone</b></label><br><br>
              <input type="tel" id="phone" style="width: 440px; height: 35px;" name="phone" required>
              <br><br>
              
              <label for="gender"><b>Select Gender</b></label><br>
              <select id="gender" style="width: 452px; height: 40px;" name="gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>        
              <br><br>
              

              <label for="country"><b>Select Country</b></label><br>
              <select id="country" style="width: 452px; height: 40px;" name="country" required>
                <option value="kenya">Kenya</option>
                <option value="uganda">Uganda</option>
                <option value="tanzania">Tanzania</option>
              </select>
              <br><br>
              
              <!-- Submit button can be added if needed -->
            </form> <!-- Closing form tag here -->
          </div>
        </div>
        

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactC'
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

.all {
    max-width: 1200px;
    margin: 50px auto;
    padding: 40px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 38px;
    color: #333;
    text-align: center;
}

p {
    text-align: center;
    font-size: 18px;
    color: #666;
    margin-bottom: 40px;
}

.main {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
}


iframe {
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.select {
    max-width: 500px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
}

label {
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
select {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f7f7f7;
    font-size: 16px;
    transition: border-color 0.3s ease;
}

input:focus, select:focus {
    border-color: #3b3b3b;
    outline: none;
}

select {
    cursor: pointer;
}

input[type="submit"] {
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

input[type="submit"]:hover {
    background-color: #2c2c2c;
}
  </style>
  