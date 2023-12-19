// A $( document ).ready() block.
$( document ).ready(function() {

    // dark mode toggle
$('.toggle-container').click(function(){
    $('body').toggleClass('light-mode-active');
    $(this).toggleClass('light-mode-active');
  });

  
});