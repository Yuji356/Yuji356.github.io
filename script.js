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

    const maxX = 200; // Adjust for desired range
    const maxY = 200; // Adjust for desired range
    const randomTop = Math.random() * 2 * maxY - maxY;
    const randomLeft = Math.random() * 1 * maxX - maxX; // Increased horizontal spread

    const randomDelay = Math.random() * 5; // Adjust for desired range of delays (in seconds)

    star.style.top = `calc(50% + ${randomTop}vh)`;
    star.style.left = `calc(25% + ${randomLeft}vw)`;
    star.style.animationDelay = `${randomDelay}s`;
    star.style.animation = `tail 3s ease-in-out forwards, falling 3s ease-in-out forwards`;

    // Remove star after animation completes
    star.addEventListener('animationend', () => {
      star.remove();
    });

    document.querySelector('.night').appendChild(star);
  }

  // Continuously create shooting stars
  setInterval(createShootingStar, 750); // Create a new star every 3 seconds (adjust as needed)

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
