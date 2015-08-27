//Módulo principal de la aplicación, con Inyección de Dependencias
var libreria = angular.module('LibreriaApp', ['ngRoute']);

//Controller para administrar los templates
libreria.controller('TemplateCtrl', ['$scope', function($scope) {
	var rootDir = 'templates/';
	$scope.templates = [
		{url: rootDir+'menu_superior.html'},		//templates[0]
		{url: rootDir+'nuevo_libro.html'},			//templates[1]
		{url: rootDir+'nueva_categoria.html'},	//templates[2]
		{url: rootDir+'comprar.html'}						//templates[3]
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
	};

}]);

//Controller para administrar los libros
libreria.controller('LibrosCtrl', ['$scope', 'libreria', '$routeParams', function($scope, libreria, $routeParams) {

	$scope.listaLibros = libreria.listaLibros;

	$scope.filtrarLibros = function(){
		return libreria.filtrarLibros(parseInt($routeParams.categoria, 10));
	};

	$scope.addLibro = function(libro) {
		//TODO: Validación de campos vacíos e inconsistencia de valores
		if (typeof libro === "object"){
			libreria.addLibro(libro);
		} else {
			console.log("No se pudo insertar el libro!");
		}
	};

}]);
