import "Owned";
import "ShareIssuer";

contract PendingTradeList is Owned {

	struct Trade {
		uint256 id;
		uint256 index;
		address shareIssuer;
		uint256 price;
		uint256 quantity;
		address from;
		address to;
	}
	mapping (uint256 => Trade) trades;
	uint256[] tradeIds;
	uint256 latestTradeId;

	event OnTradeRegistered(uint256 id, uint256 index, address shareIssuer, uint256 price, uint256 quantity, address from, address to);
	event OnTradeRemoved(uint256 tradeId);

	modifier fromOwner() {
        if (msg.sender != owner) {
            throw;
        }
        _
    }

	modifier tradeIdExists(uint256 tradeId) {
        if (trades[tradeId].id != tradeId) {
            throw;
        }
        _
    }

    function PendingTradeList() {
    	latestTradeId = 0;
    }

    function getTradeIds() constant
    	returns (uint256[]) {
		return tradeIds;
    }

    function getTrade(uint256 id) constant
    	tradeIdExists(id)
    	returns(address, uint256, uint256, address, address) {
    	return (
    		trades[id].shareIssuer,
    		trades[id].price,
    		trades[id].quantity,
    		trades[id].from,
    		trades[id].to);
    }

	function registerTrade(
		address shareIssuer,
		uint256 price,
		uint256 quantity,
		address from,
		address to) {
		latestTradeId++;
		trades[latestTradeId].id = latestTradeId;
		trades[latestTradeId].index = tradeIds.length;
		trades[latestTradeId].shareIssuer = shareIssuer;
		trades[latestTradeId].price = price;
		trades[latestTradeId].quantity = quantity;
		trades[latestTradeId].from = from;
		trades[latestTradeId].to = to;
		tradeIds.push(latestTradeId);
		OnTradeRegistered(
			latestTradeId,
			trades[latestTradeId].index,
			shareIssuer,
			price,
			quantity,
			from,
			to);
	}

	function confirmPayment(address from, address to, uint256 totalTransfered) 
		fromOwner() {
			// TODO
	}

	function confirmPayment(uint256 tradeId)
		fromOwner() 
		tradeIdExists(tradeId) {
		ShareIssuer(trades[tradeId].shareIssuer).transferShares(
			trades[tradeId].to,
			trades[tradeId].from,
			trades[tradeId].quantity);
		removeTrade(tradeId);
	}

    function removeTrade(uint256 tradeId) 
        private
        tradeIdExists(tradeId)
        returns (bool success) {
        uint256 index = trades[tradeId].index;
        tradeIds[index] = tradeIds[tradeIds.length - 1];
        trades[tradeIds[index]].index = index;
        tradeIds.length--;
        delete trades[tradeId];
        OnTradeRemoved(tradeId);
        return true;
    }
}