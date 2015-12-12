var libreria = angular.module('LibreriaApp'); //Se instancia de manera global

libreria.factory('libreria', [function () {
	var libreria = {};

	libreria.Libro = function(o) {
		this.titulo = o.titulo;
		this.autor = o.autor;
		this.anio = o.anio;
		this.categoria = o.categoria;
		this.precio = o.precio;
		this.inventario = o.inventario;
		this.existente = o.existente;
	}

	//Lista estática de libros
	libreria.listaLibros = [
		{
			titulo: "Lo que el viento se llevó",
			autor: "Margaret Mitchell",
			anio: "1936",
			categoria: { indice: 2, nombre: "Historica" },
			precio: 575,
			inventario: 0,
			existente: false
		},
		{
			titulo: "El Ocho",
			autor: "Katherine Neville",
			anio: "1988",
			categoria: { indice: 3, nombre: "Misterio"},
			precio: 850,
			inventario: 41,
			existente: true
		},
		{
			titulo: "Bajo La Misma Estrella",
			autor: "John Green",
			anio: "2012",
			categoria: { indice: 1, nombre: "Romance"},
			precio: 1290,
			inventario: 0,
			existente: false
		},
		{
			titulo: "Fundación",
			autor: "Isaac Asimov",
			anio: "1951",
			categoria: { indice: 0, nombre: "Ciencia-Ficcion"},
			precio: 1950,
			inventario: 9,
			existente: true
		}
	];

	return libreria;
}]);

libreria.factory('catalogo', [function() {
	var catalogo = {};

	catalogo.Categoria = function (o) {
		this.indice = o.indice;
		this.nombre = o.nombre;
	};

	catalogo.listaCategorias = [
		{indice: 0, nombre: "Ciencia-Ficcion"},
		{indice: 1, nombre: "Romance"},
		{indice: 2, nombre: "Historica"},
		{indice: 3, nombre: "Misterio"},
	];

	return catalogo;
}]);
