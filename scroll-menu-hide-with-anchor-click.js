	(function($){
		$(document).ready(function(){
			var is_menu_click = 0;
			$("#menu-floating-menu li a").on("click", function(){
				is_menu_click = 1;
				$(".floating_menu").delay("1000").fadeOut("slow", function(){
					is_menu_click = 0;
				});
			});
			$(window).scroll(function(e) {
				console.log(is_menu_click);
				if(is_menu_click == 0){
					$(".floating_menu").fadeIn();
				}else{
					$(".floating_menu").fadeOut();
				}
					
			});
		});
	})(jQuery);
