var allControllers = angular.module('allControllers', []);

allControllers.controller('ProductsController',
	function ProductController($scope, $http){
		var products = 'https://api.mlab.com/api/1/databases/wondersign/collections/products?apiKey=B_o7qfV7j4diajcASjmKeB4sBzaBs76e';
		$http.get(products).then(function (response){
			$scope.products = response.data;
		});
		
		$scope.addProduct = function(){
			$scope.person.push({ _id:$scope.products._id, name:$scope.name, sku:$scope.sku });
		};
		
		$scope.getAllProducts = function(){
			return $scope.products.length;
		};
		
		
	});