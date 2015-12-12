// Instancia principal de la aplicación con inyección de dependencias
var libreria = angular.module('LibreriaApp', ['ngRoute']);

//Provider de tablas para la estructura de la base de datos
libreria.provider('tablas', [function() {
	var self = this; // cambio de scope, "this" ahora es local
	self._map = [];
	/*
	[
		{
			_tableName: 'nombre de la colección',
			_tableData: {'objeto de la estructura de los índices de la colección'}
		}, ...
	]
	*/
	return {
		//Configura el nombre de la colección
		setCollectionToMap: function(key, name) {
			try {
				self._map[key]._tableName = name;
			} catch (e) { // TypeError si no existe el índice
				self._map.push({});
				self._map[key]._tableName = name;
			}
		},
		//Obtiene el nombre de la colección
		getCollectionFromMap: function(key) {
			try {
				return self._map[key]._tableName;
			} catch (e) {
				console.error('El índice especificado no existe');
			}
		},
		//Configura la estructura de los índices
		setDataToMap: function(key, data) {
			try {
				self._map[key]._tableData = data;
			} catch (e) {
				self._map.push({});
				self._map[key]._tableData = data;
			}
		},
		//Obtiene la estructura de los índices
		getDataFromMap: function(key) {
			try{
				return self._map[key]._tableData;
			} catch (e) {
				console.error('El índice especificado no existe');
			}
		},
		getMap: function() {
			return self._map;
		},
		//Método proveedor que registra y revela los métodos del provider
		$get: function() {
			return {
				setCollectionToMap: self.setCollectionToMap(key, name),
				getCollectionFromMap: self.getCollectionFromMap(key),
				setDataToMap: self.setDataToMap(key, data),
				getDataFromMap: self.getDataToMap(key),
				getMap: self.getMap()
			};
		}
	};

}]);