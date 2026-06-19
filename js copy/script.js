// Mobile Hamburger Menu Toggle
const hamburger = document.querySelector('.harmbuger');
const navMenu = document.querySelector('nav ul');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    // Check if menu is currently closed
    if (!hamburger.classList.contains('active')) {
      // Open menu
      navMenu.classList.add('active');
      hamburger.classList.add('active');
    } else {
      // Close menu
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
}