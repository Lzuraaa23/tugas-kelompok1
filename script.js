function wrapCharacters(element) {
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

function animateText(element, delay = 50) {
    const letters = element.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        letter.style.display = 'inline-block';
        letter.style.opacity = '0';
        letter.style.transform = 'translateY(20px)';
        letter.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
        
        setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';
        }, index * delay);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1'); 
    const subtext = document.querySelector('p'); 

    
    wrapCharacters(heading);
    wrapCharacters(subtext);
    
    animateText(heading);
    setTimeout(() => animateText(subtext), heading.textContent.length * 50);
});

document.addEventListener('DOMContentLoaded', function() {

  var navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  function fadeIn(element) {
    var opacity = 0;
    var interval = setInterval(function() {
      if (opacity < 1) {
        opacity += 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(interval);
      }
    }, 50);
  }

  function animateText(element, delay) {
    var text = element.textContent;
    element.textContent = '';
    for (var i = 0; i < text.length; i++) {
      (function(i) {
        setTimeout(function() {
          element.textContent += text[i];
        }, delay * i);
      })(i);
    }
  }

  var heading = document.querySelector('h1');
  var subtext = document.querySelector('p');
  if (heading) animateText(heading, 100);
  if (subtext) setTimeout(function() { animateText(subtext, 50); }, heading ? heading.textContent.length * 100 : 0);

  var aboutUsHeading = document.querySelector('#tentang\\ kami h2');
  if (aboutUsHeading) fadeIn(aboutUsHeading);
});
        
