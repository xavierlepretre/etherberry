import "Owned";
import "ShareIssuer";

contract Settlement is Owned {

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

    function Settlement() {
    	latestTradeId = 0;
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
	}

	function confirmPayment(address from, address to, uint256 totalTransfered) 
		fromOwner() {
			// TODO
	}

	function confirmPayment(uint256 tradeId)
		fromOwner() 
		tradeIdExists(tradeId) {
		ShareIssuer(trades[tradeId].shareIssuer).transferSharesTo(
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