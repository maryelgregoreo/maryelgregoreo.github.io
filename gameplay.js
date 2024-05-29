window.onload = function() {
    var buttons = document.querySelectorAll('.tab-button');
    var contents = document.querySelectorAll('.tab-content');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var tab = this.getAttribute('data-tab');

            // Remove active class from all buttons
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Add active class to the clicked button
            this.classList.add('active');

            // Hide all content
            contents.forEach(function(content) {
                content.classList.remove('active');
            });

            // Show the content corresponding to the clicked button
            document.querySelector('.tab-content[data-content="' + tab + '"]').classList.add('active');
        });
    });

    // Initialize the first tab as active
    buttons[0].classList.add('active');
    contents[0].classList.add('active');
};

