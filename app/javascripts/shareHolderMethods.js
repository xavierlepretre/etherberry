// Deployed share issuers

var shareIssuerAddresses = {
	// This one is updated with the default deployed
	kaserFactory: "",
	// These need to be updated by hand unfortunately
	relox: "0x3e3067623f0a8919382924dd9a57eaff19e2d3e0",
	baguetteShop: "0x332e4376f2660ee168103b51a92b43c779a2cfdd"
}

var shareIssuers = {
	kaserFactory: undefined,
	relox: undefined,
	baguetteShop: undefined
}

window.onload = function () {
	web3.eth.getAccounts(function (err, accs) {
		shareIssuerAddresses.kaserFactory = ShareIssuer.deployed().address;
		shareIssuers.kaserFactory = ShareIssuer.deployed();
		shareIssuers.relox = ShareIssuer.at(shareIssuerAddresses.relox);
		shareIssuers.baguetteShop = ShareIssuer.at(shareIssuerAddresses.baguetteShop);
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

function getShareHolderInfosOfBase() {
	getShareHolderInfos(
		ShareIssuer.deployed(),
		function (result) {
			console.log(result);
		},
		function (e) {
			console.error(e);
		})
}

function getShareHolderInfos(shareIssuer, resultFunction, errorFunction) {
	shareIssuer
	.getShareholders()
	.then(function (holderList) {
		// Result is in the form [ "0x987543534...", ... ]
		var shareHolderInfos = [];
		var length = holderList.length;
		var receivedInfos = [];
		for (var i = 0; i < length; i++) {
			var current = i;
			shareIssuer
			.getShareholding(holderList[i])
			.then(function (count) {
				receivedInfos.push(current);
				shareHolderInfos.push({
					"address": holderList[current],
					"count": count.c[0]
				});
				if (receivedInfos.length == length) {
					resultFunction.call(this, shareHolderInfos);
				}
			})
			.catch(errorFunction);
		}
	})
	.catch(errorFunction);
}