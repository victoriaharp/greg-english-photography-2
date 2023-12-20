const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu')

function toggleBurger() {
  burgerButton.classList.toggle('active')
  burgerMenu.classList.toggle('active')
}

burgerButton.addEventListener('click', toggleBurger)

// A $( document ).ready() block.
$( document ).ready(function() {

    // dark mode toggle
$('.toggle-container').click(function(){
    $('body').toggleClass('light-mode-active');
    $(this).toggleClass('light-mode-active');
  });

  // hamburger button
  $('.hamburger-button').click(function(){
    $('.mobile-menu').slideToggle(100);
    $(this).toggleClass('active');
  });
});