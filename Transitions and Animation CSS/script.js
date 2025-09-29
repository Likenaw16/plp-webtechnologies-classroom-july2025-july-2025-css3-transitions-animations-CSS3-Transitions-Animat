// Function to add a class to an element (triggers CSS animation)
function addAnimation(element, className) {
  element.classList.add(className);
}

// Function to remove a class from an element (resets animation)
function removeAnimation(element, className) {
  element.classList.remove(className);
}

// Function to toggle animation on click
function toggleAnimation(element, className) {
  if (element.classList.contains(className)) {
    removeAnimation(element, className);
  } else {
    addAnimation(element, className);
  }
}

// Get references to DOM elements
const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');
const resetBtn = document.getElementById('resetBtn');

// Event listeners
animateBtn.addEventListener('click', () => {
  addAnimation(box, 'animate');
  // Optional bounce effect
  addAnimation(box, 'bounce');
  // Remove bounce after animation completes
  setTimeout(() => removeAnimation(box, 'bounce'), 600);
});

resetBtn.addEventListener('click', () => {
  removeAnimation(box, 'animate');
});
