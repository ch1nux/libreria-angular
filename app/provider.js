// Instancia principal de la aplicación con inyección de dependencias
var libreria = angular.module('LibreriaApp', ['ngRoute']);

// //Provider para la base de datos de toda la app
// libreria.provider('database', [function() {
// 	var my = this;		//Cambio de $scope, ahora "my" es local
// 	my._db = null;		//Almacena la instancia de base de datos

// 	return {
// 		setDatabase: function(dbname) {
// 			my._db = new Dexie(dbname);
// 		},
// 		getDatabase: function() {
// 			return my._db;
// 		},
// 		$get: function() {
// 			return {
// 				set: my.setDatabase(dbname),
// 				get: my.getDatabase()
// 			};
// 		}
// 	};

// }]);

//Provider de libros para la estructura
libreria.provider('tablas', [function() {
	var _tabla, //Almacena el nombre de la colección
			_data;	//Almacena la estructura del objeto a guardar

	return {
		//Configura el nombre de la colección
		setCollection: function(colname) {
			var my = this;
			my._tabla = colname;
		},
		//Obtiene el nombre de la colección
		getCollection: function() {
			var my = this;
			return my._tabla;
		},
		//Configura la estructura de los índices
		setData: function(data) {
			var my = this;
			my._data = data;
		},
		//Obtiene la estructura de los índices
		getData: function() {
			var my = this;
			return my._data;
		},
		//Método proveedor que registra y revela los métodos del provider
		$get: function() {
			var my = this;

			return {
				setCollection: my.setCollection(colname),
				getCollection: my.getCollection(),
				setData: my.setData(data),
				getData: my.getData()
			};
		}
	};

}]);