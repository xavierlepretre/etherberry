function getShareHolderInfosOfBase() {
	getShareHolderInfos(
		ShareIssuer.deployed(),
		function (result) {
			console.log(result);
		},
		function (e) {
			console.log(e);
		})
}

function getShareHolderInfos(shareIssuer, resultFunction, errorFunction) {
	shareIssuer
	.getShareholders()
	.then(function (holderList) {
		// Result is in the form [ "0x987543534...", ... ]
		var shareHolderInfos = [];
		var length = holderList.length;
		var receivedInfos = [];
		for (var i = 0; i < length; i++) {
			var current = i;
			shareIssuer
			.getShareholding(holderList[i])
			.then(function (count) {
				receivedInfos.push(current);
				shareHolderInfos.push({
					"address": holderList[current],
					"count": count.c[0]
				});
				if (receivedInfos.length == length) {
					resultFunction.call(this, shareHolderInfos);
				}
			})
			.catch(errorFunction);
		}
	})
	.catch(errorFunction);
}