# etherberry

## Data structures.
### Known `ShareIssuer` instances:
There is a global variable that keeps track of all known instances of `ShareIssuer`.
The addresses need to be changed and rebuilt when the `ShareIssuer` contract is modified and redeployed.
```Javascript
var shareIssuerAddresses = {
	// This one is updated with the default deployed
	"kaserFactory": _POPULATED_ON_LOAD_,
	// These need to be updated by hand unfortunately
	"relox": "0x3e3067623f0a8919382924dd9a57eaff19e2d3e0",
	"baguetteShop": "0x332e4376f2660ee168103b51a92b43c779a2cfdd"
};

var shareIssuers = {
	"kaserFactory": _POPULATED_ON_LOAD_,
	"relox": _POPULATED_ON_LOAD_,
	"baguetteShop": _POPULATED_ON_LOAD_
};
```

### Known `ShareIssuer` owners:
There is a global variable that keeps track of all known owners of `ShareIssuer`s.
The address values are populated asynchronously on load.
```Javascript
var shareIssuerOwners = {
	"kaserFactory": {
		"name": "Cheese Maker", 
		"address": _POPULATED_ON_LOAD_
	}, 
	"relox": {
		"name": "Clock Maker", 
		"address": _POPULATED_ON_LOAD_
	}, 
	"baguetteShop": {
		"name": "Bread Maker", 
		"address": _POPULATED_ON_LOAD_
	}
};
```

### Shareholder Info:
```Javascript
{
	"address":"0x9a47182e9a133b449a05d1b95fa678ad9478fcf0", // The address of the shareholder
	"count":40 // The number of shares held
}
```

### List of shareholders:
```Javascript
var shareholderInfos = [
	{
		"address":"0x9a47182e9a133b449a05d1b95fa678ad9478fcf0", // The address of the shareholder
		"count":40 // The number of shares held
	},
	...
]
```

### Share Transfer Order:
This is sent by an authorised party, like a bank.
```Javascript
shareTransferOrder = {
	"from": "0x9a47182e9a133b449a05d1b95fa678ad9478fcf0",
	"to": "0x50b7182e9a133b449a05d1b95fa678ad9478fcf0",
	"count": 10
};
```
Basic use:
```Javascript
var shareIssuer = shareIssuers.relox; // For instance
shareIssuer.transferShares(
	shareTransferOrder.from,
	shareTransferOrder.to,
	shareTransferOrder.count)
	.then(function (result) {
		console.log(result);
	});
```

### Contracts
### Share Issuer
Represents the company that has issued shares and placed them on the market.
Methods:
#### Get Owner, the owner of the Share Issuer contract.
```Javascript
var shareIssuer = shareIssuers.relox; // For instance
shareIssuer.getOwner()
	.then(function (ownerAddress) {
		console.log(ownerAddress);
	})
	.catch(function (e) {
		console.log(e);
	});
```

#### Get shareholders infos:
```Javascript
var shareIssuer = shareIssuers.relox; // For instance
shareIssuer.getShareHolderInfos(
	shareIssuer,
	function (result) {
		console.log(result);
	},
	function (e) {
		console.log(e);
	});
```

#### Get the authorised settler.
```Javascript
var shareIssuer = shareIssuers.relox; // For instance
shareIssuer.getAuthorisedSettler()
	.then(function (result) {
		// result comes in the form of "0x3e3067623f0a8919382924dd9a57eaff19e2d3e0"
		// or "0x0000000000000000000000000000000000000000" is no registered settler.
		console.log(result);
	})
	.catch(function (e) {
		console.error(e);
	});
```

#### Register an authorised settler.
```Javascript
var owner = "0x9a47182e9a133b449a05d1b95fa678ad9478fcf0";
var newAuthorisedSettler = "0x9a47182e9a133b449a05d1b95fa678ad9478fcf0";
var shareIssuer = shareIssuers.relox; // For instance
shareIssuer.registerAuthorisedSettler("0x9a47182e9a133b449a05d1b95fa678ad9478fcf0",
{from: "0x9a47182e9a133b449a05d1b95fa678ad9478fcf0"})
	.then(function (result) {
		// Returns only the block into which it is being mined
		console.log(result);
	})
	.catch(function (e) {
		console.log(e);
	});
```

#### Listen to the `OnAuthorisedSettlerChanged` event.
```Javascript
var shareIssuer = shareIssuers.relox; // For instance
shareIssuer.OnAuthorisedSettlerChanged({})
    .watch(function(error, result) {
      console.log("OnAuthorisedSettlerChanged:");
      if (error) {
        console.error(error);
      }
      // example result = {
      //   "args": {
      //     "newAuthorisedSettler": "0x9a47182e9a133b449a05d1b95fa678ad9478fcf0",
      //     ...
  	  //   }
  	  // }
      console.log(result);
    });
```

#### Transfer shares. 

You need to cal the method.


