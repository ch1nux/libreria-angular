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

	libreria.filtrarLibros = function(categoria) {
		return libreria.listaLibros.filter(function(libro) {
			return libro.categoria === categoria;
		});
	};

	libreria.addLibro = function(libro) {
		//propiedad que define la visualización del botón "Comprar"
		libro.existente = libro.existente || libro.inventario > 0 ? true : false;
		libreria.listaLibros.push(libro);
	};

	return libreria;
}]);

libreria.factory('catalogo', [function() {
	var catalogo = {};

	catalogo.Categoria = function (o) {
		this.categoria = o.categoria;
		this.nombre = o.nombre;
	};

	catalogo.listaCategorias = [
		{categoria: 1, nombre: "Ciencia-Ficción"},
		{categoria: 2, nombre: "Romance"},
		{categoria: 3, nombre: "Histórica"},
		{categoria: 4, nombre: "Misterio"},
	];

	catalogo.addCategoria = function(name){
		catalogo.listaCategorias.push(
			{categoria: catalogo.listaCategorias.length+1, nombre: name}
		);
	};

	return catalogo;
}]);
