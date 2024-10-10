function wrapCharacters(element) {
  element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

function animateText(element, delay = 50) {
  const letters = element.querySelectorAll('.letter');
  letters.forEach((letter, index) => {
      letter.style.display = 'inline-block';
      letter.style.opacity = '0';
      letter.style.transform = 'translateY(20px)';
      letter.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      setTimeout(() => {
          letter.style.opacity = '1';
          letter.style.transform = 'translateY(0)';
      }, index * delay);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Text animation
  const heading = document.querySelector('h1');
  const subtext = document.querySelector('p');

  if (heading) {
      wrapCharacters(heading);
      animateText(heading);
  }
  if (subtext) {
      wrapCharacters(subtext);
      setTimeout(() => animateText(subtext), heading ? heading.textContent.length * 50 : 0);
  }

  // Smooth scrolling
  var navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(function(anchor) {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
      var navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
          navbar.classList.add('navbar-scrolled');
      } else {
          navbar.classList.remove('navbar-scrolled');
      }
  });

  // Product card hover effect
  var productCards = document.querySelectorAll('.product-card');
  productCards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.05)';
          this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
      });
      card.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1)';
          this.style.boxShadow = 'none';
      });
  });

  // Back to top button
  var backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '↑';
  backToTopButton.setAttribute('id', 'backToTop');
  backToTopButton.style.display = 'none';
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  backToTopButton.addEventListener('click', function() {
      window.scrollTo ({
        top: 0,
        behavior: 'smooth'
      });
  });
});
