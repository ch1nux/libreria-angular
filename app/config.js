var libreria = angular.module('LibreriaApp'); //Se instancia de manera global

libreria.config(['databaseProvider', 'librosProvider', 'categoriasProvider', function(databaseProvider, librosProvider, categoriasProvider){

	// Instanciación de la base de datos
	databaseProvider.setDatabase('libreria-angular');

	// Configuración de la colección "libros"
	librosProvider.setCollection('listaLibros');
	librosProvider.setData(
		{ titulo: '', autor: '', anio: 0,	categoria: 0,	precio: 0, inventario: 0,	existente: false }
	);
	
	// Configuración de la colección "categorías"
	categoriasProvider.setCollection('listaCategorias');
	categoriasProvider.setData(
		{ categoria: 0, nombre: '' }
	);

	var DB = databaseProvider.getDatabase(),	// Instancia de Dexie.js configurada
			config = {};													// Objeto de configuración de Dexie.js
	
	// config.listaLibros = { listaLibros: '++id, titulo, autor, anio, categoria, precio, inventario, existente' }
	config[librosProvider.getCollection()] = '++id, ' + Object.keys(librosProvider.getData()).join(', ');
	
	// config.listaCategorias = { listaCategorias: '++id, categoria, nombre' }
	// config[categoriasProvider.getCollection()] = '++id, ' + Object.keys(categoriasProvider.getData()).join(', ');

	// config = { listaLibros: '++id, ~...', listaCategorias: '++id, ~...' }
	DB.version(1).stores(config);

	// se expone la configuración y la instancia de Dexie.js
	return DB;

}]);