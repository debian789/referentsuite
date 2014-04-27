Referentsuite.Router = Backbone.Router.extend({
	routes: {
		"":"index",
		"code/:name":"code",
		"new" : "createCode"
	},

	initialize: function(){
		this.current = {};
		this.jsonData = {};

		this.createCode = new Referentsuite.View.CreateCode($('.ingresoCodigo'));
		this.codesColections = new Referentsuite.Collections.Codes();
		this.codeViewDetails = new Referentsuite.View.CodeDetails({ model: new Referentsuite.Models.Code() });
		this.codesLists = new Referentsuite.View.Codes({ collection: this.codesColections });

		Backbone.history.start();
	},

	index: function(){
		this.codeViewDetails.$el.hide();
		this.codesLists.$el.show();
		
		this.Datos();
	},

	code:function(name){
		//debugger;
		this.codeViewDetails.$el.show();
		this.codesLists.$el.hide();

		self = this;
		if (Object.keys(this.jsonData).length === 0) {
			var self = this;

			this.Datos().done(function () {
				self.loandingData(name);
			});

		} else {
			this.loandingData(name);
		}
	},

	Datos:function(){
		self = this;
		return $.getJSON('codes').then(function (data) {
			self.jsonData = data;
			_.each(data,function(dat){
				self.addCode(dat);

			});
		});
	},

	loandingData : function(name ){
//debugger;

// this.codesColections.models.forEach(function(data){
// 	debugger;
// 		if( _.isEqual( _.str.trim( data.get('titulo')),name) ){
// 				self.detailCode(data);
// 				//return false;
// 				return  false;
// 			}

// })
		_.each(this.codesColections.models,function(d){ 
			//debugger;
			//optimizar para cuando lo encuentre termine la ejecuccion
			if( _.isEqual( _.str.trim( d.get('titulo')),name) ){
				self.detailCode(d);
				return true;
				//return _.find();
			}
		});	
	},

	detailCode : function(item){
		//this.imagenesCollection.reset();
		this.codeViewDetails.model.set(item.toJSON());  
	},

	addCode:function(data){
		//debugger;
		this.codesColections.add(new Referentsuite.Models.Codes ({
			titulo:data.titulo,
			descripcion:data.descripcion,
			lenguaje:data.lenguaje
		}));
	},
	createCode:function(){

	}


});