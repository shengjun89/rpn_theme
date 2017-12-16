window.onload = function() {
	var oUl = document.getElementById("menu");
	//				var aLi = oUl.getElementsByTagName("li");
	var aH4 = oUl.getElementsByTagName("h4");
	var aUl = oUl.getElementsByTagName("ul");
	var aLi = null;
	var arrLi = [];
	var oNav = document.getElementById("foo");
	var oMain = document.getElementById("main");

	for(var i = 0; i < aH4.length; i++) {
		aH4[i].index = i;
		aH4[i].onclick = function() {
//			aLi = aUl[i].getElementsByTagName("li");
//			for(var j = 0; j < aLi.length; j++) {
//				arrLi.push(aLi[j]);
//				
//			}
			if(this.className == "") {
				for(var i = 0; i < aH4.length; i++) {
					aUl[i].style.display = "none";
					aH4[i].className = "";
//					arrLi[i].classname = "";
				}
				aUl[this.index].style.display = "block";
				this.className = "current";
			} else {
				aUl[this.index].style.display = "none";
				this.className = "";
			}
		}

				/*for(var i = 0; i < arrLi.length; i++) {
					arrLi[i].onclick = function() {
						for(var i = 0; i < arrLi.length; i++) {
							arrLi[i].className = "";
						}
						this.className = "active";
					}
				}*/

	}

	//				汉堡按钮交互
	var oLi = document.getElementById("menuBtn");
	var oBtn = oLi.getElementsByTagName("button")[0];

	//	oNav.onclick = function(){
	////		alert("");
	//		this.style.left = "-80px";
	//	}

	oLi.onclick = function() {

		if(oBtn.className == "") {
			oNav.className = "open-nav-collapse";
			oMain.className = "open-main";
			oBtn.className = "active";

		} else {
			oNav.className = "nav-collapse";
			oMain.className = "main";
			oBtn.className = "";

		}
	}

}