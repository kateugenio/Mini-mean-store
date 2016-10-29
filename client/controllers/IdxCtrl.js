App.controller('IndexController', function($scope, ProductFactory, CustomerFactory, OrderFactory){

	function getRecentProducts(){
		ProductFactory.getRecentProducts()
		.then(function(response){
			$scope.products = response.data;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getRecentProducts();

	function getRecentOrders(){
		OrderFactory.getRecentOrders()
		.then(function(response){
			$scope.orders = response.data;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getRecentOrders();

	function getRecentCustomers(){
		CustomerFactory.getRecentCustomers()
		.then(function(response){
			$scope.customers = response.data;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getRecentCustomers();

})