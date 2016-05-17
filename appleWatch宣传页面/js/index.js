$(function(){
    $('#fullpage').fullpage({
    	verticalCentered:false,
    	anchors:["firstPage","secondPage","thirdPage","fourthPage"],

    	afterLoad: function(anchorsLink,index){
    		if(index == 1){
    			
    			move(".section1 h2")
    				.scale(1.5)
    				.end()
    			move(".section1 p")
    				.set("margin-top","3%")
    				.end()
    		}

    		if(index == 2){
    			move(".section2 h2")
    				.scale(0.7)
    				.end()
    		}

    		if(index == 3){
    			move(".section3 h2")
    				.set("margin-left","0")
    				.end()
    			move(".section3 p")
    				.translate(0,0)
    				.end()
    		}

    		if(index == 4){
    			move(".aimg1").rotate(360).end(function(){
    				move(".aimg2").rotate(360).end(function(){
    					move(".aimg3").rotate(360).end(function(){
    						move(".bimg1").scale(1.2).end(function(){
    							move(".bimg2").scale(1.2).end(function(){
    								move(".bimg3").scale(1.2).end()
    							})
    						})
    					})
    				})
    			})
    		}
    	},
    	onLeave: function(anchorslink,index){
    		if(index == 1){
    			move(".section1 h2")
    				.scale(1)
    				.end()
    			move(".section1 p")
    				.set("margin-top","800px")
    				.end()
    		}

    		if(index == 2){
    			move(".section2 h2")
    				.scale(1)
    				.end()
    		}

    		if(index == 3){
    			move(".section3 h2")
    				.set("margin-left","-100%")
    				.end()
    			move(".section3 p")
    				.translate(1000,0)
    				.end()
    			
    		}

    		if(index == 4){
    			move(".aimg1").rotate(-360).end()
    			move(".aimg2").rotate(-360).end()
    			move(".aimg3").rotate(-360).end()
    			move(".bimg1").scale(1).end()
    			move(".bimg2").scale(1).end()
    			move(".bimg3").scale(1).end()
    		}
    	}
    });
});