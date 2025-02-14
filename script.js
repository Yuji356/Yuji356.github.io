document.addEventListener("DOMContentLoaded", () => {
  const starContainer = document.querySelector(".stars");
  const numStars = 400; // Adjust number of stars for density

  for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.classList.add("star");

    // Random position
    let x = Math.random() * 100;
    let y = Math.random() * 100;

    // Random size and glow
    let size = Math.random() * 3 + 1; // 1px - 4px
    let duration = Math.random() * 2 + 1; // Different twinkle speeds

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${y}vh`;
    star.style.left = `${x}vw`;
    star.style.animationDuration = `${duration}s`;

    starContainer.appendChild(star);
  }

  // Add fireworks effect (assuming 'fireworks.js' is included and Fireworks is defined)
  const container = document.querySelector(".fireworkDiv"); // Make sure this selector is correct
  const fireworks = new Fireworks(container, {
    autoresize: true,
    opacity: 0.7,
    acceleration: 0.9,
    friction: 0.97,
    gravity: 1,
    particles: 0,
    traceLength: 50,
    traceSpeed: 90,
    explosion: 5,
    intensity: 500,
    flickering: 500,
    lineStyle: 'round',
    hue: {
      min: 200,
      max: 220
    },

    delay: {
      min: 350, // Faster appearance
      max: 400
    },
    rocketsPoint: {
      min: 0,
      max: 100
    },
    lineWidth: {
      explosion: {
        min: 1,
        max: 3
      },
      trace: {
        min: 2,
        max: 5
      }
    },
    brightness: {
      min: 60,
      max: 100
    },
    decay: {
      min: 0.0015, // Makes the tail fade smoothly
      max: 0.05
    },
    mouse: {
      click: false,
      move: false,
      max: 1
    }
  });
  fireworks.start();


  function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shoot_star';

    // Set random position
    const startX = Math.random() * window.innerWidth; 
    const startY = Math.random() * window.innerHeight * 0.5; // Appears in the top half

    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    // Set random animation duration
    const duration = Math.random() * 2 + 1.5; // Between 1.5s and 3.5s
    star.style.animation = `tail ${duration}s ease-in-out forwards, falling ${duration}s ease-in-out forwards`;

    document.querySelector('.night').appendChild(star);

    // Remove the star after animation completes
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

// Continuously generate shooting stars at random intervals
setInterval(createShootingStar, 500); // Creates a new star every 0.5 seconds

  
  

  // --- NEW CODE FOR POEM POP-UP ---
  const poemButtons = document.querySelectorAll('.menu button');
  poemButtons.forEach(button => {
    const poemContainerId = button.classList[0].replace('poem', 'poem-container');
    const poemContainer = document.querySelector(`.${poemContainerId}`);
    button.addEventListener('click', () => {
      poemContainer.style.display = poemContainer.style.display === 'none' ? 'block' : 'none';
    });
  });
});

function togglePoem(number) {
  const poemContainer = document.querySelector(`.poem-container-${number}`);
  const overlay = document.querySelector('.overlay');

  if (poemContainer) {
      // Show the poem and overlay
      poemContainer.style.display = "block";
      overlay.style.display = "block";

      if (number % 2 === 1) { // Odd numbers → Left
        poemContainer.classList.add("poem-left");
        poemContainer.classList.remove("poem-right");
      } else { // Even numbers → Right
        poemContainer.classList.add("poem-right");
        poemContainer.classList.remove("poem-left");
      }
  } else {
      console.log(`Poem container ${number} not found`);
  }
}

// Function to close the poem and overlay
function closePoem() {
  document.querySelectorAll('.poem-container').forEach(container => {
      container.style.display = "none";
  });
  document.querySelector('.overlay').style.display = "none";
}
