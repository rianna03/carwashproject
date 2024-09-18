<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/home">ClassApp</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/faq">faq</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

<router-view/>

<!-- Footer -->
<footer class="bg-dark text-white pt-4">
  <div class="container">
    <div class="row">
      <!-- About Section -->
      <div class="col-md-4">
        <h5>About Us</h5>
        <p>
          We are a company dedicated to delivering top-quality products and services.
        </p>
      </div>

      <!-- Links Section -->
      <div class="col-md-4">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white">Home</a></li>
          <li><a href="#" class="text-white">Services</a></li>
          <li><a href="#" class="text-white">Contact</a></li>
        </ul>
      </div>

      <!-- Contact Section -->
      <div class="col-md-4">
        <h5>Contact Us</h5>
        <p>
          <i class="fas fa-phone-alt"></i>{{ phone }} <br>
          <i class="fas fa-envelope"></i> info@example.com
        </p>
      </div>
    </div>
  </div>

  <!-- Copyright Section -->
  <div class="text-center py-3">
    <p>&copy; 2024 Your Company. All Rights Reserved.</p>
  </div>
</footer>

<!-- Add Bootstrap and FontAwesome CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://kit.fontawesome.com/a076d05399.js"></script>


</template>

<script>
export default {
  name:'App',
  data() {
    return {
      phone:' +123 456 3456'
    }
  },
};
</script>
<style scoped></style>
