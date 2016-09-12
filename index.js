function changeImg(){

	var one = document.getElementById("small-img");
	var two = document.getElementById("small-img2");
	var three = document.getElementById("small-img3");

	one.onmouseover=function(){
		this.style.backgroundPositionX = '-32px';
	}
	two.onmouseover=function(){
		this.style.backgroundPositionX = '-32px';
	}
	three.onmouseover=function(){
		this.style.backgroundPositionX = '-32px';
	}

	one.onmouseout=function(){
		this.style.backgroundPositionX = '0';
	}
	two.onmouseout=function(){
		this.style.backgroundPositionX = '0';
	}
	three.onmouseout=function(){
		this.style.backgroundPositionX = '0';
	}

}
changeImg();



