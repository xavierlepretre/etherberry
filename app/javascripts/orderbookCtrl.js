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
