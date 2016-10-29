App.controller('ProductController', function($scope, ProductFactory, $location){

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

	$scope.addProduct = function(){
		ProductFactory.addProduct($scope.newProduct)
		.then(function(response){
			$scope.newProduct = '';
			getProducts();
		})
		.catch(function(err){
			console.log(err);
		})
	}

	$scope.deleteProduct = function(id){
		ProductFactory.deleteProduct(id)
		.then(getProducts);
	}
})