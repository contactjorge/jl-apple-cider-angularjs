var allControllers = angular.module('allControllers', []);

allControllers.controller('ProductsController',
	function ProductController($scope, $http){
		var productURL = 'https://api.mlab.com/api/1/databases/wondersign/collections/products?apiKey=B_o7qfV7j4diajcASjmKeB4sBzaBs76e';
		
		var products = [];
		$http.get(productURL).then(function (response){
			$scope.products = response.data;
			$scope.list = $scope.products;
		});
		var stringyfied = JSON.stringify(products);
		console.log("this is the response: " + stringyfied);
		console.log("id: " + stringyfied._id);
		
		console.log ($scope.list);
		$scope.addProduct = function(){
			$scope.product.push({ _id:$scope.products._id, name:$scope.name, sku:$scope.sku });
		};
		
		$scope.getAllProducts = function(){
			return $scope.products.length;
		};
		
		
	});