// image scroller function
window.onload = function() {
    var scrollContainer = document.querySelector('.image_scroller');

    // controls speed 
    var scrollSpeed = 2;
    // the interval of the scrolling 
    var scrollInterval; 

    // function to scroll images continuously
    function scrollImages() {
        // ensures that the image are scrolling to the left
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            // scrolls back to the left after the last image
            scrollContainer.scrollLeft = 0;
        } else {
            // ensures that the scrolling is normal
            scrollContainer.scrollLeft += 1; 
        }
    }

    // start the scrolling 
    scrollInterval = setInterval(scrollImages, scrollSpeed);

    // resumes scrolling on mouse leave
    scrollContainer.addEventListener('mouseleave', function() {
        // clears the existing interval
        clearInterval(scrollInterval);
        // restarts the scrolling interval
        scrollInterval = setInterval(scrollImages, scrollSpeed);
    });
};
