contract ShareIssuer {
	address issuer;
	address authorisedSettler;

	mapping (address => uint256) sharesOwned;
	address[] shareholders;

	event OnSharesIssued(uint256 count);
	event OnSharesTransfered(address from, address to, uint256 count);

    modifier fromIssuer() {
        if (msg.sender != issuer) {
            throw;
        }
        _
    }

    modifier fromAuthorisedSettler() {
        if (msg.sender != issuer) {
            throw;
        }
        _
    }

	function ShareIssuer() {
		issuer = msg.sender;
		sharesOwned[issuer] = 100;
	}

	function issueShares(uint256 quantity) 
		fromIssuer() {
		sharesOwned[issuer] += quantity;
		OnSharesIssued(quantity);
	}

	function registerAuthorisedSettler(address newAuthorisedSettler) 
		fromIssuer() {
		authorisedSettler = newAuthorisedSettler;
	}

	function transferSharesTo(address from, address to, uint256 count) 
		fromAuthorisedSettler(){
		if (sharesOwned[from] < count) {
			throw;
		}
		sharesOwned[from] -= count;
		sharesOwned[to] += count;
		OnSharesTransfered(from, to, count);
	}
}