App.factory('CustomerFactory', function($http){
	var factory = {};

	factory.getCustomers = function(){
		return $http.get('/customers')
	}

	factory.createCustomer = function(newCustomer){
		return $http.post('/customers', newCustomer)
	}

	factory.deleteCustomer = function(id){
		return $http.delete('/customers/'+id)
	}

	factory.getRecentCustomers = function(){
		return $http.get('/customers/recent')
	}

	return factory;
})