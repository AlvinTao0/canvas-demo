// banner
var banner = document.querySelector(".banner")
var bannerBox = document.querySelector(".banner-box")
var slides = bannerBox.getElementsByTagName("li")
var bannerLeft = document.querySelector(".banner-left")
var btn = document.querySelector(".banner-btn")
var btns = btn.getElementsByTagName("li")

var bannerW = banner.offsetWidth
var page = 1 ;

// 右边箭头点击轮播
bannerLeft.onclick=function () {
	// 先判断是否该重置位置
	if(bannerBox.offsetLeft<=-2*bannerW ){
		bannerBox.style.left = 0;	
	}
	// 按钮激活
	for (var i = 0; i < btns.length; i++) {
		btns[i].className = ""
	}
	if(page == 1){
		btns[1].className = "btn-active"
		page = 2
	}else{
		btns[0].className = "btn-active"
		page = 1
	}

	// 运动
	var t = 0
	var b = bannerBox.offsetLeft
	var c = -bannerW
	var d = 20 
	function  run() {
		bannerBox.style.left = Tween.Cubic.easeOut(t,b,c,d)+"px"
		if(t<d){t++;setTimeout(run,30)}
	}
	run()	
}

// 点击每个图片改变src地址
var arrImg=["images/手淘万能动态.gif","images/当天购物就送宝箱动态.gif","images/心愿宝箱动态.gif","images/满就送宝箱动态.gif","images/登陆就送宝箱动态.gif","images/当天购物就送宝箱动态.gif","images/手淘万能动态.gif","images/当天购物就送宝箱动态.gif","images/心愿宝箱动态.gif"]

for (var i = 0; i < slides.length; i++) {
	slides[i].index = i
	slides[i].onclick=function(){
		if(this.index<3){
			var imgB = slides[this.index+6].getElementsByTagName("img")[0]
			imgB.src = arrImg[this.index+6]
		}
		if(this.index>5){
			var imgB = slides[this.index-6].getElementsByTagName("img")[0]
			imgB.src = arrImg[this.index-6]
		}
		var img = this.getElementsByTagName("img")[0]
		img.src = arrImg[this.index]
	}
}