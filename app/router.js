var libreria = angular.module('LibreriaApp') //Se instancia de manera global

libreria.config(['$routeProvider', function($routeProvider) {
	var rootDir = 'templates';
	$routeProvider
		.when('/', {
			templateUrl: rootDir+'/libros.html',
			controller: 'LibrosCtrl'
		})
		.when('/categorias/:indice', {
			templateUrl: rootDir+'/libros.html',
			controller: 'LibrosCtrl'
		})
		.otherwise({ redirectTo: '/' });
}]);
