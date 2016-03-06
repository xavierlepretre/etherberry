app.service('shareHolderService', [ function() {

 var service = this;

 this.applyCallback = function(f) { return f; };
 this.shareIssuers = [];

 this.tmpShareIssuers =[
   { name : "kaserFactory",  address : "", instance : undefined, 
     owner : { name : "Cheese Maker", address : "" },
     shareHolders : [],
     authorisedSettler: "" },
   { name : "relox",  address : "", instance : undefined,
     owner : { name : "Clock Maker", address : "" },
     shareHolders : [],
     authorisedSettler: "" },
   { name : "baguetteShop", address : "", instance : undefined,
     owner : { name : "Cheese Maker", address : "" },
     shareHolders : [],
     authorisedSettler: "" }
 ];

   var init = function (shareIssuers) {
	web3.eth.getAccounts(function (err, accs) {
		shareIssuers[0].address = ShareIssuer.deployed().address;
		
        shareIssuers.forEach(function(shareIssuer) {
            shareIssuer.instance = ShareIssuer.at(shareIssuer.address);

	        getShareHolderInfos(shareIssuer);
		    shareIssuer.instance.getOwner()
				.then(function (address) {
					shareIssuer.owner.address = address;
				})
				.catch(function (e) {
					console.error(e);
				});

	        console.log(shareIssuer);

	        shareIssuer.instance.getAuthorisedSettler()
	        	.then(service.applyCallback(function (address) {
	        			console.log("second " + address);
	        			shareIssuer.authorisedSettler = address;
	        		})
	        	)
	        	.catch(console.error);

	    	listenToAuthorisedSettlerChanged(shareIssuer);

        });

	});
   }

function deployNewShareIssuerStraight() {
	return deployNewShareIssuer(
		web3.eth.coinbase,
		function (result) {
			console.log(result);
		},
		function (e) {
			console.error(e);
		});
}

function deployNewShareIssuer(from, resultFunction, errorFunction) {
	return ShareIssuer.new({
			"from": from,
			"gas": 1000000
		})
	.then(resultFunction)
	.catch(errorFunction);
}

function getShareHolderInfos(shareIssuerWrapper) {
	shareIssuerWrapper.instance
	.getShareholders()
	.then(function (holderList) {
		// Result is in the form [ "0x987543534...", ... ]
		var length = holderList.length;
		var receivedInfos = [];
		for (var i = 0; i < length; i++) {
			var current = i;
			shareIssuerWrapper.instance
			.getShareholding(holderList[i])
			.then(service.applyCallback(function (count) {
				console.log(count);
				receivedInfos.push(current);
				shareIssuerWrapper.shareHolders.push({
					"address": holderList[current],
					"count": count.c[0]
				});
               	if(length == receivedInfos.length) {
                   service.shareIssuers = service.tmpShareIssuers;
               	}
			}))
			.catch(function(e) { console.error(e); } );
		}
	})
	.catch(function(e) { console.error(e); } );
}
  

function listenToAuthorisedSettlerChanged(shareIssuer) {
	shareIssuer.instance.OnAuthorisedSettlerChanged({})
	    .watch(service.applyCallback(function (error, result) {
	        console.log("OnAuthorisedSettlerChanged:");  
	        if (error) {
	            console.log(error);
	      		alert("Error OnAuthorisedSettlerChanged \n" + e);
	        }
	        console.log(result);
        	shareIssuer.authorisedSettler = result.args.newAuthorisedSettler;	
        }));
}

  init(this.tmpShareIssuers);
  
}]);


