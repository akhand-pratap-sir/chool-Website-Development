/* /////////       notic section          //////////////// */

const noticeContainer = document.getElementById('noticeContainer');
const noticeContent = document.getElementById('noticeContent');

let isScrolling;
let isPaused = false; // Track whether the animation is paused

// Function to reset and start the animation
const resetAnimation = () => {
  noticeContent.classList.remove('paused');
  // Reset scroll position to the top for a seamless loop
  noticeContainer.scrollTop = 0;
};

// Stop animation while scrolling manually
noticeContainer.addEventListener('scroll', () => {
  if (!isPaused) {
    noticeContent.classList.add('paused');
    clearTimeout(isScrolling);
    isPaused = true; // Set the paused state

    // Reset and restart the animation after the user stops scrolling
    isScrolling = setTimeout(() => {
      resetAnimation(); // Call to reset animation
      isPaused = false; // Reset the paused state
    }, 1000); // 1 second delay after scroll stops before resetting
  }
});

// Pause animation on mouse hover
noticeContainer.addEventListener('mouseover', () => {
  noticeContent.classList.add('paused');
  isPaused = true; // Set the paused state
});

// Resume animation when mouse leaves
noticeContainer.addEventListener('mouseout', () => {
  noticeContent.classList.remove('paused');
  isPaused = false; // Reset the paused state
});

// Optional: If you are using CSS animations, ensure this class pauses the animation


/* /////////       notic section          //////////////// */







const sliderImages = document.querySelector('.slider-images');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const imageWidth = 848; // Width of each image in pixels
let currentIndex = 0;

// Function to show the next image
function showNextImage() {
    currentIndex++;
    if (currentIndex >= sliderImages.children.length) {
        currentIndex = 0; // Loop back to the first image
    }
    sliderImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Auto-scroll with a 2-second interval
let autoScroll = setInterval(showNextImage, 2000);

// Manual control: Left button
leftBtn.addEventListener('click', () => {
    clearInterval(autoScroll); // Stop auto-scroll
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = sliderImages.children.length - 1; // Loop back to the last image
    }
    sliderImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    autoScroll = setInterval(showNextImage, 2000); // Restart auto-scroll
});

// Manual control: Right button
rightBtn.addEventListener('click', () => {
    clearInterval(autoScroll); // Stop auto-scroll
    currentIndex++;
    if (currentIndex >= sliderImages.children.length) {
        currentIndex = 0; // Loop back to the first image
    }
    sliderImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    autoScroll = setInterval(showNextImage, 2000); // Restart auto-scroll
});