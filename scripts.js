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

    // magnific popup
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
      }
    });
  });
