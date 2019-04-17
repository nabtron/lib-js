        // looks for the parameter in the url and returns if found
        
        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };
        console.log(getUrlParameter('technology'));
        
        // finds your current url
        var old_location = window.location.href;
        
        // checks if the url has question mark or not, to add the next parameter
        var questionmark_or_and = ((old_location.indexOf('?') == -1) ? '?' : '&');
