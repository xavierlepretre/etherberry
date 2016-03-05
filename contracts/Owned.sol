contract Owned {
  function Owned() {
    owner = msg.sender;
  }

  modifier onlyowner() {
    if (msg.sender == owner) _
  }

  address owner;

	function getOwner() constant
	    returns (address) {
      return owner;
	}
}