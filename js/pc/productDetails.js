window.addEventListener("load", function () {
	var swiper = new Swiper(".mySwiper", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var swiper2 = new Swiper(".mySwiper2", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});
	//商品详情切换
	var details_head_box = document.querySelectorAll(".details-head-box-footer");
	details_head_box[0].className = "details-body-infor-class";
	for (var i = 0; i < details_head_box.length; i++) {
		details_head_box[i].onclick = function () {
			for (var j = 0; j < details_head_box.length; j++) {
				details_head_box[j].className = "details-head-box-footer";
			}
			this.className = "details-body-infor-class";
		};
	}
});
