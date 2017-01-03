App.controller('OrderController', function($scope, ProductFactory, CustomerFactory, OrderFactory, $location){

	function getProducts(){
		ProductFactory.getProducts()
		.then(function(response){
			$scope.products = response.data;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getProducts();

	function getCustomers(){
		CustomerFactory.getCustomers()
		.then(function(response){
			$scope.customers = response.data;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getCustomers();

	function getOrders(){
		OrderFactory.getOrders()
		.then(function(response){
			$scope.orders = response.data;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getOrders();

	$scope.order = function(){
		console.log($scope.newOrder);
		OrderFactory.order($scope.$parent.newOrder)
		.then(function(response){
			console.log(response.data);
			if (response.data === "Sorry, we could not process your order, please check the Products page to view the quanitity available of the product you are trying to order"){
				$scope.orderErrors = response.data;
			}
			else {
				$scope.newOrder = '';
				getProducts();
				getCustomers();
				getOrders();
			}
		})
		.catch(function(err){
			console.log(err);
		})
	}

})