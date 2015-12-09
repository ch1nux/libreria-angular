var libreria = angular.module('LibreriaApp'); //Se instancia de manera global

librería.value('$DB', new Dexie('libreria-angular'));

libreria.config(['tablasProvider', '$DB', function (tablasProvider, $DB) {

	var config = {};	// Objeto de configuración de Dexie.js

	// Instanciación de la base de datos
	// databaseProvider.setDatabase('libreria-angular');

	// Configuración de la colección "libros"
	tablasProvider.setCollection('listaLibros');
	librosProvider.setData(
		{ titulo: '', autor: '', anio: 0,	categoria: 0,	precio: 0, inventario: 0,	existente: false }
	);

	// config.listaLibros = { listaLibros: '++id, titulo, autor, anio, categoria, precio, inventario, existente' }
	config[tablasProvider.getCollection()] = '++id, ' + Object.keys(tablasProvider.getData()).join(', ');

	// Configuración de la colección "categorías"
	tablasProvider.setCollection('listaCategorias');
	tablasProvider.setData(
		{ categoria: 0, nombre: '' }
	);

	// config.listaCategorias = { listaCategorias: '++id, categoria, nombre' }
	config[tablasProvider.getCollection()] = '++id, ' + Object.keys(tablasProvider.getData()).join(', ');

	$DB.version(1).stores(config);

	// Instancia de Dexie.js configurada globalmente en $rootScope
	// this.$DB = databaseProvider.getDatabase();

	// config = { listaLibros: '++id, ~...', listaCategorias: '++id, ~...' }
	// this.$DB.version(1).stores(config);

}]);