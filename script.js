const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const textContainer = document.querySelector('.container-text');
const video = document.querySelector('.video-container video');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');


    // icon change
    const icon = hamburger.querySelector('i');
    if (menu.classList.contains('show')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');  // close icon
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');   // back to menu icon
    }
  });
 
  
  


}

// Function to show text after 4 sec
function showTextAfterDelay() {
  textContainer.classList.remove('show-text');
  textContainer.classList.add('hidden-text');

  setTimeout(() => {
    textContainer.classList.remove('hidden-text');
    textContainer.classList.add('show-text');
  }, 1000);
}

// First time (page load)
window.addEventListener('load', () => {
  showTextAfterDelay();
});

// Each time video restarts
let lastTime = 0;
video.addEventListener('timeupdate', () => {
  if (lastTime > video.currentTime) {
    // Video restarted (looped)
    showTextAfterDelay();
  }
  lastTime = video.currentTime;
});


document.addEventListener("DOMContentLoaded", () => {
  const textContainer = document.querySelector(".container-text");

  // Pehle hidden rahega
  textContainer.classList.add("hidden-text");

  // 4 sec baad show karna hai
  setTimeout(() => {
    textContainer.classList.remove("hidden-text");
    textContainer.classList.add("show-text");
  }, 1000);
});




 const elements = document.querySelectorAll('.fade-left, .fade-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-show');
        // Uncomment below line if you want animation only once
        // observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  elements.forEach(el => observer.observe(el));


/// Scroll Text
    function revealOnScroll() {
    const boxes = document.querySelectorAll('.border-box');
    const triggerBottom = window.innerHeight * 0.85; // 85% from top
    boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add('show');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);



/// Counting ////
 function startCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    const triggerBottom = window.innerHeight * 0.85;
    counters.forEach(counter => {
      const boxTop = counter.getBoundingClientRect().top;
      if (boxTop < triggerBottom && !counter.classList.contains('counted')) {
        counter.classList.add('counted');
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 100; // adjust speed
        const updateCounter = () => {
          if (count < target) {
            count += speed;
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target; // final number
          }
        };
        updateCounter();
      }
    });
  }
  window.addEventListener('scroll', startCounterAnimation);
  window.addEventListener('load', startCounterAnimation);
 const textSection = document.querySelector('.text');

/// Animation ///
  AOS.init({
    duration: 1200, // Animation speed (ms)
    once: true,     // Animation sirf 1 baar chale
  });







// Apna WhatsApp number (country code + number, bina + sign ke)
