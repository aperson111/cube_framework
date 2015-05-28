/*
 * 每个page的视图模型。每个page的index本身也是一个视图模板
 */
//页面视图模型绑定的数据内容

define(['sammy'], function(sammy) {
	
	var PageViewModel = function(params) {
		var self = this;
		
		//设置测试
		self.clockSize = cube.obj(200);
		self.curDate = cube.obj(new Date());
		self.setDateToToday = function(){
			self.curDate(new Date());
		}

		self.navItems = cube.arr([ {
			text : '首页',
			route : '#home',
			hasChildren : false
		}, {
			text : '线损菜单',
			route : '#linelossmenu',
			hasChildren : true,
			children : [
			   {
				   text : '省级统计',
				   route : '#linelossmenu/province'
			   },
			   {
				   text : '市级统计',
				   route : '#linelossmenu/city'
			   },
			   {
				   text : '县级统计',
				   route : '#linelossmenu/county'
			   }
			]
		}, {
			text : '统计售电',
			route : '#salestatistic',
			hasChildren : false
		}, {
			text : '降损措施上报',
			route : '#actionupload',
			hasChildren : false
		}]);

		self.currentNavItem  =  cube.obj(self.navItems()[0]);
		
		self.currentRoute = cube.comp(function(){
			return self.currentNavItem().route.substr(1);
		},self);
		
		//设置导航样式
		self.isShowNavDividerVertical = cube.obj(false);
		
		self.modifyNavRootItem = function(e) {
			alert("Navbar事件：当前选中为: "+e.text);
		}
		
		//测试内容：外部设置导航菜单项
		self.navItemOptions = cube.arr([
		                                {value:"#home",text:"首页"},
		                                {value:"#linelossmenu",text:"线损菜单"},
		                                {value:"#salestatistic",text:"统计售电"},
		                                {value:"#actionupload",text:"降损措施上报"}]);
		
		//修改事件
		self.modifyNavItem = function(e) {
			alert("Dropdownlist事件：当前选中为: "+e.text);
		}
		
		
		self.selectedNavDropdownItem = cube.compWritable({
			read: function(){
				var sel = null;
				$.each(self.navItemOptions(), function() {
					if(this.value == self.currentNavItem().route){
						sel= this;
					}
				});
				return sel;
			},
			write: function(value){
				$.each(self.navItems(),function() {
					if(this.route == value.value){
						self.currentNavItem(this);
						return;
					}
				});
			},
			owner: self});
	};
	
	return PageViewModel;
});
