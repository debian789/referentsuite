Referentsuite.View.Code = Backbone.View.extend({
	tagName : "div",
	
	className : "itemIngresadosCodigos lineaColorA ",

	events:{
		"click  h4 > a  ": "navegar"
	},

	template : Handlebars.compile($('#itemCode-template').html()),

	initialize: function(){
		this.listenTo(this.model, "change", this.render, this);
	},

	render: function(){
		var code = this.model.toJSON();
		var html = this.template(code);
		this.$el.html(html);
		//debugger;
		return this;

	},

	navegar: function(e){
		e.stopImmediatePropagation();
		e.preventDefault();
		Referentsuite.app.navigate("code/"+this.model.get("titulo"),{ trigger: true });
	}

});