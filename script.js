
$(document).ready(function() {
   
var one = "https://s3.us-west-1.amazonaws.com/modernwanderlust/Home/pano_half_dome_bridge_small.jpeg";
var two = "https://s3.us-west-1.amazonaws.com/modernwanderlust/Home/pano_yampa_rafting_small.jpeg";
var three = "https://s3.us-west-1.amazonaws.com/modernwanderlust/Home/pano_emerald_bay_small.jpeg";
/*  */
var four = "https://s3.us-west-1.amazonaws.com/modernwanderlust/Home/pano_motorcycle_tioga_small.jpeg";
var five = "https://s3.us-west-1.amazonaws.com/modernwanderlust/Home/pano_half_dome_bridge_small.jpeg";
var six = "https://s3.us-west-1.amazonaws.com/modernwanderlust/Home/pano_yampa_rafting_small.jpeg";
var seven = "https://s3.us-west-1.amazonaws.com/modernwanderlust/Home/pano_emerald_bay_small.jpeg";
var eight = "https://s3.us-west-1.amazonaws.com/modernwanderlust/Home/pano_motorcycle_tioga_small.jpeg";

var tab = [one, two, three, four, five, six, seven];
var i = 0;

	$('.arrow-right').on({
	    'click': function(){
	    		i = i + 1;
	    		if(i == tab.length) { i = 0; } 
	    		console.log(tab[i]);
	        		$('img').attr('src', tab[i]);	
	    }
	});
	$('.arrow-left').on({
	    'click': function(){
	    		i = i - 1;	
	    		if(i == -1) { i = tab.length - 1; } 
	        		$('img').attr('src', tab[i]); 	 		
		}
	});
	$('#1').on({
	    'click': function(){  	
	        		$('img').attr('src', tab[0]);   		
		}
	});
	$('#2').on({
	    'click': function(){  	
	        		$('img').attr('src', tab[1]);   		
		}
	});
	$('#3').on({
	    'click': function(){  	
	        		$('img').attr('src', tab[2]);   		
		}
	});
	$('#4').on({
	    'click': function(){  	
	        		$('img').attr('src', tab[3]);   		
		}
	});

	setInterval(
		function(){ 
			i = i + 1;
			$('img').attr('src', tab[i]);
			if(i == 3) { i = 0; } 
			}, 3000);


	/*
	$('span').index().on({
	    'click': function(){
	        $('img').attr('src', tab.index());
	    }
	});
	*/

});