$(document).ready(function(){	
	$('.jumbotron').css({ height: ($(window).height()) +'px' });
    $( '.waiting-pulse' ).click(function() {
        $( '.centered' ).fadeToggle();
    });
});
