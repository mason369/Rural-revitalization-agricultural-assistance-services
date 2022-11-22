$(function () {

	function saveDate(data) {
		//保存本地存储数据
		sessionStorage.setItem("imgCode", JSON.stringify(data));
	}
	function getDate() {
		//读取本地存储
		var data = sessionStorage.getItem("imgCode");
		if (data !== null) {
			//字符串转换对象
			return JSON.parse(data);
		} else {
			return [];
		}
	}
	function getImgICode() {
		//获取图片验证
		setTimeout(function () {
			axios
				.get(
					"https://www.mxnzp.com/api/verifycode/code?app_id=qhoalrrshsilrpkg&app_secret=Rm9qSElZZDJzaXZ5UHNuMGZtWThzZz09",
				)
				.then(function (response) {
					if (response.data.code !== 1 || response.data.code == 102) {
						return alert("验证码数据请求失败");
					}
					var imgCode = response.data.verifyCodeImgUrl;
					var htmlImgCode = template("imgcode", response.data);
					$("#img-yanzhengma").html(htmlImgCode);
					saveDate(response);
				});
		}, 250);
	}
	getImgICode();
	var imgCodeObj = getDate();
	var imgCode = imgCodeObj.data.data.verifyCode;
	// console.log(imgCode)
	$("#img-yanzhengma").click(function () {
		getImgICode();
	});
});
