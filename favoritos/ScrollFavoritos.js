document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("back-to-top-favoritos");

    window.onscroll = function() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 800) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    };

    button.addEventListener("click", function() {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 100); 
    });
});
