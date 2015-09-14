// Instancia principal de la aplicación con inyección de dependencias
var libreria = angular.module('LibreriaApp', ['ngRoute']);

//Provider para la base de datos de toda la app
libreria.provider('database', [function() {
	var _db;		//Almacena la instancia de la BD

	return {
		setDatabase: function(dbname) {
			var my = this;		//Cambio de $scope, ahora "my" es local
			my._db = new Dexie(dbname);
		},
		getDatabase: function() {
			var my = this;
			return my._db;
		},
		$get: function() {
			var my = this;

			return {
				set: my.setDatabase(dbname),
				get: my.getDatabase()
			};
		}
	};

}]);

//Provider de libros para la estructura
libreria.provider('libros', [function() {
	var _tabla, //Almacena el nombre de la colección
			_data;	//Almacena la estructura del objeto a guardar

	return {
		setCollection: function(colname) {
			var my = this;
			my._tabla = colname;
		},
		getCollection: function() {
			var my = this;
			return my._tabla;
		},
		setData: function(data) {
			var my = this;
			my._data = data;
		},
		getData: function() {
			var my = this;
			return my._data;
		},
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

libreria.provider('categorias', [function() {
	var _tabla, _data;
	
	return {
		setCollection: function(colname) {
			var my = this;
			my._tabla = colname;
		},
		getCollection: function() {
			var my = this;
			return my._tabla;
		},
		setData: function(data) {
			var my = this;
			my._data = data;
		},
		getData: function() {
			var my = this;
			return my._data;
		},
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
