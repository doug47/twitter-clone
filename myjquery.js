$(function() {

//Below is to make the tweet button and 

	$('#tweet-left').focus(function(){
    	$('.tweet-controls').css({
    			"display": "block",
    		});
	});


	$('.tweet-compose').blur(function(){
    	$('.tweet-controls').css({
    			"display": "none",
    		});
	});

// Below is the code for char-count countdown and color change.

	$( "#tweet-left" ).keyup(function(){
		var total = 140;
		 	total = total - $('#tweet-left').val().length;

		 	$('.char-count').text(total);


		 	if(total < 10) 
		 		{
		           $('.char-count').css('color', 'red');
		        } 
		        else 
		        {
		           $('.char-count').css('color', 'grey');
		        }
       });


	$( "#tweet-left" ).keydown(function() {
		var ma = 140;
		 	total = total - $('#tweet-left').val().length;
		 	$('.char-count').text(total);

		 	if(total < 10) 
		 		{
		            $('.char-count').css('color', 'red');
		        } 
		        else 
		        {
		           $('.char-count').css('color', 'grey');
		        }
	});

//Below is code to color up the tweet button when it is ready to be colored.
	
	
});