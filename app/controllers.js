var libreria = angular.module('LibreriaApp'); //Se instancia de manera global

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
libreria.controller('CategoriasCtrl', ['$scope', 'catalogo', function($scope, catalogo) {

	$scope.categorias = catalogo.listaCategorias;

	$scope.nombrarCategoria = function(id){
		return $scope.categorias[id-1].nombre;
	};

	$scope.addCategoria = function(nombre){
		catalogo.addCategoria(nombre);
	};

}]);

//Controller para administrar los libros
libreria.controller('LibrosCtrl', ['$crud', '$scope', 'libreria', '$routeParams', function($crud, $scope, libreria, $routeParams) {

	$crud.vacio('listaLibros').then(function(counter) {
		if (counter == 0) {
			$crud.llenar('listaLibros', libreria.listaLibros, libreria.Libro);
		} else {
			console.log(counter);
		}
	});

	$crud.obtenerTodo('listaLibros').then(function(lista) {
		$scope.listaLibros = lista;
	});

	// $scope.listaLibros = libreria.listaLibros;

	$scope.filtrarLibros = function(){
		return libreria.filtrarLibros(parseInt($routeParams.categoria, 10));
	};

	$scope.addLibro = function(libro) {
		//TODO: Validación de campos vacíos e inconsistencia de valores
		if (typeof libro === "object"){
			libreria.addLibro(libro);
		} else {
			console.error("No se pudo insertar el libro!");
		}
	};

}]);
