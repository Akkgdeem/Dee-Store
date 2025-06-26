document.getElementById('footer').style.color = '#065e86';

// Define all product images with their alternates
const productImages = {
  'hpImage': ['Images/hp-laptop.jpg', 'Images/hp-2.jpg'],
  'asusImage': ['Images/Asus.jpg', 'Images/Asus-2.jpg'],
  'dellImage': ['Images/Dell.jpeg', 'Images/Dell-2.jpg'],
  'appleImage': ['Images/Apple.jpg', 'Images/Apple-2.jpg'],
  'acerImage': ['Images/Acer.jpg', 'Images/Acer-2.jpg'],
  'lenovoImage': ['Images/lenovo.jpg', 'Images/lenovo-2.jpg'],
  'microsoftImage': ['Images/Microsoft.jpg', 'Images/Microsoft-2.jpg'],
  'msiImage': ['Images/MSI.jpg', 'Images/MSI-2.jpg'],
  'samsungImage': ['Images/Samsung.jpg', 'Images/Samsung-2.jpg'],
  'lgImage': ['Images/LG.jpg', 'Images/LG-2.jpg']
};

// Function to create image slideshow for a product
function createSlideshow(imageId) {
  const image = document.getElementById(imageId);
  if (!image) return; // Skip if image doesn't exist
  
  const images = productImages[imageId];
  if (!images || images.length < 2) return; // Skip if no alternate image
  
  let currentIndex = 0;
  
  // Set initial opacity
  image.style.opacity = 1;
  
  // Function to change image with fade effect
  function changeImage() {
    // Fade out
    image.style.opacity = 0;
    
    // Wait for fade out, then change source and fade in
    setTimeout(function() {
      currentIndex = (currentIndex + 1) % images.length;
      image.src = images[currentIndex];
      
      // Fade in
      setTimeout(function() {
        image.style.opacity = 1;
      }, 50);
    }, 400);
  }
  
  // Automatic slideshow - rotate every 3 seconds
  setInterval(changeImage, 3000);
}

// Initialize slideshows for all products
for (const imageId in productImages) {
  createSlideshow(imageId);
}

// Hide all navigation buttons
const navButtons = document.querySelectorAll('.image-nav');
navButtons.forEach(nav => {
  nav.style.display = 'none';
});