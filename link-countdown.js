// changes the link to a timer for specific time period in "timer_output_initial" variable
// uses jQuery
// link to be like:
// <a href="javascript:void(1);" id="timer_link">Request code again</a>

    var display_timer_interval;
    var timer_output_initial = 5
    var timer_output = timer_output_initial;
    var initial_text = "";
    $("#timer_link").on("click",function(){
      var clicked_element = $(this);
      initial_text = clicked_element.html();
      display_timer_interval = setInterval(function(){
        display_time(clicked_element);
      }, 1000);
    });
    
    function display_time(element){
        timer_output = timer_output-1;
        if(timer_output === 0) {
          clearInterval(display_timer_interval);
          timer_output = timer_output_initial;
          element.html(initial_text);
        }else{
          $(element).html(timer_output);
        }
    }
