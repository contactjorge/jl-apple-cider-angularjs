var allControllers = angular.module('allControllers', []);

allControllers.controller('NavController',
	function NavController($scope){
		$scope.navBar = {
			links: {
				link1: {
					name: 'Home',
					url: 'http://thejorgelopez.com'
				},
				link2: {
					name: 'About',
					url: 'http://thejorgelopez.com'
				}
			}
		}
	});

allControllers.controller('HomeController',
	function HomeController($scope, $http){
		$scope.HomeMessage = {
		
		}
		var productRequest = {
			method: 'get',
			url: 'https://api.mlab.com/api/1/databases/wondersign/collections/products?apiKey=B_o7qfV7j4diajcASjmKeB4sBzaBs76e',
			dataType: 'json',
			contentType: "application/json"
		};
	});


allControllers.controller('ProductController',
	function ProductController($scope, $http){
	var products = 'https://api.mlab.com/api/1/databases/wondersign/collections/products?apiKey=B_o7qfV7j4diajcASjmKeB4sBzaBs76e';
	$http.get(products).success(function (products){
			$scope.products = products;
		});
		
		$scope.addProduct = function(){
			$scope.person.push({ prod_id:$scope._id, prodName:$scope.name, prodSku:$scope.sku });
		};
		
		$scope.getAllProducts = function(){
			return $scope.products.length;
		};
		
		
	});

allControllers.controller('PeopleController',
	function PeopleController($scope){
		$http.get('https://api.mlab.com/api/1/databases/wondersign/collections/products?apiKey=B_o7qfV\n' +
			'7j4diajcASjmKeB4sBzaBs76e').success(function (data){
			$scope.peoples = data;
		});
		$scope.function = {
		
		}
		
		
		$scope.arrPeople  = new Array;
		$http(request)
			.success(function (jsonData){
				$scope.arrPeople = jsonData;
				$scope.list = $scope.arrPeople;
			})
		
	});