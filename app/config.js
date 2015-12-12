var libreria = angular.module('LibreriaApp'); //Se instancia de manera global

libreria.value('$msg', 'Agregado a la lista!');

libreria.constant('DB', new Dexie('libreria-angular'));

libreria.config(['tablasProvider', 'DB', function (tablasProvider, DB) {

	var config = {},	// Objeto de configuración de la instancia de Dexie.js
			map = [
			{ tableName: 'listaLibros', tableData: { titulo: '', autor: '', anio: 0,	categoria: {/*indice: 0, nombre: ''*/},	precio: 0, inventario: 0,	existente: false } },
			{	tableName: 'listaCategorias',	tableData: { indice: 0, nombre: '' }	}]; // Mapa de configuración a ser almacenado

	/* Persistencia de la configuración en tablasProvider */
	angular.forEach(map, function (value, key) {
		tablasProvider.setCollectionToMap(key, value.tableName);
		tablasProvider.setDataToMap(key, value.tableData);
	});

	/* Sobreescritura de la configuración para Dexie.js */
	angular.forEach(tablasProvider.getMap(), function (value, key) {
		config[tablasProvider.getCollectionFromMap(key)] = '++id, ' + Object.keys(tablasProvider.getDataFromMap(key)).join(', ');
	});

	/* Configuración de la instancia de Dexie.js */
	DB.version(1).stores(config);

}]);