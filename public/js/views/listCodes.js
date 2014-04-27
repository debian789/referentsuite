Referentsuite.View.Codes = Backbone.View.extend({
	el:$("#itemCollection"),
	className:"js-masonry",
	initialize: function () {
		console.log("1c")
		this.listenTo(this.collection,"add", this.addOne, this);
	},
	render:function(){
		this.collection.forEach(this.addOne,this)
	},
	addOne: function(model){
		
		 var codeView = new Referentsuite.View.Code({ model: model });

		 this.$el.append(codeView.render().el);
	}
});