

var accounts;
var account;
var balance;

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

  });
}


var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope) {
    $scope.names = [
      { "ShopName" : "Relox", "CurrentSettler" : "0x00", "Action" : "Button here" }];
});
