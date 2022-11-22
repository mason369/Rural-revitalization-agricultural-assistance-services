$(function () {
	// 滚动动画
	var speed = 20; //速度数值越大速度越慢
		colee_right2 = document.getElementById("colee_right2");
		colee_right1 = document.getElementById("colee_right1");
		colee_right = document.getElementById("colee_right");
	colee_right2.innerHTML = colee_right1.innerHTML;
	var fx = 0;
		MyMar4;

	function Marquee() {
		if (fx == 0) {
			Marquee3();
		} else {
			Marquee4();
		}
	}

	function Marquee3() {
		if (colee_right2.offsetWidth - colee_right.scrollLeft <= 0)
			//offsetWidth 是对象的可见宽度
			colee_right.scrollLeft -= colee_right1.offsetWidth;
		//scrollWidth 是对象的实际内容的宽，不包边线宽度
		else {
			colee_right.scrollLeft++;
		}
	}

	function Marquee4() {
		if (colee_right.scrollLeft >= 0) colee_right.scrollLeft--;
	}

	var MyMar4 = setInterval(Marquee, speed);
	colee_right.onmouseover = function () {
		clearInterval(MyMar4);
	};
	colee_right.onmouseout = function () {
		MyMar4 = setInterval(Marquee, speed);
	};

	// 动画函数
	function animate(obj, target, callback) {
		// console.log(callback);  callback = function() {}  调用的时候 callback()

		// 先清除以前的定时器，只保留当前的一个定时器执行
		clearInterval(obj.timer);
		obj.timer = setInterval(function () {
			// 步长值写到定时器的里面
			// 把我们步长值改为整数 不要出现小数的问题
			// var step = Math.ceil((target - window.pageYOffset) / 10);
			var step = (target - window.pageYOffset) / 10;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			if (window.pageYOffset == target) {
				// 停止动画 本质是停止定时器
				clearInterval(obj.timer);
				// 回调函数写到定时器结束里面
				// if (callback) {
				//     // 调用函数
				//     callback();
				// }
				callback && callback();
			}
			// 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
			// obj.style.left = window.pageYOffset + step + 'px';
			window.scroll(0, window.pageYOffset + step);
		}, 15);
	}

	// 返回顶部
	var reback = document.querySelector(".shar-three");
	reback.addEventListener("click", function () {
		animate(window, 0);
	});

	// 关闭二维码
	// 1. 获取元素
	var btn = document.querySelector(".close-btn");
	// var box = document.querySelector(".box-qr");
	// 2.注册事件 程序处理
	btn.onclick = function () {
		btn.parentNode.style.display = "none";
	};

	//导航栏切换
	var wangzhanshouye = document.querySelector(".wangzhanshouye");
		aixinzhunong = document.querySelector(".aixinzhunong");
		guanyuwomen = document.querySelector(".guanyuwomen");
		caigoudating = document.querySelector(".caigoudating");
	caigoudating.style.display = "none";
	var topbar = document.querySelectorAll(".topbar li");
		index = document.querySelector("#index");
		caigou = document.querySelector("#caigou");
		aixin = document.querySelector("#aixin");
		guanyu = document.querySelector("#guanyu");
	//导航颜色切换
	topbar[0].style.backgroundColor = "#f3f3f3";
	topbar[0].childNodes[0].style.color = "rgb(134,191, 50";
	var search_body = document.querySelector(".search");
	// 排他算法
	for (var i = 0; i < topbar.length; i++) {
		topbar[i].onclick = function () {
			for (var i = 0; i < topbar.length; i++) {
				topbar[i].style.backgroundColor = "";
				topbar[i].childNodes[0].style.color = "";
			}

			this.style.backgroundColor = "#F3F3F3";
			this.childNodes[0].style.color = "rgb(134, 191, 50)";
		};
	}

	//页面切换
	var nongye = document.querySelector("#nongye");
	var zixun = document.querySelector(".zixun");
	index.onclick = function () {
		wangzhanshouye.style.display = "block";
		color_full.style.display = "none";
		aixinzhunong.style.display = "none";
		guanyuwomen.style.display = "none";
		caigoudating.style.display = "none";
		zixun.style.display = "none";
		community_box.style.display = "none";
		community_footer.style.display = "none";
		search_body.style.display = "block";
	};
	aixin.onclick = function () {
		community_box.style.display = "none";
		color_full.style.display = "none";
		community_footer.style.display = "none";
		aixinzhunong.style.display = "block";
		wangzhanshouye.style.display = "none";
		guanyuwomen.style.display = "none";
		zixun.style.display = "none";
		search_body.style.display = "block";
		caigoudating.style.display = "none";
	};
	guanyu.onclick = function () {
		community_box.style.display = "none";
		color_full.style.display = "none";
		community_footer.style.display = "none";
		guanyuwomen.style.display = "block";
		aixinzhunong.style.display = "none";
		wangzhanshouye.style.display = "none";
		caigoudating.style.display = "none";
		zixun.style.display = "none";
		search_body.style.display = "block";
	};
	caigou.onclick = function () {
		community_box.style.display = "none";
		color_full.style.display = "none";
		community_footer.style.display = "none";
		caigoudating.style.display = "block";
		// advert.style.display = "block";
		aixinzhunong.style.display = "none";
		guanyuwomen.style.display = "none";
		wangzhanshouye.style.display = "none";
		zixun.style.display = "none";
		search_body.style.display = "none";
	};
	nongye.onclick = function () {
		community_box.style.display = "none";
		color_full.style.display = "none";
		community_footer.style.display = "none";
		caigoudating.style.display = "none";
		aixinzhunong.style.display = "none";
		guanyuwomen.style.display = "none";
		wangzhanshouye.style.display = "none";
		zixun.style.display = "block";
		search_body.style.display = "block";
	};

	// 以下为轮播图js
	var banner = document.querySelector("#banner-1");
	var bannerImg = document.querySelectorAll(".img-list img");
	var bannerlist = document.querySelectorAll(".pointer a");
	var index = 0;
	//  (1.鼠标不在轮播图区域的时候 轮播图正常播放)
	var t = setInterval(function () {
		if (index == 2) {
			index = 0;
		} else {
			index++;
		}
		for (var n = 0; n <= 2; n++) {
			bannerImg[n].className = "";
		}
		bannerImg[index].className = "show";
		for (var n = 0; n <= 2; n++) {
			bannerlist[n].className = "";
		}
		bannerlist[index].className = "active";
	}, 2000);
	//  (2.鼠标移入轮播图区域 轮播图播放暂停)
	banner.addEventListener("mouseenter", function () {
		clearInterval(t);
	});
	//  (3.鼠标移出轮播图区域 轮播图恢复播放)
	banner.addEventListener("mouseleave", function () {
		t = setInterval(function () {
			if (index == 2) {
				index = 0;
			} else {
				index++;
			}
			for (var n = 0; n <= 2; n++) {
				bannerImg[n].className = "";
			}
			bannerImg[index].className = "show";
			for (var n = 0; n <= 2; n++) {
				bannerlist[n].className = "";
			}
			bannerlist[index].className = "active";
		}, 2000);
	});
	var bannerLeft = document.querySelector("#bannerLeft");
	var bannerRight = document.querySelector("#bannerRight");
	bannerLeft.addEventListener("click", function () {
		if (index == 0) {
			index = 2;
		} else {
			index--;
		}
		for (var n = 0; n <= 2; n++) {
			bannerImg[n].className = "";
		}
		bannerImg[index].className = "show";
		for (var n = 0; n <= 2; n++) {
			bannerlist[n].className = "";
		}
		bannerlist[index].className = "active";
	});
	bannerRight.addEventListener("click", function () {
		if (index == 2) {
			index = 0;
		} else {
			index++;
		}
		for (var n = 0; n <= 2; n++) {
			bannerImg[n].className = "";
		}
		bannerImg[index].className = "show";
		for (var n = 0; n <= 2; n++) {
			bannerlist[n].className = "";
		}
		bannerlist[index].className = "active";
	});
	// 鼠标移入左下方导航（小圆点）切换到对应的图片
	for (var n = 0; n <= 2; n++) {
		bannerlist[n].index = n;
		bannerlist[n].addEventListener("mouseenter", function () {
			for (var n = 0; n <= 2; n++) {
				bannerImg[n].className = "";
			}
			index = this.index;
			for (var n = 0; n <= 2; n++) {
				bannerlist[n].className = "";
			}
			bannerImg[index].className = "show";
			bannerlist[index].className = "active";
		});
	}
	// 登录显示
	var bar_black = document.querySelector(".bar-box-black");
		login = document.querySelector(".header-body-right");
		login_regster = document.querySelector(".login-regster-box");
		closed_login = document.querySelector("#closed-login");
		root_login = document.querySelector("#root-login");
		login_regster_btn = document.querySelector("#login-regster-btn");
		title = document.querySelector(".login-regster-head");
		login_body = document.querySelector(".login-regster");
	//拖拽
	// (1) 鼠标按下， 就获得鼠标在盒子内的坐标
	title.addEventListener("mousedown", function (e) {
		var x = e.pageX - login_body.offsetLeft;
		var y = e.pageY - login_body.offsetTop;
		// (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
		document.addEventListener("mousemove", move);

		function move(e) {
			login_body.style.left = e.pageX - x + "px";
			login_body.style.top = e.pageY - y + "px";
		}

		// (3) 鼠标弹起，就让鼠标移动事件移除
		document.addEventListener("mouseup", function () {
			document.removeEventListener("mousemove", move);
		});
	});

	login.addEventListener("click", function () {
		//点击后显示登录注册
		bar_black.style.display = "block";
		login_regster.style.display = "block";
	});
	closed_login.addEventListener("click", function () {
		//点击后隐藏登录注册
		login_regster.style.display = "none";
		bar_black.style.display = "none";
	});
	root_login.addEventListener("click", function () {
		login_regster_btn.style.display = "none";
		login_regster.style.display = "none";
		bar_black.style.display = "none";
		var login_parent = login_regster_btn.parentNode;
		login_parent.removeChild(login_regster_btn);
		var lili = document.createElement("a");
		login_parent.insertBefore(lili, login_parent.children[0]);
		login_parent.children[0].innerHTML = "您好，游客";
		login_parent.children[0].href = "#";
		login_parent.children[0].className = "hello-user";
		login_parent.className = "login-display";
	});

	// 搜索框焦点显示
	var search_btn = document.querySelector(".search-btn");
	var search = document.querySelector(".search-input");
	search.onfocus = function () {
		if (this.value === "请输入内容") {
			this.value = "";
		}
		search_btn.style.backgroundColor = "#1d99e3";
		this.style.borderColor = "#1d99e3";
		this.style.borderLeft = "6px solid #fff";
		this.style.borderRight = "6px solid #fff";
	};
	search.onblur = function () {
		if (this.value === "") {
			this.value = "请输入内容";
		}
		search_btn.style.backgroundColor = "#8dc742";
		this.style.borderColor = "#8dc742";
		this.style.borderLeft = "6px solid #fff";
		this.style.borderRight = "6px solid #fff";
	};
	// 点击后返回显示消失
	var return_top_btn = document.querySelector(".shar-to-three");
	document.addEventListener("scroll", function () {
		if (window.pageYOffset >= 200) {
			return_top_btn.style.display = "block";
		} else {
			return_top_btn.style.display = "none";
		}
	});

	// 滑动后固定导航栏
	var header_footer = document.querySelector(".header-footer");
	var header_box = document.querySelector(".header-box");

	document.addEventListener("scroll", function () {
		if (window.pageYOffset >= 95) {
			header_footer.style.position = "fixed";
			header_footer.style.top = "0";
			header_footer.style.zIndex = "9999999";
			header_box.style.height = "42px";
			header_footer.style.width = "100%";
		} else {
			header_box.style.height = "";
			header_footer.style.position = "";
			header_footer.style.top = "";
			header_footer.style.zIndex = "";
			header_footer.style.width = "";
		}
	});

	var search_caigou = document.querySelector(".search-caigou");
	search_caigou.onfocus = function () {
		if (this.value === "请输入内容") {
			this.value = "";
		}
		this.style.borderColor = "#8dc742";
		this.style.borderLeft = "6px solid #fff";
		this.style.borderRight = "6px solid #fff";
	};
	search_caigou.onblur = function () {
		if (this.value === "") {
			this.value = "请输入内容";
		}
		this.style.borderColor = "#1d99e3";
		this.style.borderLeft = "6px solid #fff";
		this.style.borderRight = "6px solid #fff";
	};
	//社区显示、隐藏
	var community_box = document.querySelector(".community");
		color_full = document.querySelector(".color-full");
		community_footer = document.querySelector(".community-footer");
		community = document.querySelector("#community");
	color_full.style.display = "none";
	community.addEventListener("click", function () {
		community_box.style.display = "block";
		community_footer.style.display = "block";
		aixinzhunong.style.display = "none";
		wangzhanshouye.style.display = "none";
		guanyuwomen.style.display = "none";
		zixun.style.display = "none";
		search_body.style.display = "none";
		caigoudating.style.display = "none";
		color_full.style.display = "block";
	});

	// 注册登录切换
	var user_login_box = document.querySelector(".user-login-box-1");
	var regster_box = document.querySelector(".user-regster-box-1");
	var login = document.querySelectorAll(".login-regster-body-head a");
	login[0].style.color = "#434343";
	for (var i = 0; i < login.length; i++) {
		login[i].onclick = function () {
			for (var i = 0; i < login.length; i++) {
				login[i].style.color = "#00965e";
			}
			this.style.color = "#434343";
		};
	}
	login[0].addEventListener("click", () => {
		user_login_box.style.display = "none";
		regster_box.style.display = "block";
	});
	login[2].addEventListener("click", () => {
		user_login_box.style.display = "block";
		regster_box.style.display = "none";
	});

	// 密码框眼睛
	var input_pwd = document.querySelector("#login-pwd-input");
	var eyes = document.querySelector(".input-user-login-box i");
	var switch_1 = 0;
	eyes.addEventListener("click", () => {
		if (switch_1 == 0) {
			input_pwd.type = "text";
			eyes.className = "fa fa-eye";
			switch_1 = 1;
		} else {
			eyes.className = "fa fa fa-eye-slash";
			input_pwd.type = "password";
			switch_1 = 0;
		}
	});
	// 账号密码登录
	var input_input = document.querySelectorAll(".input-user-login-box input");
		num_tips = document.querySelector(".num-tips");
		pwd_tips = document.querySelector(".pwd-tips");
		login_btn_inser = document.querySelector(".logining-btn");
	const ADMIN_PWD = "admin";
	const ADMIN_USER = "admin";
	for (var i = 0; i < input_input.length; i++) {
		input_input[i].onfocus = function () {
			pwd_tips.style.display = "none";
			num_tips.style.display = "none";
			$(".pwd-tips-2").hide();
			for (var i = 0; i < input_input.length; i++) {
				input_input[i].style.border = "";
			}
			this.style.border = "1px solid #00C97E";
		};
	}
	//声明变量供全局使用
	let imgcode_arr;
	let imgCode;
	$("#img-yanzhengma").click(function () {
		//点击验证码图片刷新本地存储
		setTimeout(function () {
			imgCode = sessionStorage.getItem("imgCode");
			imgcode_arr =
				imgCode[56] + imgCode[57] + imgCode[58] + imgCode[59] + imgCode[60];
			console.log(imgcode_arr);
		}, 1000);
	});
	setTimeout(function () {
		//第一次加载完毕后读取本地验证码
		imgCode = sessionStorage.getItem("imgCode");
		imgcode_arr =
			imgCode[56] + imgCode[57] + imgCode[58] + imgCode[59] + imgCode[60];
		console.log(imgcode_arr);
	}, 800);
	login_btn_inser.addEventListener("click", () => {
		if (input_input[0].value == "" && input_input[1].value == "") {
			//当值为空
			input_input[0].style.border = "1px solid red";
			num_tips.style.display = "block";
		} else if (input_input[1].value == "") {
			//当密码没输入
			input_input[1].style.border = "1px solid red";
			pwd_tips.style.display = "block";
		} else if (
			//当账号和密码错误
			input_input[1].value !== ADMIN_PWD &&
			input_input[0].value !== ADMIN_USER
		) {
			pwd_tips.style.display = "block";
			input_input[1].style.border = "1px solid red";
		} else if (
			//当验证码错误
			input_input[0].value == ADMIN_USER &&
			input_input[1].value == ADMIN_PWD &&
			input_input[2].value !== imgcode_arr
		) {
			$(".pwd-tips-2").show();
			$("#login-yanzhengma").css("border", "1px solid red");
		} else if (
			//当密码正确
			input_input[0].value == ADMIN_USER &&
			input_input[1].value == ADMIN_PWD &&
			input_input[2].value == imgcode_arr
		) {
			login_regster_btn.style.display = "none";
			login_regster.style.display = "none";
			bar_black.style.display = "none";
			var login_parent = login_regster_btn.parentNode;
			login_parent.removeChild(login_regster_btn);
			var lili = document.createElement("a");
			login_parent.insertBefore(lili, login_parent.children[0]);
			login_parent.children[0].innerHTML = "您好，admin";
			login_parent.children[0].href = "#";
			login_parent.children[0].className = "hello-user";
			login_parent.className = "login-display";
		}
	});

	//计时器
	var lis = document.querySelectorAll(".seckill_timer_box");
	countTime();
	//设置计时器，回调函数设置为封装好的计时函数
	window.setInterval(countTime, 1000);

	//封装计时函数
	function countTime() {
		var endTime = +new Date("2022-11-30 22:20"); //设置秒杀截至时间【手动赋值】
		var startTime = +new Date();
		var times = (endTime - startTime) / 1000;
		var hour = parseInt((times / 60 / 60) % 24);
		hour = hour < 10 ? hour : hour;
		var min = parseInt((times / 60) % 60);
		min = min < 10 ? min : min;
		var sec = parseInt(times % 60);
		sec = sec < 10 ? sec : sec;
		lis[0].innerHTML = hour;
		lis[1].innerHTML = min;
		lis[2].innerHTML = sec;
	}

	//热搜换一换
	var news_return = document.querySelector(".news-return");
		hot_lists = document.querySelectorAll(".item-new");
		flage = 2;
		fa_sync = document.querySelector(".fa-sync");

	function transtion(a, b) {
		var deg = a;
		//长度加上单位deg
		var d = deg + "deg";
		//拼接控制旋转的方法
		return (b.style.transform = "rotate(" + d + ")");
	}

	news_return.onclick = () => {
		//热搜换一换
		transtion(180, fa_sync);
		for (var i = 0; i < 32; i++) {
			//所有子元素隐藏
			hot_lists[i].style.display = "none";
		}
		if (hot_lists[1].style.display === "none" && flage === 1) {
			//将其他元素隐藏，自己显示
			for (var i = 0; i < 32; i++) {
				hot_lists[i].style.display = "none";
			}
			for (var j = 0; j < 10; j++) {
				hot_lists[j].style.display = "block";
			}
			flage = 2;

			transtion(180 * 2, fa_sync);
		}
		if (hot_lists[9].style.display === "none" && flage === 2) {
			//将其他元素隐藏，自己显示
			for (var i = 0; i < 32; i++) {
				hot_lists[i].style.display = "none";
			}
			for (var j = 10; j < 20; j++) {
				hot_lists[j].style.display = "block";
			}
			flage = 3;

			transtion(180 * 4, fa_sync);
		}

		if (hot_lists[19].style.display === "none" && flage === 3) {
			//将其他元素隐藏，自己显示
			for (var i = 0; i < 32; i++) {
				hot_lists[i].style.display = "none";
			}
			for (var j = 20; j < 30; j++) {
				hot_lists[j].style.display = "block";
			}
			flage = 4;

			transtion(180 * 6, fa_sync);
		}

		if (hot_lists[29].style.display === "none" && flage === 4) {
			//将其他元素隐藏，自己显示
			for (var i = 0; i < 32; i++) {
				hot_lists[i].style.display = "none";
			}
			for (var j = 30; j < 32; j++) {
				hot_lists[j].style.display = "block";
			}
			flage = 1;

			transtion(180 * 4, fa_sync);
		}
	};
	//swiper轮播
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

	//采购清单
	$("#title").on("keydown", function (event) {
		//获取回车
		if (event.keyCode === 13) {
			if ($(this).val() === "") {
				alert("请输入内容");
			} else {
				//先读取本地存储的数据
				var local = getDate();
				console.log(local);
				//新数组追加给local数组
				local.push({ title: $(this).val(), done: "false" });
				//local数组存储至本地存储
				// saveDate(local);
				//todolist本地存储渲染到页面
				saveDate(local);
				load();
				$(this).val("");
			}
		}
	});
	load();

	//读取本地存储数据方法
	function getDate() {
		var data = localStorage.getItem("todolist");
		if (data !== null) {
			//字符串转换对象
			return JSON.parse(data);
		} else {
			return [];
		}
	}

	//删除操作
	$("#todolist,#donelist").on("click", "a", function () {
		var data = getDate(); //获取本地存储
		var index = $(this).attr("id"); //通过id获取索引号
		data.splice(index, 1); //删除
		saveDate(data); //保存到本地存储
		load(); //重新渲染页面
	});

	//正在进行和已完成操作
	$("#todolist,#donelist").on("click", "input", function () {
		//获取本地存储的数据
		var data = getDate();
		//修改数据
		var index = $(this).siblings("a").attr("id");
		data[index].done = $(this).prop("checked");
		//保存到本地存储
		saveDate(data);
		//重新渲染页面
		load();
	});

	//保存本地存储数据
	function saveDate(data) {
		localStorage.setItem("todolist", JSON.stringify(data));
	}

	//渲染加载数据
	function load() {
		var data = getDate();
		// console.log(data);
		//调用前清空ol元素
		$("#todolist,#donelist").empty();

		var todoCount = 0; //正在进行个数
		var doneCount = 0; //已完成个数

		$.each(data, function (i, n) {
			//遍历整个数据
			if (n.done === true) {
				$("#donelist").prepend(
					"<li><input type='checkbox' checked='checked'><p>" +
						n.title +
						"</p><a href='javascript:;'id=" +
						i +
						"></a></li>",
				);
				doneCount++;
			} else {
				$("#todolist").prepend(
					"<li><input type='checkbox'><p>" +
						n.title +
						"</p><a href='javascript:;'id=" +
						i +
						"></a></li>",
				);
				todoCount++;
			}
		});
		$("#todocount").text(todoCount);
		$("#donecount").text(doneCount);
	}
});

//首页搜索关键词联想
var input = document.querySelector(".search-input");
	oUl = document.getElementById("ul");
	btn_secarh_index = document.querySelector(".search-btn");
input.onkeyup = function () {
	var value = this.value;
	var oScript = document.createElement("script");
	oScript.src =
		"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" +
		value +
		"&cb=aa";
	// 实时获取参数 value
	// cb=返回值的处理函数（aa）
	document.body.appendChild(oScript);
};

function aa(data) {
	oUl.style.display = "block";
	var list = data.s;
	var str = "";
	if (list.length > 0) {
		list.forEach(function (ele, index) {
			str +=
				'<li><a href ="https://www.baidu.com/s?wd=' +
				ele +
				'">' +
				ele +
				"</li>";
		});
		oUl.innerHTML = str;
	}

	var search_btn = document.querySelector(".search-btn");
		search = document.querySelector(".search-input");
	search.onblur = function () {
		if (this.value === "") {
			this.value = "请输入内容";
		}
		setTimeout(() => {
			oUl.style.display = "none";
		}, 100);
		search_btn.style.backgroundColor = "#8dc742";
		this.style.borderColor = "#8dc742";
		this.style.borderLeft = "6px solid #fff";
		this.style.borderRight = "6px solid #fff";
		input.value = "请输入内容";
	};
}

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("main"));

// 指定图表的配置项和数据
var option = {
	title: {
		text: "湖北省滞销监控",
	},
	tooltip: {},
	legend: {
		data: ["滞销量/万斤"],
	},
	xAxis: {
		data: ["十堰", "襄阳", "荆门", "黄石", "黄冈", "宜昌"],
	},
	yAxis: {},
	series: [
		{
			name: "滞销量/万斤",
			type: "bar",
			data: [5, 20, 36, 10, 10, 20],
		},
	],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

//动画数据
var myChart = echarts.init(document.getElementById("main-2"));
setTimeout(function () {
	option = {
		legend: {},
		tooltip: {
			trigger: "axis",
			showContent: false,
		},
		dataset: {
			source: [
				["product", "2012", "2013", "2014", "2015", "2016", "2017"],
				["河南省", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
				["湖北省", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
				["安徽省", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
				["重庆", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
			],
		},
		xAxis: { type: "category" },
		yAxis: { gridIndex: 0 },
		grid: { top: "55%" },
		series: [
			{
				type: "line",
				smooth: true,
				seriesLayoutBy: "row",
				emphasis: { focus: "series" },
			},
			{
				type: "line",
				smooth: true,
				seriesLayoutBy: "row",
				emphasis: { focus: "series" },
			},
			{
				type: "line",
				smooth: true,
				seriesLayoutBy: "row",
				emphasis: { focus: "series" },
			},
			{
				type: "line",
				smooth: true,
				seriesLayoutBy: "row",
				emphasis: { focus: "series" },
			},
			{
				type: "pie",
				id: "pie",
				radius: "30%",
				center: ["50%", "25%"],
				emphasis: {
					focus: "self",
				},
				label: {
					formatter: "{b}: {@2012} ({d}%)",
				},
				encode: {
					itemName: "product",
					value: "2012",
					tooltip: "2012",
				},
			},
		],
	};
	myChart.on("updateAxisPointer", function (event) {
		const xAxisInfo = event.axesInfo[0];
		if (xAxisInfo) {
			const dimension = xAxisInfo.value + 1;
			myChart.setOption({
				series: {
					id: "pie",
					label: {
						formatter: "{b}: {@[" + dimension + "]} ({d}%)",
					},
					encode: {
						value: dimension,
						tooltip: dimension,
					},
				},
			});
		}
	});
	myChart.setOption(option);
});

$(function () {
	// 鼠标经过某个小li 操作：
	$(".king li").mouseenter(function () {
		// 当前小li 宽度变为 224px， 同时里面的小图片淡出，大图片淡入
		$(this)
			.stop()
			.animate({
				width: 224,
			})
			.find(".small")
			.stop()
			.fadeOut()
			.siblings(".big")
			.stop()
			.fadeIn();
		// 其余兄弟小li宽度变为69px， 小图片淡入， 大图片淡出
		$(this)
			.siblings("li")
			.stop()
			.animate({
				width: 69,
			})
			.find(".small")
			.stop()
			.fadeIn()
			.siblings(".big")
			.stop()
			.fadeOut();
	});
});
// var user_sever =document.querySelector(".header-right").children[6]
$(".user-sever-box,.daohang-box").hover(function () {
	$(this).children(".user-sever,.wdzhc").stop().slideToggle();
});

