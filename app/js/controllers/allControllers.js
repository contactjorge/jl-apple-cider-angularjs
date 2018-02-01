var allControllers = angular.module('allControllers', []);

allControllers.controller('ProductsController',
	function ProductController($scope, $http, $routeParams){
		var ref, productList;
		var productsURL = 'https://api.mlab.com/api/1/databases/wondersign/collections/products?apiKey=B_o7qfV7j4diajcASjmKeB4sBzaBs76e';
		var postProductURL = 'https://api.mlab.com/api/1/databases/wondersign/collections/products/59644b3df36d286340b27f66?apiKey=B_o7qfV7j4diajcASjmKeB4sBzaBs76e';
		var updateURL = 'https://api.mlab.com/api/1/databases/wondersign/collections/products/59644b3df36d286340b27f66?apiKey=B_o7qfV7j4diajcASjmKeB4sBzaBs76e';
		var products = [];
		var _id = '';
		var name = '';
		var sku = '';
		var product = '';
		$scope.whicproduct = $routeParams.mId;
		$scope.query = '';
		
		
		$http.get(productsURL).then(function (response){
			$scope.products = response.data;
			$scope.list = $scope.products;
			$scope.productOrder = 'name';
			$scope.productList = product.data;
			
		});

		/*$http.post(postProductURL).then(function (response){
			
			$scope.postProduct = { _id:$scope.products._id, name:$scope.name, sku:$scope.sku };
		});
		
		
		$scope.addProduct = function(){
			$scope.products.push({ _id:$scope.products._id, name:$scope.name, sku:$scope.sku });
		};*/
		
		
	});

allControllers.controller('ProductViewController',
	function ProductViewController($scope, $routeParams, $http){
		var postProductURL = 'https://api.mlab.com/api/1/databases/wondersign/collections/products/59644b3df36d286340b27f66?apiKey=B_o7qfV7j4diajcASjmKeB4sBzaBs76e';
		var productsURL = 'https://api.mlab.com/api/1/databases/wondersign/collections/products?apiKey=B_o7qfV7j4diajcASjmKeB4sBzaBs76e';
		var product = '';
		var ref, productList;
		$scope.query = '';
		$scope.whicproduct = $routeParams.mId;
		
		$http.get(productsURL).then(function(product) {
			$scope.productList = product.data;
			$scope.productOrder = 'name';
		})
		var _id = '';
		var name = '';
		var sku = '';
		
		
		$http.post(postProductURL).then(function (response){
			$scope.postProduct = { _id:$scope.products._id, name:$scope.name, sku:$scope.sku };
		});
		
	});
