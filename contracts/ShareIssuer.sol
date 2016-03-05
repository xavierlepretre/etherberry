import "Owned";

contract ShareIssuer is Owned {
	address authorisedSettler;

	mapping (address => uint256) sharesOwned;
	address[] shareholders;

	event OnSharesIssued(uint256 count);
	event OnSharesTransfered(address from, address to, uint256 count);
	event OnAuthorisedSettlerChanged(address newAuthorisedSettler);

    modifier fromAuthorisedSettler() {
        if (msg.sender != authorisedSettler) {
            throw;
        }
        _
    }

	function ShareIssuer() {
		sharesOwned[owner] = 100;
		shareholders.push(owner);
	}

	function getAuthorisedSettler() constant
		returns (address) {
		return authorisedSettler;
	}

	function registerAuthorisedSettler(address newAuthorisedSettler) 
		fromOwner() {
		authorisedSettler = newAuthorisedSettler;
		OnAuthorisedSettlerChanged(newAuthorisedSettler);
	}

	function getShareholders() constant
		returns (address[]) {
		return shareholders;		
	}

	function getShareholding(address shareholder) constant
		returns (uint256) {
		return sharesOwned[shareholder];
	}

	function issueShares(uint256 quantity) 
		fromOwner() {
		sharesOwned[owner] += quantity;
		OnSharesIssued(quantity);
	}

	function transferShares(address from, address to, uint256 count) 
		fromAuthorisedSettler(){
		if (sharesOwned[from] < count) {
			throw;
		}
		sharesOwned[from] -= count;
		sharesOwned[to] += count;
		OnSharesTransfered(from, to, count);
	}
}