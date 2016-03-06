

var app = angular.module('myApp', []);



function getOrderInfos(shareIssuer, resultFunction, errorFunction) {
	OrderBook.deployed()
	.getOrderIds()
	.then(function (orderIdsList) {
		// Result is in the form [ 123456, ... ]
		var orderInfos = {
			"shareIssuer": shareIssuer, 
			"referenceprice" : "95.00",
			"buyList": [],
			"sellList": [],
			"timestamp" : "09:10:35"
		};
		var length = orderIdsList.length;
		var receivedInfos = [];
		for (var i = 0; i < length; i++) {
			var current = i;
			OrderBook.deployed()
			.getOrder(orderIdsList[i])
			.then(function (index, shareIssuer, price, quantity, isBuy, from) {
				receivedInfos.push(current);
				if (from == shareIssuer)
				{
					var orderInfo = {
						"id": orderIdsList[current],
						"index": index.c[0],
						"shareIssuer": shareIssuer,
						"price": price.c[0],
						"quantity": quantity.c[0],
						"isBuy": isBuy,
						"from": from
					};
					if (isBuy)
					{
						orderInfos.buyList.push(orderInfo);
					} else {
						orderInfos.sellList.push(orderInfo);
					}
				}
				if (receivedInfos.length == length) {
					resultFunction.call(this, orderInfos);
				}
			})
			.catch(errorFunction);
		}
		if (length == 0) {
			resultFunction.call(this, orderInfos);
		}
	})
	.catch(errorFunction);
}

 app.controller("orderbookCtrl", [ '$scope', '$location', '$http', function($scope , $location, $http) {

    $scope.orderbook = {};

    getOrderInfos(
        shareIssuers.baguetteShop.address,
        function(result) {
            console.info(result);
            $scope.orderbook = result;
        },
        function(e) {
            console.error(e);
        }
    );

    $scope.takeOrder = function(orderbook, order) {
        PendingTradeList
            .deployed()
            .registerTrade(
                orderbook.shareIssuer,
                order.price,
                order.quantity,
                order.isBuy ? web3.eth.coinbase : order.from,
                order.isBuy ? order.from : web3.eth.coinbase)
            .then(function (result) {
                console.info(result);
            })
            .catch(function (e) {
                console.error(e);
            });
    };

} ]); 
