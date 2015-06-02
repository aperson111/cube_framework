define([], function() {
	
	WebPage = function(params) {
		var self = this;
		
		//当前webpage关联组件
		self.components = params.components == null? []: params.components;
		//当前webpage关联vvm
		self.vvms = params.vvms == null? []: params.vvms;
		
		//初始化
		self.init = function() {
			$.each(self.components,function(){
				cube.importComponent(this.toString());
			});
			$.each(self.vvms,function(){
				cube.loadSubWebPageVVM(this.toString());
			});
		};
		
		self.init();
		
	};
	
	return WebPage;
});