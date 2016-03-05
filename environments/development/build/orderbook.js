

var app = angular.module('myApp', []);



 app.controller("orderbookCtrl", [ '$scope', '$location', '$http', function($scope , $location, $http) {

    $scope.orderbook = {};

    $http({
       method: 'GET',
       url: './orderbook.json',
//	headers: {
//   	'Content-Type': undefined
// 	},
//       data: { share: 'baguetteShop' }
    }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
         console.log(response);
         $scope.orderbook = response.data;
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    });
} ]); 
