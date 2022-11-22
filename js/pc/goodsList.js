//新闻列表
$(function () {
	function getGoodsList(number) {
		//刷新新闻列表
		axios({
			method: "get", //请求方式
			url: "https://api-hmugo-web.itheima.net/api/public/v1/goods/search", //请求地址,
			params: {
				//url参数
				query: "特产", //关键字
				pagenum: number++, //页码
				pagesize: 10, //单页内容
			},
			// headers: {//头信息
			// },
			data: {
				//请求体参数
			},
		}).then(function (res) {
			function getGoodsDate(a) {
				//计算商品上架日期
				var date = new Date(a * 1000); // 参数需要毫秒数，所以这里将秒数乘于 1000
				Y = date.getFullYear() + "-";
				M =
					(date.getMonth() + 1 < 10
						? "0" + (date.getMonth() + 1)
						: date.getMonth() + 1) + "-";
				D = date.getDate() + " ";
				h = date.getHours() + ":";
				m = date.getMinutes() + ":";
				s = date.getSeconds();
				return (a = Y + M + D + h + m + s);
			}

			// getGoodsDate(res.data.message.goods)
			// console.log(res);
			// console.log(res.data);
			// console.log(res.data.message);
			// console.log(res.data.message.goods);
			for (var length = 0; length < 10; length++) {
				//如果图片为空换其他图片替补
				if (res.data.message.goods[length].goods_small_logo === "") {
					//图片链接为空执行
					for (var i = 0; i < 10; i++) {
						if (res.data.message.goods[length].goods_small_logo === "") {
							res.data.message.goods[length].goods_small_logo =
								"../img/zjsp/云南雪莲果.jpg"; //添加图片路径
							// console.log(res.data.data[i].imgList[i]);
						}
					}
				}
				// console.log(res.data.data[length].imgList[0]);
			}
			for (let i = 0; i < 10; i++) {
				//时间戳转换
				res.data.message.goods[i].upd_time = getGoodsDate(
					res.data.message.goods[i].upd_time,
				);
				// console.log(res.data.message.goods[i].upd_time);
			}
			// console.log(res.data.message.goods)
			var htmlGoodsList = template("tpl-goodslist", res.data.message);
			$("#right-img-mather-box").html(htmlGoodsList);
		});
	}
	getGoodsList();
	let number = 1; //声明默认页码

	$(".in-in").val("1"); //页面内容框默认页码

	function btn_color(number) {
		//按钮颜色
		$(".up-" + number).css({ "background-color": "#1d99e3", color: "#fff" });
		$(".up-" + number)
			.siblings()
			.css({ background: "", color: "#434343", color: "626262" });
	}
	btn_color(1);
	$(".up-btn").click(function () {
		//分页按钮
		$(this).css({ "background-color": "#1d99e3", color: "#fff" });
		// 3. 其余的兄弟去掉背景颜色 隐式迭代
		$(this)
			.siblings()
			.css({ background: "", color: "#434343", color: "626262" });
		number = $(this).text();//接收自带number值
		getGoodsList(number);
		$(".in-in").val(number);
	});

	$(".down").click(function () {
		//下一页
		number++;
		$(".in-in").val(number); //输入框页码
		// console.log(number);
		getGoodsList(number); //请求页码
		btn_color(number); //分页按钮页码
	});
	$(".up").click(function () {
		//上一页
		number--;
		if (number < 0) {
			number = 0;
		}
		// console.log(number);
		$(".in-in").val(number); //输入框页码
		getGoodsList(number); //请求页码
		btn_color(number); //分页按钮页码
	});
	$(".up-conp").click(function () {
		//自定义页码
		number = $(".in-in").val();
		if (number >= 8 || number <= 1) {//大于或小于页码隐藏
			$(".up-btn").css({ "background-color": "" });
		}
		btn_color(number);
		getGoodsList(number);
	});
});
