contract OrderBook {

	struct Order {
        uint256 id;
        uint256 index;
        address shareIssuer;
        uint256 price;
        uint256 quantity;
        bool isBuy;
		address from;
    }

    mapping (uint256 => Order) orders;
    uint256[] orderIds;
    uint256 latestOrderId;

	event OnOrderAdded(uint256 orderId,
		address shareIssuer,
		uint256 price,
		uint256 quantity,
		bool isBuy,
		address from);
	event OnOrderRemoved(uint256 orderId);

	modifier orderIdExists(uint256 orderId) {
        if (orders[orderId].id != orderId) {
            throw;
        }
        _
    }

	function OrderBook() {
		latestOrderId = 0;
	}

	function getOrderIds() constant 
		returns (uint256[] ){
		return orderIds;
	}

	function getOrder(uint256 orderId) constant
		orderIdExists(orderId)
		returns (uint256, address, uint256, uint256, bool, address) {
		return (
			orders[orderId].index,
			orders[orderId].shareIssuer,
			orders[orderId].price,
			orders[orderId].quantity,
			orders[orderId].isBuy,
			orders[orderId].from);
	}

 	function addOrder(address shareIssuer, uint256 price, uint256 quantity, bool isBuy) 
 		returns (uint256) { // Returns order id
		latestOrderId++;
		orders[latestOrderId].id = latestOrderId;
		orders[latestOrderId].index = orderIds.length;
		orders[latestOrderId].shareIssuer = shareIssuer;
		orders[latestOrderId].price = price;
		orders[latestOrderId].quantity = quantity;
		orders[latestOrderId].isBuy = isBuy;
		orders[latestOrderId].from = msg.sender;
		orderIds.push(latestOrderId);
 		OnOrderAdded(latestOrderId, shareIssuer, price, quantity, isBuy, msg.sender);
 	}

 	function removeOrder(uint256 orderId) 
 		orderIdExists(orderId) {
 		OnOrderRemoved(orderId);
        uint256 index = orders[orderId].index;
        orderIds[index] = orderIds[orderIds.length - 1];
        orders[orderIds[index]].index = index;
        orderIds.length--;
        delete orders[orderId];
        OnOrderRemoved(orderId);
 	}
}