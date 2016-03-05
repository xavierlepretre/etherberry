"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Settlement = (function (_Pudding) {
    _inherits(Settlement, _Pudding);

    function Settlement() {
      _classCallCheck(this, Settlement);

      _get(Object.getPrototypeOf(Settlement.prototype), "constructor", this).apply(this, arguments);
    }

    return Settlement;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Settlement.abi = [{ "constant": false, "inputs": [{ "name": "shareIssuer", "type": "address" }, { "name": "price", "type": "uint256" }, { "name": "quantity", "type": "uint256" }, { "name": "from", "type": "address" }, { "name": "to", "type": "address" }], "name": "registerTrade", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "totalTransfered", "type": "uint256" }], "name": "confirmPayment", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "tradeId", "type": "uint256" }], "name": "confirmPayment", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "tradeId", "type": "uint256" }], "name": "OnTradeRemoved", "type": "event" }];
  Settlement.binary = "606060405260008054600160a060020a03191633179055600060035561040f806100296000396000f3606060405260e060020a60003504633aa44327811461003c5780634e5ed01714610125578063876ca09f1461014d578063893d20e81461016f575b005b61003a6004356024356044356064356084356003805460019081018083556000818152602083905260408082209283556002805493850193909355845482528082208301805473ffffffffffffffffffffffffffffffffffffffff199081168c179091558554835281832086018a905585548352818320600401899055855483528183206005018054821689179055945482529020600601805490931684179092558154908101808355828183801582901161018f57600083905261018f906000805160206103ef8339815191529081019083015b808211156101a95760008155600101610111565b61003a600435602435604435600054600160a060020a0390811633909116146101ad57610002565b61003a600435600054600160a060020a0390811633909116146101b257610002565b60005460408051600160a060020a03929092168252519081900360200190f35b505050600092835250600354602090922001555050505050565b5090565b505050565b600081815260016020526040902054819081146101ce57610002565b60008281526001602052604080822060028101546006820154600583015460049384015485517fbfc77beb000000000000000000000000000000000000000000000000000000008152600160a060020a039384169581019590955290821660248501526044840152925192169263bfc77beb92606483810193829003018183876161da5a03f115610002575050506101ad8260008181526001602052604081205481908390811461027e57610002565b6000848152600160208190526040909120015460028054919350906000198101908110156100025760009182526000805160206103ef83398151915201905054600280548490811015610002576000805160206103ef833981519152019190915580548391600191600091908490811015610002576000805160206103ef833981519152015482526040909120909101919091558054600019810180835590919082801582901161034c57600083905261034c906000805160206103ef833981519152908101908301610111565b505050600085815260016020818152604080842084815592830184905560028301805473ffffffffffffffffffffffffffffffffffffffff19908116909155600384018590556004840194909455600583018054851690556006929092018054909316909255805187815290517f7fea504afcd66111a1de28703ac39c5f3252f43acd6df8ff5ae14e9e68185e8593509081900390910190a1506001939250505056405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace";

  if ("" != "") {
    Settlement.address = "";

    // Backward compatibility; Deprecated.
    Settlement.deployed_address = "";
  }

  Settlement.generated_with = "1.0.3";
  Settlement.contract_name = "Settlement";

  return Settlement;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Settlement = factory;
}