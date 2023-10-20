(function ($) {
  "use strict";   
  
  new WOW().init();
    
    // Sticky Navbar
    $(function () {
        var navbar = $('.navbar');
        $(window).scroll(function () {
        if ($(window).scrollTop() <= 40) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });
    });

    $(document).ready(function () {
        // Select the navbar element
        const navbar = $('.navbar');
      
        // Function to toggle the 'navbar-scroll' class based on scroll position
        function toggleNavbarBackground() {
          if ($(window).scrollTop() > 0) {
            navbar.addClass('navbar-scroll');
          } else {
            navbar.removeClass('navbar-scroll');
          }
        }
      
        // Initial check when the page loads
        toggleNavbarBackground();
      
        // Check for scroll events
        $(window).scroll(toggleNavbarBackground);
      });
      

    // Smooth scrolling on the navbar links
    $(document).ready(function () {
        $('a.nav-link').on('click', function (event) {
          if (this.hash !== '') {
            event.preventDefault();
      
            const hash = this.hash;
            const offset = 70; // Adjust this value if needed
      
            $('html, body').animate({
              scrollTop: $(hash).offset().top - offset
            }, 800); // Adjust the animation duration as needed
          }
        });
      });

      // Screenshot carousel
      $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1,
        margin: 10,
    });

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior.

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!validateName(firstName) || !validateName(lastName)) {
      alert("Please enter a valid first name and last name (at least 2 characters each).");
  } else if (!email || !validateEmail(email)) {
      alert("Please enter a valid email address.");
  } else if (!message) {
      alert("Please enter a message.");
  } else {
      var params = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          message: message
      }

      emailjs.send('service_5r4k2wr', 'template_nzol3q8', params)
            .then(function (res) {
                alert("Sent! " + res.status);
                document.getElementById("form").reset();
            });
    }
});

function validateName(name) {
  var namePattern = /^[A-Za-z]{2,}$/; // At least 2 alphabetical characters
  return namePattern.test(name);
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


    
  })(jQuery);