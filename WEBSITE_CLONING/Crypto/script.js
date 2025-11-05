// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", () => {
  
  // Find the phone element
  const phone = document.querySelector(".phone-img");
  
  // Only run if the phone exists on the page
  if (!phone) return;

  // This function updates the CSS variable
  function updatePhoneAnimation() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate progress (0.0 to 1.0)
    // We'll make the animation finish after 80% of a screen-scroll
    const progress = Math.min(scrollY / (windowHeight * 0.8), 1);

    // Set the CSS custom property on the phone element
    phone.style.setProperty('--scroll-progress', progress);
  }

  // Run the function when the user scrolls
  window.addEventListener("scroll", updatePhoneAnimation, { passive: true });
  
  // Run it once on load, just in case the page is already scrolled
  updatePhoneAnimation();
});