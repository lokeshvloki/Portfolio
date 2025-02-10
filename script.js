// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Contact form submission
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simulate form submission (you can replace this with an actual API call)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Thank you for your message! I will get back to you soon.');
    document.getElementById('contact-form').reset();
  });