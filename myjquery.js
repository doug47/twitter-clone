$(function() {

	//javascript 

	$('#tweet-left').focus(function(e){
    	var app = $(this).text();
    	// alert("It works!")
    	$('#tweet-left').css({
				"height": "5em",
			});
    	$('.tweet-controls').css({
    			"visibility": "visible",
    		});

    	var supportOnInput = 'oninput' in document.createElement('input.tweet-compose');

     	$("input.tweet-compose[maxlength]").each(function() {
	    var $this = $(this);
	    var maxLength = parseInt($this.attr('maxlength'));
	    $this.attr('maxlength', null);
	    
	    var el = $(".char-count");
	    
	    $this.bind(supportOnInput ? 'input.tweet-compose' : 'keyup', function() {
	        var cc = $this.val().length;
	        
	        el.text(maxLength - cc);
	        
	        if(maxLength < cc) {
	            el.css('color', 'red');
	        } else {
	            el.css('color', 'grey');
	        }
	       

	    });

	});

	});

	

	
});