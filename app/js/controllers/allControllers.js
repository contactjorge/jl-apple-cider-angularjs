var allControllers = angular.module('allControllers', []);

allControllers.controller('ProductsController',
	function ProductController($scope, $http){
		var productsURL = 'https://api.mlab.com/api/1/databases/wondersign/collections/products?apiKey=B_o7qfV7j4diajcASjmKeB4sBzaBs76e';
		var aProductURL = 'https://api.mlab.com/api/1/databases/wondersign/collections/products/59644b3df36d286340b27f66?apiKey=B_o7qfV7j4diajcASjmKeB4sBzaBs76e';
		var products = [];
		$http.get(productsURL).then(function (response){
			$scope.products = response.data;
			$scope.list = $scope.products;
		});
		var stringyfied = JSON.stringify(products);
		console.log("this is the response: " + stringyfied);
		console.log("id: " + stringyfied._id);
		
		console.log ($scope.list);
		/*var updateURL = 'https://api.mlab.com/api/1/databases/wondersign/collections/products/59644b3df36d286340b27f66?apiKey=B_o7qfV7j4diajcASjmKeB4sBzaBs76e';
		$http.post(aProductURL).then(function (response){
			$scope.postProduct = { _id:$scope.products._id, name:$scope.name, sku:$scope.sku };
		});
		$scope.addProduct = function(){
			$scope.products.push({ _id:$scope.products._id, name:$scope.name, sku:$scope.sku });
		};
		
		$scope.getAllProducts = function(){
			return $scope.products.length;
		};
		*/
		
	});