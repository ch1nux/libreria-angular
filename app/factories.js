var libreria = angular.module('LibreriaApp'); //Se instancia de manera global

libreria.factory('libreria', [function () {
	var libreria = {};

	libreria.listaLibros = [
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

	libreria.filtrarLibros = function(categoria){
		return libreria.listaLibros.filter(function(libro) {
			return libro.categoria === categoria;
		});
	}

	return libreria;
}]);

libreria.factory('categorias', [function() {
	var categorias = {};

	categorias.listaCategorias = [
		{categoria: 1, nombre: "Ciencia-Ficción"},
		{categoria: 2, nombre: "Romance"},
		{categoria: 3, nombre: "Histórica"},
		{categoria: 4, nombre: "Misterio"},
	];

	categorias.addCategoria = function(name){
		categorias.listaCategorias.push(
			{categoria: categorias.listaCategorias.length+1, nombre: name}
		);
	}

	return categorias;
}]);
