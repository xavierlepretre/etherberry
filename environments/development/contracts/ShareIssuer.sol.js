"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var ShareIssuer = (function (_Pudding) {
    _inherits(ShareIssuer, _Pudding);

    function ShareIssuer() {
      _classCallCheck(this, ShareIssuer);

      _get(Object.getPrototypeOf(ShareIssuer.prototype), "constructor", this).apply(this, arguments);
    }

    return ShareIssuer;
  })(Pudding);

  ;

  // Set up specific data for this class.
  ShareIssuer.abi = [{ "constant": false, "inputs": [{ "name": "quantity", "type": "uint256" }], "name": "issueShares", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "getAuthorisedSettler", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "getShareholders", "outputs": [{ "name": "", "type": "address[]" }], "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "count", "type": "uint256" }], "name": "transferShares", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "shareholder", "type": "address" }], "name": "getShareholding", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "newAuthorisedSettler", "type": "address" }], "name": "registerAuthorisedSettler", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "count", "type": "uint256" }], "name": "OnSharesIssued", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "from", "type": "address" }, { "indexed": false, "name": "to", "type": "address" }, { "indexed": false, "name": "count", "type": "uint256" }], "name": "OnSharesTransfered", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newAuthorisedSettler", "type": "address" }], "name": "OnAuthorisedSettlerChanged", "type": "event" }];
  ShareIssuer.binary = "6060604090815260008054600160a060020a0319163317808255600160a060020a031681526002602052206064905560038054600181018083558281838015829011606a57818360005260206000209182019101606a91905b8082111560a757600081556001016058565b505050919090600052602060002090016000548154600160a060020a031916600160a060020a039190911617905550610346806100ab6000396000f35b509056606060405236156100615760e060020a600035046323409d48811461006357806324c253f31461008557806341ca641e14610098578063893d20e814610108578063bfc77beb1461011c578063ce43773014610144578063d783986d14610171575b005b610061600435600054600160a060020a03908116339091161461025857610002565b610193600154600160a060020a03165b90565b6101b06040805160208181018352600082528251600380548084028301840190955284825292939092918301828280156100fc57602002820191906000526020600020905b8154600160a060020a03168152600191909101906020018083116100dd575b50505050509050610095565b610193600054600160a060020a0316610095565b610061600435602435604435600154600160a060020a0390811633909116146102ae57610002565b600160a060020a036004351660009081526002602052604090205460408051918252519081900360200190f35b610061600435600054600160a060020a0390811633909116146101fa57610002565b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600302600f01f1509050019250505060405180910390f35b6001805473ffffffffffffffffffffffffffffffffffffffff19168217905560408051600160a060020a038316815290517f98551c4cbfa475727f3c44b68fd8316aacc430f9ad88de63e2ed29c7c77674699181900360200190a150565b60008054600160a060020a0316815260026020908152604091829020805484019055815183815291517f8f73a9b0da9e3d91ff8005bc70d0cb658af561ed0c936f928fd3232afbc07a019281900390910190a150565b600160a060020a038316600090815260026020526040902054819010156102d457610002565b600160a060020a0383811660008181526002602090815260408083208054879003905593861680835291849020805486019055835192835282015280820183905290517f1a9d735777ef03c880675fec31b4fbd692593cc6eeb82274084a07bee3fb44829181900360600190a150505056";

  if ("0xe19f02015e0227f8c202d7ec4b36352f6aea5e1c" != "") {
    ShareIssuer.address = "0xe19f02015e0227f8c202d7ec4b36352f6aea5e1c";

    // Backward compatibility; Deprecated.
    ShareIssuer.deployed_address = "0xe19f02015e0227f8c202d7ec4b36352f6aea5e1c";
  }

  ShareIssuer.generated_with = "1.0.3";
  ShareIssuer.contract_name = "ShareIssuer";

  return ShareIssuer;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.ShareIssuer = factory;
}