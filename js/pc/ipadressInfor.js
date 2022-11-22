$(function () {
	setTimeout(() => {
		getIp = () => {
			$.get(
				"https://www.mxnzp.com/api/ip/self?typeId=511&page=1&app_id=qhoalrrshsilrpkg&app_secret=Rm9qSElZZDJzaXZ5UHNuMGZtWThzZz09",
				function (res) {
					if (res.code !== 1 || res.code == 102) {
						return alert("数据请求失败");
					}
					var htmlIp = template("ipadress", res);
					$("#ipadrees-infor").html(htmlIp);
				},
			);
		};
		getIp();
	}, 1200);
});
