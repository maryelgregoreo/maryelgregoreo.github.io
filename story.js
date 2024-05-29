window.onload = function() {
    var scrollContainer = document.querySelector('.image_scroller');
    var scrollSpeed = 2; // Adjust the scroll speed as needed
    var scrollInterval; // Define scrollInterval variable outside the function

    // Function to scroll images continuously
    function scrollImages() {
        // Check if scrolled to the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            // Instantly scroll back to the beginning
            scrollContainer.scrollLeft = 0;
        } else {
            // Otherwise, scroll normally
            scrollContainer.scrollLeft += 1; // Adjust scroll speed if needed
        }
    }

    // Start the scrolling interval initially
    scrollInterval = setInterval(scrollImages, scrollSpeed);

    // Resume scrolling on mouse leave
    scrollContainer.addEventListener('mouseleave', function() {
        // Clear the existing interval
        clearInterval(scrollInterval);
        // Restart the scrolling interval
        scrollInterval = setInterval(scrollImages, scrollSpeed);
    });
};
