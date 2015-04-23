//Módulo principal de la aplicación
var libreria = angular.module('LibreriaApp', []);

//Controller para las categorías
libreria.controller('CategoriasCtrl', ['$scope', function($scope) {
	$scope.categorias = [
		{categoria: 1, nombre: "Ciencia-Ficción"},
		{categoria: 2, nombre: "Romance"},
		{categoria: 3, nombre: "Histórica"},
		{categoria: 4, nombre: "Misterio"},
	];
	$scope.nombrarCategoria = function(id){
		return $scope.categorias[id-1].nombre;
	};
}]);

//Controller para los libros
libreria.controller('LibrosCtrl', ['$scope', function($scope) {
	$scope.listaLibros = [
		{
			titulo: "Lo que el viento se llevó",
			autor: "Margaret Mitchell",
			anio: "1936",
			categoria: 3,
			precio: 575,
			inventario: 0,
			existente: false
		},
		{
			titulo: "El Ocho",
			autor: "Katherine Neville",
			anio: "1988",
			categoria: 4,
			precio: 850,
			inventario: 41,
			existente: true
		},
		{
			titulo: "Bajo La Misma Estrella",
			autor: "John Green",
			anio: "2012",
			categoria: 2,
			precio: 1290,
			inventario: 0,
			existente: false
		},
		{
			titulo: "Fundación",
			autor: "Isaac Asimov",
			anio: "1951",
			categoria: 1,
			precio: 1950,
			inventario: 9,
			existente: true
		}
	];
}]);
