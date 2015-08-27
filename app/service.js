var libreria = angular.module('LibreriaApp'); //Se instancia de manera global

libreria.service('$crud', ['$q', function($q) {

	// Instancia de Dexie
	var _db = new Dexie('libreria-angular');

	// Estructura prototipo del objeto Libro
	var _Libro = function(o){
		this.titulo = o.titulo;
		this.autor = o.autor;
		this.anio = o.anio;
		this.categoria = o.categoria;
		this.precio = o.precio;
		this.inventario = o.inventario;
		this.existente = o.existente;
	};

	// TODO: Configuración genérica del esquema con $provide
	_db.version(1)
		.stores({
			listaLibros: '++id, titulo, autor, anio, categoria, precio, inventario, existente'
		});

	//Abrir conexión con BD ~ Cerrar conexión con BD
	var _abrir = function(){ _db.open(); };
	var _cerrar = function(){ _db.close(); };

	// Instancia del API Promises Q+ de Angular
	var _q = $q.defer();

	this.agregar = function(data){
		_abrir();
		_db.listaLibros.put(new _Libro(data)).then(function(data){
			_q.resolve(data); // Número de objetos insertados en la BD
		});
		_cerrar();
		return _q.promise;
	};

	this.modificar = function(id, data){
		_abrir();
		_db.listaLibros.update(id, new _Libro(data)).then(function(data){
			_q.resolve(data); // Número de modificaciones realizadas
		});
		_cerrar();
		return _q.promise;
	};

	this.obtenerTodo = function(){
		_abrir();
		_db.listaLibros.toArray(function(data){
			_q.resolve(data); // Array con todos los elementos en la BD
		});
		_cerrar();
		return _q.promise;
	};

	this.obtenerUno = function(id){
		_abrir();
		_db.listaLibros.where('id').equals(id).toArray(function(data){
			_q.resolve(data); // Array con el elemento obtenido por clave
		});
		_cerrar();
		return _q.promise;
	};

	this.eliminarUno = function(id){
		_abrir();
		_db.listaLibros.where('id').equals(id).delete()
			.then(function(data){
				_q.resolve(data); // Número de elementos eliminados con éxito
			});
		_cerrar();
		return _q.promise;
	};

}]);
