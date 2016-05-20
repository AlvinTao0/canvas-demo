$(function(){
	var slides = $(".page1-slides li")
	var btns = $(".page1-tabs li")
	var timer=null;
	var slideNum=0;
	timer=setInterval(function(){
		slideNum++
		if(slideNum>=slides.length){
			slideNum=0
		}
		bannerInit()
		btns[slideNum].className = "active-tab"
		slides[slideNum].className = "avtive-slide"
	},2000)

	function bannerInit(){
		for (var i = 0; i < slides.length; i++) {
			slides[i].className = ""
			btns[i].className = ""
		}
	}

	for (var i = 0; i < btns.length; i++) {
		btns[i].index = i
		btns[i].onclick = function(){
			clearInterval(timer)
			slideNum = this.index
			bannerInit()
			btns[slideNum].className = "active-tab"
			slides[slideNum].className = "avtive-slide"

			timer=setInterval(function(){
				slideNum++
				if(slideNum>=slides.length){
					slideNum=0
				}
				bannerInit()
				btns[slideNum].className = "active-tab"
				slides[slideNum].className = "avtive-slide"
			},2000)
		}
	}
})