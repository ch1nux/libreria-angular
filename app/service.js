var libreria = angular.module('LibreriaApp'); //Se instancia de manera global

libreria.service('$crud', ['$q', 'DB', 'libreria', 'catalogo', function ($q, DB, libreria, catalogo) {

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * DB es una constante que almacena la instancia de la base de datos creada
	 * desde la etapa de configuracion
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	//Cambio de scope, ahora es local
	var self = this;

	self.llenar = function (tabla, datos, Clase) {
		DB.open();
		var _q = $q.defer(); // Instancia del API Promises Q+ de Angular
		for (var i = 0; i < datos.length; i++) {
			DB.table(tabla).put(new Clase(datos[i])).then(function (counter) {
				_q.resolve(counter); // Número de objetos insertados en la BD
			});
		};
		DB.close();
		return _q.promise;
	};

	self.agregar = function (tabla, item, Clase) {
		DB.open();
		var _q = $q.defer();
		DB.table(tabla).add(new Clase(item)).then(function (counter) {
			_q.resolve(counter); // Número de objetos insertados en la BD
		});
		DB.close();
		return _q.promise;
	};

	self.obtenerTodo = function (tabla) {
		DB.open();
		var _q = $q.defer();
		DB.table(tabla).toArray(function (data) {
			_q.resolve(data); // Array con todos los elementos en la BD
		});
		DB.close();
		return _q.promise;
	};

	/* Llenar ambas tablas */
	var P = [
		self.obtenerTodo('listaLibros'), 		// [0]
		self.obtenerTodo('listaCategorias') // [1]
	];

	$q.all(P).then(function (data) {
		if (data[0].length == 0) { // LLenar tabla listaLibros
			self.llenar('listaLibros', libreria.listaLibros, libreria.Libro);
		}
		if (data[1].length == 0) { // Llenar tabla listaCategorias
			self.llenar('listaCategorias', catalogo.listaCategorias, catalogo.Categoria);
		}
	});

}]);
