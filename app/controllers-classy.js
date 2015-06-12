var libreria = angular.module('LibreriaApp', ['ngRoute', 'classy']);

libreria.classy.controller({
	name: "TemplateCtrl",

	inject: ['$scope'],

	data: {
		templates: [
			{url : 'templates/menu_superior.html'},
			{url : 'templates/nuevo_libro.html'},
			{url : 'templates/nueva_categoria.html'},
			{url : 'templates/comprar.html'}
		]
	}
});

libreria.classy.controller({
	name: "CategoriasCtrl",

	inject: ['$scope', 'categorias'],

	data: {
		categorias: 'categorias.listaCategorias',
		S_categorias: 'categorias'
	},

	methods: {
		nombrarCategoria: function(id){
			return this.$.categorias[id-1].nombre
		},

		addCategoria: function(nombre){
			this.S_categorias.addCategoria(nombre);
		}
	}
});

libreria.classy.controller({
	name: "LibrosCtrl",

	inject: ['$scope', 'libreria', '$routeParams'],

	data: {
		listaLibros: 'libreria.listaLibros'
	},

	methods: {
		filtrarLibros: function(){
			return this.libreria.filtrarLibros(parseInt(this.$routeParams.categoria));
		}
	}
});
