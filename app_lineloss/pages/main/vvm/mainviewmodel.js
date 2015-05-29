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
				   route : '#linelossmenu/province_statistic'
			   },
			   {
				   text : '市级统计',
				   route : '#linelossmenu/city_statistic'
			   },
			   {
				   text : '县级统计',
				   route : '#linelossmenu/county_statistic'
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
		
		self.currentNavRoute = cube.obj(self.navItems()[0].route);
		
		//设置导航样式
		self.isShowNavDividerVertical = cube.obj(false);
		
		self.firstRoute = cube.obj(self.currentNavRoute());
		self.secondTabRoute = cube.obj();
		
		self.modifyNavRootItem = function(e) {
			if(DEBUG_MODE)
				alert("Navbar事件：当前选中为: "+e.text);
			self.firstRoute(e.route.split('/')[0]);
			
			if(self.currentNavRoute().indexOf('#linelossmenu')>-1)
			{
				if(e.route.split('/').length==1) {
					self.secondTabRoute('province_statistic');
				}else if(e.route.split('/').length==2) {
					self.secondTabRoute(e.route.split('/')[1]);
				}
			}
		}
		
		//测试内容：外部设置导航菜单项
		self.navItemOptions = cube.arr([
		                                {value:"#home",text:"首页"},
		                                {value:"#linelossmenu",text:"线损菜单"},
		                                {value:"#salestatistic",text:"统计售电"},
		                                {value:"#actionupload",text:"降损措施上报"}]);
		
		//修改事件
		self.modifyNavDropdownItem = function(e) {
			if(DEBUG_MODE)
				alert("Dropdownlist事件：当前选中为: "+e.text);
			self.currentNavRoute(e.value);
		}
		
		//测试内容：导航条交互下拉框选中值
		//self.currentNavRoute = cube.obj(self.navItemOptions()[0].value);
	};
	
	return PageViewModel;
});
