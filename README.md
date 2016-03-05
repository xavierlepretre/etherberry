# etherberry

## Data structures.
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
var shareIssuer = ShareIssuer.deployed();
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
ShareIssuer.deployed().getOwner()
	.then(function (ownerAddress) {
		console.log(ownerAddress);
	})
	.catch(function (e) {
		console.log(e);
	});
```

#### Get shareholders infos:
```Javascript
var shareIssuer;
getShareHolderInfos(
	shareIssuer,
	function (result) {
		console.log(result);
	},
	function (e) {
		console.log(e);
	});
```

#### Register an authorised settler.
```Javascript
var owner = "0x9a47182e9a133b449a05d1b95fa678ad9478fcf0";
var newAuthorisedSettler = "0x9a47182e9a133b449a05d1b95fa678ad9478fcf0";
ShareIssuer.deployed().registerAuthorisedSettler("0x9a47182e9a133b449a05d1b95fa678ad9478fcf0",
{from: "0x9a47182e9a133b449a05d1b95fa678ad9478fcf0"})
	.then(function (result) {
		// Returns only the block into which it is being mined
		console.log(result);
	})
	.catch(function (e) {
		console.log(e);
	});
```


#### Transfer shares. 


