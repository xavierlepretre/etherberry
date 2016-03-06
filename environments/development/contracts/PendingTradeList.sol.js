"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var PendingTradeList = (function (_Pudding) {
    _inherits(PendingTradeList, _Pudding);

    function PendingTradeList() {
      _classCallCheck(this, PendingTradeList);

      _get(Object.getPrototypeOf(PendingTradeList.prototype), "constructor", this).apply(this, arguments);
    }

    return PendingTradeList;
  })(Pudding);

  ;

  // Set up specific data for this class.
  PendingTradeList.abi = [{ "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "getTrade", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "address" }, { "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "shareIssuer", "type": "address" }, { "name": "price", "type": "uint256" }, { "name": "quantity", "type": "uint256" }, { "name": "from", "type": "address" }, { "name": "to", "type": "address" }], "name": "registerTrade", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "getTradeIds", "outputs": [{ "name": "", "type": "uint256[]" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "totalTransfered", "type": "uint256" }], "name": "confirmPayment", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "tradeId", "type": "uint256" }], "name": "confirmPayment", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "index", "type": "uint256" }, { "indexed": false, "name": "shareIssuer", "type": "address" }, { "indexed": false, "name": "price", "type": "uint256" }, { "indexed": false, "name": "quantity", "type": "uint256" }, { "indexed": false, "name": "from", "type": "address" }, { "indexed": false, "name": "to", "type": "address" }], "name": "OnTradeRegistered", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "tradeId", "type": "uint256" }], "name": "OnTradeRemoved", "type": "event" }];
  PendingTradeList.binary = "606060405260008054600160a060020a031916331790556000600355610602806100296000396000f3606060405236156100565760e060020a60003504632db25e0581146100585780633aa44327146100825780633b1a2533146101615780634e5ed017146101c6578063876ca09f146101ee578063893d20e814610210575b005b6102236004356000818152600160205260408120548190819081908190869081146102c657610002565b6100566004356024356044356064356084356003805460019081018083556000818152602083905260408082209283556002805493850193909355845482528082208301805473ffffffffffffffffffffffffffffffffffffffff199081168c179091558554835281832086018a905585548352818320600401899055855483528183206005018054821689179055945482529020600601805490931684179092558154908101808355828183801582901161030e5781836000526020600020918201910161030e91905b8082111561039c576000815560010161014d565b6040805160208181018352600082526002805484518184028101840190955280855261025f94928301828280156101ba57602002820191906000526020600020905b8160005054815260200190600101908083116101a3575b50505050509050610220565b610056600435602435604435600054600160a060020a0390811633909116146103a057610002565b610056600435600054600160a060020a0390811633909116146103a557610002565b6102a9600054600160a060020a03165b90565b60408051600160a060020a0396871681526020810195909552848101939093529084166060840152909216608082015290519081900360a00190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600302600f01f1509050019250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b5050506000938452505060016020525060409020600281015460068201546005830154600484015460039490940154600160a060020a03938416959094939182169290911690565b5050506000928352506020808320600354920182905581835260018082526040938490200154835192835290820152600160a060020a0387811682840152606082018790526080820186905284811660a0830152831660c082015290517f8b384f0b5cb57fd09b48bfc4e2cb61510d10c5453b2d366393fcb61eacfe9c209181900360e00190a15050505050565b5090565b505050565b600081815260016020526040902054819081146103c157610002565b60008281526001602052604080822060028101546006820154600583015460049384015485517fbfc77beb000000000000000000000000000000000000000000000000000000008152600160a060020a039384169581019590955290821660248501526044840152925192169263bfc77beb92606483810193829003018183876161da5a03f115610002575050506103a08260008181526001602052604081205481908390811461047157610002565b6000848152600160208190526040909120015460028054919350906000198101908110156100025760009182526000805160206105e283398151915201905054600280548490811015610002576000805160206105e2833981519152019190915580548391600191600091908490811015610002576000805160206105e2833981519152015482526040909120909101919091558054600019810180835590919082801582901161053f57600083905261053f906000805160206105e283398151915290810190830161014d565b505050600085815260016020818152604080842084815592830184905560028301805473ffffffffffffffffffffffffffffffffffffffff19908116909155600384018590556004840194909455600583018054851690556006929092018054909316909255805187815290517f7fea504afcd66111a1de28703ac39c5f3252f43acd6df8ff5ae14e9e68185e8593509081900390910190a1506001939250505056405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace";

  if ("0x5b0a0323f28591709e1f0bb90b6d0837a761579a" != "") {
    PendingTradeList.address = "0x5b0a0323f28591709e1f0bb90b6d0837a761579a";

    // Backward compatibility; Deprecated.
    PendingTradeList.deployed_address = "0x5b0a0323f28591709e1f0bb90b6d0837a761579a";
  }

  PendingTradeList.generated_with = "1.0.3";
  PendingTradeList.contract_name = "PendingTradeList";

  return PendingTradeList;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.PendingTradeList = factory;
}