/*
 * 每个page的视图模型。每个page的index本身也是一个视图模板
 */
//页面视图模型绑定的数据内容

define(['./webpage'], function() {

	var PageViewModel = function() {
		var self = this;
		
		self.windowHeight = cube.obj();
		self.windowWidth = cube.obj();
		
		self.footHeight = 20;
	};
	
	var pvm = new PageViewModel();
	
	//并没能解决ie下模板加载的问题。仍然需要将模板写在最外层。
	$(window).resize(function(e) {
		pvm	.windowHeight($(e.target).height());
	});
	$(document).ready(function(e){
		pvm	.windowHeight($(window).height());
		cube.startWebPage(pvm);
	});
});
