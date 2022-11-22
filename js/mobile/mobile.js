window.onload = function () {
	var advertise = document.querySelector(".header-banner-head");
		topbar = document.querySelector(".topbar");
		zhuye = document.querySelector(".zhuye");
		about = document.querySelector(".guanyuwomen");
		price_buy = document.querySelector(".price-buy-box");
		zhunong = document.querySelector(".zn-banner");
		real_time = document.querySelector(".real-time");
		shop_car = document.querySelector(".shop-car-infor");
		footer = document.querySelector(".footer-more");
		topbar_ele = document.querySelectorAll(".topbar-footer p");
		more_top = document.querySelectorAll(".more-top ul li");
		more_top_xhx = document.querySelector(".van-tabs__line");
		topbar_head = document.querySelector(".topabr");
		ele = [zhuye, price_buy, zhunong, real_time, about];
		price_buy.style.display = "none";
		topbar_ele[0].style.borderBottom = ".15rem solid #1d99e3";
	// 排他算法
	for (var i = 0; i < topbar_ele.length; i++) {
		topbar_ele[i].onclick = function () {
			for (var i = 0; i < topbar_ele.length; i++) {
				topbar_ele[i].style.borderBottom = "";
			}
			this.style.borderBottom = ".15rem solid #1d99e3";
		};
	}
	for (var f = 0; f < more_top.length; f++) {
		more_top[f].onclick = function () {
			for (var f = 0; f < more_top.length; f++) {
				more_top[f].className = "";
			}
			this.className = "activ";
		};
	}
	for (var i = 0; i < 5; i++) {
		ele[i].style.paddingTop = "7.5rem";
	}
	topbar_ele[0].addEventListener("click", () => {
		ele[0].style.display = "block";
		ele[1].style.display = "none";
		ele[2].style.display = "none";
		ele[3].style.display = "none";
		ele[4].style.display = "none";
		footer_bar[1].style.color = "";
		footer_bar[0].style.color = "#1d99e3";
	});
	topbar_ele[1].addEventListener("click", () => {
		ele[0].style.display = "none";
		ele[1].style.display = "block";
		ele[2].style.display = "none";
		ele[3].style.display = "none";
		ele[4].style.display = "none";
		for (var i = 0; i < 5; i++) {
			footer_bar[i].style.color = "";
		}
	});
	topbar_ele[3].addEventListener("click", () => {
		ele[0].style.display = "none";
		ele[1].style.display = "none";
		ele[2].style.display = "block";
		ele[3].style.display = "none";
		ele[4].style.display = "none";
		shop_car.style.display = "none";
		for (var i = 0; i < 5; i++) {
			footer_bar[i].style.color = "";
		}
	});
	topbar_ele[4].addEventListener("click", () => {
		ele[0].style.display = "none";
		ele[1].style.display = "none";
		ele[2].style.display = "none";
		ele[3].style.display = "block";
		ele[4].style.display = "none";
		shop_car.style.display = "none";
		for (var i = 0; i < 5; i++) {
			footer_bar[i].style.color = "";
		}
	});
	topbar_ele[5].addEventListener("click", () => {
		ele[0].style.display = "none";
		ele[1].style.display = "none";
		ele[2].style.display = "none";
		ele[3].style.display = "none";
		ele[4].style.display = "block";
		shop_car.style.display = "none";
		for (var i = 0; i < 5; i++) {
			footer_bar[i].style.color = "";
		}
	});
	// 关闭广告后
	var ad_btn = document.querySelector(".closed-btn-1");
	var top_banner_head = document.querySelector(".top-bar-head");
	shop_car.style.cssText = "padding-top: 7.5rem";
	ad_btn.addEventListener("click", () => {
		advertise.style.display = "none";
		ele[0].style.cssText = "padding-top: 5.25rem";
		ele[1].style.cssText = "padding-top: 5.25rem";
		ele[2].style.cssText = "padding-top: 5.25rem";
		ele[3].style.cssText = "padding-top: 5.25rem";
		shop_car.style.cssText = "padding-top: 5.25rem";
		topbar.style.cssText = "top: 0";
		for (var i = 0; i < topbar_ele.length; i++) {
			topbar_ele[i].style.borderBottom = "";
		}
		for (var i = 0; i < footer_bar.length; i++) {
			footer_bar[i].style.color = "";
		}
		footer_bar[0].style.color = "#1d99e3";
		topbar_ele[0].style.borderBottom = ".15rem solid #1d99e3";
		ele[1].style.display = "none";
	});

	var footer_bar = document.querySelectorAll(".footer-banner-header a");
	footer_bar[0].style.color = "#1d99e3";
	for (var i = 0; i < footer_bar.length; i++) {
		footer_bar[i].onclick = function () {
			for (var i = 0; i < footer_bar.length; i++) {
				footer_bar[i].style.color = "";
			}
			this.style.color = "#1d99e3";
		};
	}
	//购物车点击后
	footer_bar[1].addEventListener("click", () => {
		shop_car.style.display = "block";
		zhuye.style.display = "none";
		for (var i = 0; i < 6; i++) {
			topbar_ele[i].style.borderBottom = "";
		}
		for (var i = 0; i < ele.length; i++) {
			ele[i].style.display = "none";
		}
	});
	//主页点击后
	footer_bar[0].addEventListener("click", () => {
		shop_car.style.display = "none";
		zhuye.style.display = "block";
		footer_bar[1].style.color = "";
		for (var i = 0; i < 6; i++) {
			topbar_ele[i].style.borderBottom = "";
		}
		topbar_ele[0].style.borderBottom = ".15rem solid #1d99e3";
	});

	var swiper = new Swiper(".mySwiper", {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	// 秒杀
	var hours = document.querySelector(".j_sk_h");
	var min = document.querySelector(".j_sk_m");
	var second = document.querySelector(".j_sk_s");
	var date = new Date();
	var mon = date.getMonth() + 1;
	var day = date.getDate();
	var dateStr = "2022-" + mon + "-" + day + " " + "21:00:00";
	// var now = +new Date("2022-10-20 21:00:00");
	console.log(dateStr);
	var now = +new Date(dateStr);
	getDaojishi();
	setInterval(getDaojishi, 1000);
	function getDaojishi(time) {
		var date = +new Date(); //返回当前时间总毫秒数
		var times = (now - date) / 1000; //剩余时间总秒数
		var t = parseInt(times / 60 / 60 / 24); //天
		t = t < 10 ? "0" + t : t;
		var h = parseInt((times / 60 / 60) % 24); //小时
		h = h < 10 ? "0" + h : h;
		hours.innerHTML = h;
		var m = parseInt((times / 60) % 60); //分钟
		m = m < 10 ? "0" + m : m;
		min.innerHTML = m;
		var s = parseInt(times % 60); //秒
		s = s < 10 ? "0" + s : s;
		second.innerHTML = s;
	}
};
