document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("back-to-top-scroll");
    var icon = button.querySelector("i"); 
    var footer = document.querySelector("footer"); 

    window.onscroll = function() {
        var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
        var footerPosition = footer.offsetTop;

        if (scrollPosition > 0 || scrollPosition > 650) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }

    
        if (scrollPosition + window.innerHeight >= footerPosition) {
            icon.style.color = "white"; 
        } else {
            icon.style.color = "#2F6A74"; 
        }
    };

    button.addEventListener("click", function() {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 100); 
    });
});