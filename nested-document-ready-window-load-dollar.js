(function($) { // fixes: $ not found
  $(document).ready(function() { // waits till all page code is received
    $(window).load(function() { // waits till all page is loaded
      // Use $() inside of this function
    });
  });
})(jQuery);
