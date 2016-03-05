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
  OrderBook.abi = [{ "constant": false, "inputs": [{ "name": "orderId", "type": "uint256" }], "name": "removeOrder", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "shareIssuer", "type": "address" }, { "name": "price", "type": "uint256" }, { "name": "quantity", "type": "uint256" }, { "name": "isBuy", "type": "bool" }], "name": "addOrder", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "orderId", "type": "uint256" }, { "indexed": false, "name": "shareIssuer", "type": "address" }, { "indexed": false, "name": "price", "type": "uint256" }, { "indexed": false, "name": "quantity", "type": "uint256" }, { "indexed": false, "name": "isBuy", "type": "bool" }, { "indexed": false, "name": "from", "type": "address" }], "name": "OnOrderAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "orderId", "type": "uint256" }], "name": "OnOrderRemoved", "type": "event" }];
  OrderBook.binary = "606060405260006002556103a9806100176000396000f3606060405260e060020a60003504639645337a8114610026578063e21c343714610048575b005b610024600435600081815260208190526040812054829081146101e957610002565b610145600435602435604435606435600280546001908101808355600081815260208190526040808220928355835492840192909255835481528181208401805473ffffffffffffffffffffffffffffffffffffffff1916891790558354815281812060030187905583548152818120600401869055835481528181206005908101805460ff19168717905593548152908120909201805474ffffffffffffffffffffffffffffffffffffffff00191633610100021790558054808201808355828183801582901161015757828752610157906000805160206103898339815191529081019083015b808211156101e55760008155600101610131565b60408051918252519081900360200190f35b50505091909060005260206000209001600050600254908190556040805191825273ffffffffffffffffffffffffffffffffffffffff88811660208401528282018890526060830187905260808301869052331660a0830152517f3835a03ffda841180cb5bca237598183ac5d578cd18a805ae2c1b5d3fbeef1eb92509081900360c00190a1949350505050565b5090565b6040805184815290517f6d8187c33ccde9f6fa287a7a6884eb38d6faad13ca9c59e64218160fc115dce49181900360200190a160008381526020819052604090206001805491810154935090600019810190811015610002576000918252600080516020610389833981519152019050546001805484908110156100025760008051602061038983398151915201919091558054839160009182919084908110156100025760008051602061038983398151915201549091526040909120810191909155805460001981018083559091908280158290116102e75760008390526102e790600080516020610389833981519152908101908301610131565b5050506000848152602081815260408083208381556001810184905560028101805473ffffffffffffffffffffffffffffffffffffffff19169055600381018490556004810193909355600592909201805474ffffffffffffffffffffffffffffffffffffffffff19169055815186815291517f6d8187c33ccde9f6fa287a7a6884eb38d6faad13ca9c59e64218160fc115dce49350918290030190a150505056b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6";

  if ("" != "") {
    OrderBook.address = "";

    // Backward compatibility; Deprecated.
    OrderBook.deployed_address = "";
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