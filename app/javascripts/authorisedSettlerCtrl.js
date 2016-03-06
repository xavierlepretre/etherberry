 app.controller('authorizedSettlerCtrl', [ '$scope', 'shareHolderService', function($scope , shareHolderService) {

    $scope.buyer = web3.eth.coinbase;
 
    $scope.settlerAddress = "";
    
    shareHolderService.applyCallback = function(f) {
        return function(count) { $scope.$apply( function() {
             f(count);
       } ) } ;
    };

    $scope.getShareIssuers = function() {
         return  shareHolderService.shareIssuers;
    };

    $scope.transferShares = function(shareIssuer, seller, buyer, count) {
        console.log(shareIssuer.instance, seller.address, buyer, count);
        shareIssuer.instance.transferShares(
            seller.address, 
            buyer, 
            parseInt(count, 10),
            {from: web3.eth.coinbase})
                .then(function(result) { 
                    console.log(result); 
                })
                .catch(function (e) {
                    console.error(e);
                });
    };

} ]); 
