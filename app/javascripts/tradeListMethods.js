function getTradeInfos(shareIssuer, resultFunction, errorFunction) {
	PendingTradeList.deployed()
	.getTradeIds()
	.then(function (tradeIdsList) {
		// Result is in the form [ 123456, ... ]
		var tradeInfos = [];
		var length = tradeIdsList.length;
		var receivedInfos = [];
		for (var i = 0; i < length; i++) {
			var current = i;
			PendingTradeList.deployed()
			.getTrade(tradeIdsList[i])
			.then(function (shareIssuer, price, from, to) {
				receivedInfos.push(current);
				if (from == shareIssuer)
				{
					var orderInfo = {
						"id": tradeIdsList[current],
						"shareIssuer": shareIssuer,
						"price": price.c[0],
						"quantity": quantity.c[0],
						"from": from,
						"to": to
					};
					tradeInfos.push(orderInfo);
				}
				if (receivedInfos.length == length) {
					resultFunction.call(this, tradeInfos);
				}
			})
			.catch(errorFunction);
		}
		if (length == 0) {
			resultFunction.call(this, tradeInfos);
		}
	})
	.catch(errorFunction);
}