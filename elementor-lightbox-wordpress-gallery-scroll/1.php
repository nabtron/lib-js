<?php
/**
 * @package Hello_Dolly
 * @version 0.1
 */
/*
Plugin Name: WP Custom Gallery Scroll
Plugin URI: http://nabtron.com
Description: custom code for adding scroll on arrow click for wordpress gallery.
Author: Nabtron
Version: 0.1
Author URI: http://nabtron.com/
*/

/* Describe what the code snippet does so you can remember later on */
add_action('wp_footer', 'nabtron_wp_custom_gallery_scroll', 9999);
function nabtron_wp_custom_gallery_scroll(){
?>

<script>

jQuery(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        nabtron_gallery_scroll('left');
        break;

        case 38: // up
        break;

        case 39: // right
        nabtron_gallery_scroll('right');
        break;

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function nabtron_gallery_scroll(direction){
    //alert(direction);
  var currentimage = jQuery("#elementor-lightbox").find(".elementor-lightbox-item").find("img");
  var currentimagesrc = currentimage.attr('src');

  var imglist = jQuery( "div[data-id='0f42646']" ).find("a").map(function () {
    return jQuery(this).attr('href');
  }).get();
  // to remove or not to remove .get() ???
  
  //console.log(imglist);
  //console.log(currentimagesrc);

  var currentimageposition = jQuery.inArray( currentimagesrc, imglist );
  var nextimageposition = currentimageposition + 1;
  var previousimageposition = currentimageposition - 1;
  
  var newimagesrc = "";
  
  switch(direction) {
    case 'left': // left
    newimagesrc = imglist[previousimageposition];
    break;

    case 'right': // right
    newimagesrc = imglist[nextimageposition];
    break;

    default: return; // exit this handler for other
  }
  
  currentimage.attr('src', newimagesrc);

  //console.log(imglist[previousimageposition]);
  //console.log(imglist[currentimageposition]);
  //console.log(imglist[nextimageposition]);

}

</script>

<?php
};
