App.factory('OrderFactory', function($http){
	var factory = {};

	factory.order = function(newOrder){
		return $http.post('/orders', newOrder)
	}

	factory.getOrders = function(){
		return $http.get('/orders')
	}

	factory.getRecentOrders = function(){
		return $http.get('/orders/recent')
	}

	return factory;
})