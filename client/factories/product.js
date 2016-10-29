App.factory('ProductFactory', function($http){
	var factory = {};

	factory.getProducts = function(){
		return $http.get('/products')
	}

	factory.addProduct = function(newProduct){
		return $http.post('/products', newProduct)
	}

	factory.deleteProduct = function(id){
		return $http.delete('/products/'+id)
	}

	factory.getRecentProducts = function(){
		return $http.get('/products/recent')
	}

	return factory;
})