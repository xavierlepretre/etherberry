contract Owned {
  function Owned() {
    owner = msg.sender;
  }

  modifier fromOwner() {
    if (msg.sender != owner) {
      throw;
    }
    _
  }

  address owner;

	function getOwner() constant
	    returns (address) {
      return owner;
	}
}