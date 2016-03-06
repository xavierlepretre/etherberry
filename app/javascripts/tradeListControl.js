 app.controller("tradeListControl", [ '$scope', '$location', '$http', function($scope , $location, $http) {

    PendingTradeList
        .deployed()
        .OnTradeRegistered({})
        .watch(function(error, result) {
            console.log("OnTradeRegistered:");  
            if (error) {
                console.log(error);
            }
            console.log(result);
        });

    PendingTradeList
        .deployed()
        .OnTradeRemoved({})
        .watch(function(error, result) {
            console.log("OnTradeRemoved:");  
            if (error) {
                console.log(error);
            }
            console.log(result);
        }); 	

} ]); 
