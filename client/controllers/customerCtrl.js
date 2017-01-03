App.controller('CustomerController', function($scope, CustomerFactory, $location){
	
	$scope.customers = '';

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

	$scope.createCustomer = function(){
		CustomerFactory.createCustomer($scope.$parent.newCustomer)
		.then(function(response){
			$scope.newCustomer = '';
			getCustomers();
		})
		.catch(function(err){
			console.log(err);
		})
	}

	$scope.deleteCustomer = function(id){
		CustomerFactory.deleteCustomer(id)
		.then(getCustomers)
	}
})