var libreria = angular.module('LibreriaApp') //Se instancia de manera global

//Controller para administrar los templates
libreria.controller('TemplateCtrl', ['$scope', function ($scope) {
	var rootDir = 'templates/';
	$scope.templates = [
		{url: rootDir+'menu_superior.html'},		//templates[0]
		{url: rootDir+'nuevo_libro.html'},			//templates[1]
		{url: rootDir+'nueva_categoria.html'},	//templates[2]
		{url: rootDir+'comprar.html'},					//templates[3]
		{url: rootDir+'aviso.html'}							//templates[4]
	];
}]);

//Controller para administrar las categorías
libreria.controller('CategoriasCtrl', ['$crud', '$scope', 'catalogo', function ($crud, $scope, catalogo) {

	$scope.listaCategorias = [];
	$scope.totalCategorias = 0;

	var Pc = $crud.obtenerTodo('listaCategorias');
	Pc.then(function (array) {
		$scope.listaCategorias = array;
		$scope.totalCategorias = array.length;
	});

	$scope.addCategoria = function(nombre){
		var categoria = {indice: $scope.totalCategorias, nombre: nombre};
		Pc = $crud.agregar('listaCategorias', categoria, catalogo.Categoria);
		catalogo.listaCategorias.push(categoria);
		Pc.then(function (counter){
			$('#aviso').modal(); //Código jQuery
		});
	};
}]);

//Controller para administrar los libros
libreria.controller('LibrosCtrl', ['$crud', '$scope', '$routeParams', 'libreria', function ($crud, $scope, $routeParams, libreria) {

	$scope.listaLibros = [];

	var Pl = $crud.obtenerTodo('listaLibros');
	Pl.then(function (array) {
		if ($routeParams.indice) {
			$scope.listaLibros = array.filter(function(libro) {
				return libro.categoria.indice === parseInt($routeParams.indice, 10);
			});
		} else {
			$scope.listaLibros = array;
		}
	});

	$scope.addLibro = function(libro) {
		if (typeof libro === "object") {
			libro.existente = libro.existente || libro.inventario > 0 ? true : false;
			var c = libro.categoria;
			Pl = $crud.obtenerTodo('listaCategorias');
			Pl.then(function (array){
				libro.categoria = array.filter(function (categoria) {
					return categoria.indice === c;
				})[0];
				Pl = $crud.agregar('listaLibros', libro, libreria.Libro);
				Pl.then(function (counter) {
					$('#aviso').modal();
				});
			});
		}
	};
}]);

libreria.controller('AvisoCtrl', ['$scope', '$msg', function ($scope, $msg) {
	$scope.mensaje = $msg;
}]);
