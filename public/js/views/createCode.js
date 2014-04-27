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
		var titulo = $("input[name=titulo]").val();

		var dataCode = {
			"titulo":titulo
		};

		var model = new  Referentsuite.Models.Code(dataCode);
		//debugger;

		//model.save();

	}
});