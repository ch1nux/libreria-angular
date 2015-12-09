var libreria = angular.module('LibreriaApp'); //Se instancia de manera global

libreria.service('$crud', ['$q', '$DB', function($q, $DB) {

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * $DB es el valor que almacena la instancia de la base de datos creado desde
	 * la etapa de configuracion
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	// Instancia del API Promises Q+ de Angular
	var _q = $q.defer();

	this.vacio = function(tabla){
		$DB.open();
		$DB.table(tabla).count(function(data){
			_q.resolve(data); // Número de objetos existentes en la BD
		});
		$DB.close();
		return _q.promise;
	};

	this.llenar = function(tabla, datos, Clase){
		$DB.open();
		for (var i = 0; i < datos.length; i++) {
			$DB.table(tabla).put(new Clase(datos[0])).then(function(data){
				_q.resolve(data); // Número de objetos insertados en la BD
			});
		};
		$DB.close();
		return _q.promise;
	};

	this.agregar = function(tabla, item, Clase){
		$DB.open();
		$DB.table(tabla).add(new Clase(item)).then(function(data){
			_q.resolve(data); // Número de objetos insertados en la BD
		});
		$DB.close();
		return _q.promise;
	};

	this.modificar = function(tabla, id, data, Clase){
		$DB.open();
		$DB.table(tabla).update(id, new Clase(data)).then(function(counter){
			_q.resolve(counter); // Número de modificaciones realizadas
		});
		$DB.close();
		return _q.promise;
	};

	this.obtenerTodo = function(tabla){
		$DB.open();
		$DB.table(tabla).toArray(function(data){
			_q.resolve(data); // Array con todos los elementos en la BD
		});
		$DB.close();
		return _q.promise;
	};

	this.obtenerUno = function(tabla, id){
		$DB.open();
		$DB.table(tabla).where('id').equals(id).toArray(function(data){
			_q.resolve(data); // Array con el elemento obtenido por clave
		});
		$DB.close();
		return _q.promise;
	};

	this.eliminarUno = function(tabla, id){
		$DB.open();
		$DB.table(tabla).where('id').equals(id).delete()
			.then(function(data){
				_q.resolve(data); // Número de elementos eliminados con éxito
			});
		$DB.close();
		return _q.promise;
	};

}]);
