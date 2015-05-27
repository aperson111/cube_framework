/*
 * 每个page的视图模型。每个page的index本身也是一个视图模板
 */
//页面视图模型绑定的数据内容

define(['./webpage'], function() {

	var PageViewModel = function() {
		var self = this;
		
		self.navItems = cube.arr([
        	{
        		text:'首页',route:'#home',hasChildren:false,children:[],
        		isActive:cube.obj(),bottomUp:cube.obj(false),isOpen : cube.obj(false)
        	},
        	{
        		text:'线损菜单',route:'#linelossmenu',hasChildren:false,children:[],
        		isActive:cube.obj(),bottomUp:cube.obj(false),isOpen : cube.obj(false)
        	}
		]);
		
		$.each(self.navItems(),function(){
			this.doOpen = function() {
				if(this.hasChildren) this.isOpen(true);
				this.isActive(true);
			}
			this.doClose = function() {
				if(this.hasChildren) this.isOpen(false);
				this.isActive(false);
			}
		});
		
		self.currentNavRoute = cube.obj(self.navItems()[0]);
	};
	
	var pvm = new PageViewModel();
	
	cube.startWebPage(pvm);
});
