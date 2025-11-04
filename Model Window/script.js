'use strict'; // Enforces strict mode for cleaner, safer JavaScript

// --------------------
// Selecting Elements
// --------------------
const modal = document.querySelector('.modal');          // The modal window element
const overlay = document.querySelector('.overlay');      // The dark background overlay
const btnCloseModal = document.querySelector('.close-modal'); // The "X" close button
const btnsOpenModal = document.querySelectorAll('.show-modal'); // All buttons that open the modal

// --------------------
// Functions
// --------------------

// Function to close the modal (hide it)
const closeModal = function () {
  modal.classList.add('hidden');   // Adds 'hidden' class to hide the modal
  overlay.classList.add('hidden'); // Adds 'hidden' class to hide the overlay
};

// Function to open the modal (show it)
const openModal = function () {
  console.log('Button clicked');    // For testing — confirms the button was clicked
  modal.classList.remove('hidden'); // Removes 'hidden' class to show the modal
  overlay.classList.remove('hidden'); // Removes 'hidden' class to show the overlay
};

// --------------------
// Event Listeners
// --------------------

// Loop through all buttons with the 'show-modal' class
// Add a click event listener to each one to open the modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Add a click event to the close button (the "X") to close the modal
btnCloseModal.addEventListener('click', closeModal);

// Add a click event to the overlay area to close the modal when clicking outside it
overlay.addEventListener('click', closeModal);

// Add a keydown event listener to the entire document
// This allows closing the modal by pressing the 'Escape' key
document.addEventListener('keydown', function (event) {
  // Check if the pressed key is 'Escape' AND the modal is currently visible
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // Close the modal
  }
});
