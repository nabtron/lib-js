// works with jquery 3.3.1
/* 
        add this in html:
        <div class="progress-container hide">
            <div class="progress-bar" id="myBar"></div>
        </div>
        
        add this in css (you can hide the progress bar by using scroll check and changing class of the bar using .hide custom class with property: display: none):
        
        .progress-container {
            width: 100%;
            height: 5px;
            background: #ccc;
            display: block;
        }

        .progress-bar {
            height: 5px;
            background: #006cbb;
            width: 0%;
        }
        

*/

$(document).ready(function() {
    $(window).on("scroll", function() {
        // code for the progress bar on top
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    });
});
