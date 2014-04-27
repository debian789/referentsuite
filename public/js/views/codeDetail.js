Referentsuite.View.CodeDetails = Backbone.View.extend({
	//tagName: "article",
	//className:"detalles",
	el:$(".detalles"),
	events:{

	},
	template : Handlebars.compile($("#itemCodeDetails-template").html()),

	initialize: function(){
		this.listenTo(this.model,"change",this.render,this);
	},

	render:function(){

		var code = this.model.toJSON();
		var html = this.template(code);
		//debugger;
		//this.$el.html(html);
		this.$el.html( html );
		// this.$el.append(codeView.render().el);
		//return this; 
	}

});