Referentsuite.View.CreateCode = Backbone.View.extend({
	events:{
		"submit form":"createCode"
	},
	initialize:function(formulario){
		this.$el= formulario;
		//debugger;
	},
	createCode:function(e){
		e.preventDefault();
		debugger;
		var titulo = $("input[name=titulo]").val();
		var url = $("input[name=links]").val();
		var lenguaje = $("select[name=lenguaje]").val();
		var descripcion = $("textarea[name=descripcion]").val();
		var codigo = $("textarea[name=codigo]").val();




		var dataCode = {
			"titulo":titulo,
			"url":url,
			"lenguaje":	lenguaje	,
			"descripcion":	descripcion	,
			"codigo":codigo	
		};

		var model = new  Referentsuite.Models.Code(dataCode);
		//debugger;

		model.save();

	}
});