//新闻列表
$(function () {
	$(".page1").css({ "background-color": "#434343", color: "#fff" });
	function getNewsList() {
		//刷新新闻列表
		axios({
			method: "get", //请求方式
			url: "https://www.mxnzp.com/api/news/list", //请求地址,
			params: {
				//url参数
				typeId: 511,
				page: 1,
				app_id: "qhoalrrshsilrpkg",
				app_secret: "Rm9qSElZZDJzaXZ5UHNuMGZtWThzZz09",
			},
			// // headers: {//头信息
			// // },
			// data: {
			// 	//请求体参数
			// },
		}).then(function (res) {
			if (res.data.code !== 1 || res.code == 102) {
				return alert("新闻列表数据请求失败");
			}
			for (var i = 0; i < 8; i++) {
				if (res.data.data.length > 4) {
					//删除多余值
					res.data.data.shift();
				}
			}
			// console.log(res.data.data.length);
			// console.log(res.data.data);
			for (var length = 0; length < 4; length++) {
				if (res.data.data[length].imgList === null) {
					//图片链接为空执行
					for (var i = 0; i < 4; i++) {
						if (res.data.data[i].imgList === null) {
							res.data.data[i].imgList = ["../img/zjsp/云南雪莲果.jpg"]; //添加图片路径
							// console.log(res.data.data[i].imgList[i]);
						}
					}
				}
				// console.log(res.data.data[length].imgList[0]);
			}
			// console.log(res)
			// console.log(res.data)
			var htmlList = template("tpl-news2", res.data);
			$("#tpl-news1").html(htmlList);
		});
	} //切换新闻列表的函数
	getNewsList();
	$(".up-dw-box a").click(function () {//分页按钮
		$(this).css({ "background-color": "#434343", color: "#fff" });
		// 3. 其余的兄弟去掉背景颜色 隐式迭代
		$(this).siblings("a").css({ background: "", color: "#434343" });
	});
	$(".up-page,.down-page").click(function () {
		getNewsList();
	});
});
