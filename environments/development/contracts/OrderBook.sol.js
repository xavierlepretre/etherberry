"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var OrderBook = (function (_Pudding) {
    _inherits(OrderBook, _Pudding);

    function OrderBook() {
      _classCallCheck(this, OrderBook);

      _get(Object.getPrototypeOf(OrderBook.prototype), "constructor", this).apply(this, arguments);
    }

    return OrderBook;
  })(Pudding);

  ;

  // Set up specific data for this class.
  OrderBook.abi = [{ "constant": false, "inputs": [{ "name": "orderId", "type": "uint256" }], "name": "removeOrder", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "getOrderIds", "outputs": [{ "name": "", "type": "uint256[]" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "orderId", "type": "uint256" }], "name": "getOrder", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "bool" }, { "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "shareIssuer", "type": "address" }, { "name": "price", "type": "uint256" }, { "name": "quantity", "type": "uint256" }, { "name": "isBuy", "type": "bool" }], "name": "addOrder", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "orderId", "type": "uint256" }, { "indexed": false, "name": "shareIssuer", "type": "address" }, { "indexed": false, "name": "price", "type": "uint256" }, { "indexed": false, "name": "quantity", "type": "uint256" }, { "indexed": false, "name": "isBuy", "type": "bool" }, { "indexed": false, "name": "from", "type": "address" }], "name": "OnOrderAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "orderId", "type": "uint256" }], "name": "OnOrderRemoved", "type": "event" }];
  OrderBook.binary = "6060604052600060025561051c806100176000396000f3606060405260e060020a60003504639645337a811461003c5780639e0acf8f1461005e578063d09ef241146100c4578063e21c3437146100f0575b005b61003a6004356000818152602081905260408120548290811461030c57610002565b6101ed6040805160208181018352600082526001805484518184028101840190955280855292939290918301828280156100ba57602002820191906000526020600020905b8160005054815260200190600101908083116100a3575b5050505050905090565b61023760043560008181526020819052604081205481908190819081908190879081146104ac57610002565b610275600435602435604435606435600280546001908101808355600081815260208190526040808220928355835492840192909255835481528181208401805473ffffffffffffffffffffffffffffffffffffffff1916891790558354815281812060030187905583548152818120600401869055835481528181206005908101805460ff19168717905593548152908120909201805474ffffffffffffffffffffffffffffffffffffffff00191633610100021790558054808201808355828183801582901161028757828752610287906000805160206104fc8339815191529081019083015b8082111561030857600081556001016101d9565b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600302600f01f1509050019250505060405180910390f35b60408051968752600160a060020a039586166020880152868101949094526060860192909252608085015290911660a0830152519081900360c00190f35b60408051918252519081900360200190f35b505050919090600052602060002090016000506002549081905560408051918252600160a060020a0388811660208401528282018890526060830187905260808301869052331660a0830152517f3835a03ffda841180cb5bca237598183ac5d578cd18a805ae2c1b5d3fbeef1eb92509081900360c00190a1949350505050565b5090565b6040805184815290517f6d8187c33ccde9f6fa287a7a6884eb38d6faad13ca9c59e64218160fc115dce49181900360200190a1600083815260208190526040902060019081015481549093506000198101908110156100025760009182526000805160206104fc83398151915201905054600180548490811015610002576000805160206104fc8339815191520191909155805483916000918291908490811015610002576000805160206104fc833981519152015490915260409091208101919091558054600019810180835590919082801582901161040a57600083905261040a906000805160206104fc8339815191529081019083016101d9565b5050506000848152602081815260408083208381556001810184905560028101805473ffffffffffffffffffffffffffffffffffffffff19169055600381018490556004810193909355600592909201805474ffffffffffffffffffffffffffffffffffffffffff19169055815186815291517f6d8187c33ccde9f6fa287a7a6884eb38d6faad13ca9c59e64218160fc115dce49350918290030190a1505050565b5050506000948552505050602082905250604090206001810154600282015460038301546004840154600594909401549294600160a060020a03928316949193919260ff8316926101009004169056b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6";

  if ("0x372af0a4953e91339d78c78d0abcfece33a51017" != "") {
    OrderBook.address = "0x372af0a4953e91339d78c78d0abcfece33a51017";

    // Backward compatibility; Deprecated.
    OrderBook.deployed_address = "0x372af0a4953e91339d78c78d0abcfece33a51017";
  }

  OrderBook.generated_with = "1.0.3";
  OrderBook.contract_name = "OrderBook";

  return OrderBook;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.OrderBook = factory;
}