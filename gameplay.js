// switchable tab function
window.onload = function() {

    // buttons
    var buttons = document.querySelectorAll('.tab-button');

    // contents
    var contents = document.querySelectorAll('.tab-content');

    // loops the event listener function
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var tab = this.getAttribute('data-tab');

            // remove active class from all buttons
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // add active class to the clicked button
            this.classList.add('active');

            // hides all content
            contents.forEach(function(content) {
                content.classList.remove('active');
            });

            // shows the clicked button tab
            document.querySelector('.tab-content[data-content="' + tab + '"]').classList.add('active');
        });
    });

    // Initialize the first tab as active
    buttons[0].classList.add('active');
    contents[0].classList.add('active');
};

