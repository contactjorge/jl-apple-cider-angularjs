/*
 * Jorge L Lopez
 * lottoGame.js for generating a random Lotto number
 * Created: 01/20/2018
 * Updated: 01/20/2018
 * Version: 1.0
 */

var jlApp = angular.module('jlApp',
	['ngRoute',
	'allControllers']);

jlApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'views/home.html',
		controller: 'ProductsController'
	}).
	when('/products', {
		templateUrl: 'views/products.html',
		controller: 'ProductsController'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);

/*when('/product/:uId/:mId', {
		templateUrl: 'views/product.html',
		controller: 'ProductsController'
	}).
	when('/product/:uId/:mId/checkinsList', {
		templateUrl: 'views/product.html',
		controller: 'ProductsController'
	}).*/