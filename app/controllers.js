//Módulo principal de la aplicación, con Inyección de Dependencias
var libreria = angular.module('LibreriaApp', ['ngRoute']);

//Controller para administrar los templates
libreria.controller('TemplateCtrl', ['$scope', function($scope) {
	var rootDir = 'templates/';
	$scope.templates = [
		{url : rootDir+'menu_superior.html'},
		{url : rootDir+'nuevo_libro.html'},
		{url : rootDir+'nueva_categoria.html'},
		{url : rootDir+'comprar.html'}
	];
}]);

//Controller para administrar las categorías
libreria.controller('CategoriasCtrl', ['$scope', 'categorias', function($scope, categorias) {
	$scope.categorias = categorias.listaCategorias;

	$scope.nombrarCategoria = function(id){
		return $scope.categorias[id-1].nombre;
	};

	$scope.addCategoria = function(nombre){
		categorias.addCategoria(nombre);
	}

}]);

//Controller para administrar los libros
libreria.controller('LibrosCtrl', ['$scope', 'libreria', '$routeParams', function($scope, libreria, $routeParams) {
	$scope.listaLibros = libreria.listaLibros;

	$scope.filtrarLibros = function(){
		return libreria.filtrarLibros(parseInt($routeParams.categoria));
	};

}]);
