app.service('shareHolderService', [ function() {

 var service = this;

 this.applyCallback = function(f) { return f; };
 this.shareIssuers = [];

 this.tmpShareIssuers =[
   { name : "kaserFactory",  address : "", instance : undefined, 
     owner : { name : "Cheese Maker", address : "" },
     shareHolders : [] },
   { name : "relox",  address : "0x3e3067623f0a8919382924dd9a57eaff19e2d3e0", instance : undefined,
     owner : { name : "Clock Maker", address : "" },
     shareHolders : [] },
   { name : "baguetteShop", address : "0x332e4376f2660ee168103b51a92b43c779a2cfdd", instance : undefined,
     owner : { name : "Cheese Maker", address : "" },
     shareHolders : [] }
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
  
  init(this.tmpShareIssuers);
  
}]);


