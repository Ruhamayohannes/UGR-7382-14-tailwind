document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.getElementById('menu-btn');
    var mobileNav = document.getElementById('mobile-nav');

    menuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('translate-x-0');
        mobileNav.classList.toggle('translate-x-full');
    });
});
module.exports = {
    purge: ['./src/**/*.{html,js}'], // Adjust as needed for your project files
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  