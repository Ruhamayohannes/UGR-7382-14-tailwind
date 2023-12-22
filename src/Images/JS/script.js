document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var navigation = document.querySelector('.site-navigation');
    var navLinks = document.querySelectorAll('.site-navigation a');

    
    hamburger.addEventListener('click', function() {
        navigation.classList.toggle('open');
    });

    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navigation.classList.remove('open');
        });
    });
});
