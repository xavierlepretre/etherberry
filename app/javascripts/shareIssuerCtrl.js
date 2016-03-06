 app.controller('shareIssuerCtrl', [ '$scope', 'shareHolderService', function($scope , shareHolderService) {

    $scope.newAuthorisedSettler = web3.eth.coinbase;
 
    $scope.settlerAddress = "";
    
    shareHolderService.applyCallback = function(f) {
        return function(error, result) { $scope.$apply( function() {
             f(error, result);
       } ) } ;
    };

    $scope.getShareIssuers = function() {
         return  shareHolderService.shareIssuers;
    };

    $scope.updateAuthorisedSettler = function (shareIssuerWrapper, newAuthorisedSettler) {
        console.log("new Address " + newAuthorisedSettler);
        shareIssuerWrapper.instance.registerAuthorisedSettler(
            newAuthorisedSettler,
            {from: web3.eth.coinbase})
            .then(function (result) {
                console.log(result);
            })
            .catch(function (e) {
                console.error(e);
            });
    };

} ]); 
