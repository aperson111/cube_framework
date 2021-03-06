﻿define([], function() {

	/**
	 * 导航条
	 * navTitle:   			导航的标题，在导航条最左侧显示。			可选。
	 	items: 					导航条内容。								必须。
	 	isSplit:				下拉框是否为分裂模式，默认为非分裂模式。	可选。
	 	selectedRoute:				当前选中的导航条。					可选。注意：如果外部希望得到该值，则该参数为必须。	
	 	isShowDividerVertical:	是否显示导航条分隔符。					可选。	
	 	selectedChanged:		选中变更事件
	 	isFixTop:				是否上方悬浮								可选，默认不悬浮
	 	isInverse:				是否反向显示								可选。默认不反向。
	 	isHrefRoute:            是否设置锚定值
	 */
 	function navbarViewModel(params) {
		var self = this;
		
		//***********************************************************
		//开始初始化视图模型数据**************************************
		//***********************************************************	
		
		//导航标题。默认为空
		self.navTitle = cube.initComponentProperty(params.navTitle,"", 'obj');
		
		//导航条内容
		self.items = cube.initComponentProperty(params.items, [], 'arr');//params.items;
		
		//是否显示导航条分隔符，默认显示
		self.isShowDividerVertical = cube.initComponentProperty(params.isShowDividerVertical, false, 'obj');
		
		//选中路由
		self.selectedRoute = cube.initComponentProperty(params.selectedRoute, self.items()[0].route, 'obj');
		
		//是否在上方悬浮
		self.isFixTop = cube.initComponentProperty(params.isFixTop, false, 'obj');
		
		//是否反向显示
		self.isInverse = cube.initComponentProperty(params.isInverse, false, 'obj');
		
		//是否设置锚定值
		self.isHrefRoute = cube.initComponentProperty(params.isHrefRoute, true, 'obj');
		
		//内部视图模型属性，当前选中项
		//然后由于navbar有多层，通过compute方法，然后遍历获取，会影响效率。
		//但是如果把selectedItem作为外部的属性，在外部通过route来定位选中的bar，还是需要索引，所以不如在这里完成。
		//当selectedroute改变时，knockout的执行顺序为先执行computed，然后执行subscribe。符合要求。
		self.selectedItem = cube.comp(function(){
			var sel = null;
			$.each(self.items(),function(){
				if(this.hasChildren==true) {
					$.each(this.children,function(){
						if(self.selectedRoute() == this.route) {
							sel= this;
							return;
						}
					});
				}
				if(sel != null) {
					return sel;
				}
					
				if(sel == null &&  self.selectedRoute() == this.route) {
					sel= this;
					return;
				}
			});
			return sel;
		},self);

		//选中变化处理事件。
		self.selectedChanged = params.selectedChanged!= null? params.selectedChanged : null;
		
		//内部视图模型属性。鼠标经过菜单项，为hover样式。
		self.hoverItem = cube.obj();
		//***********************************************************
		//结束初始化视图模型数据**************************************
		//***********************************************************	

		//***********************************************************
		//开始事件处理************************************************
		//***********************************************************
		//设置选中导航项
		self.setSelectRoute = function() {
			self.selectedRoute(this.route);
		}
		//如果有子菜单，显示子菜单
		self.openSubItems = function() {
			self.hoverItem(this);
		}
		//如果没有子菜单，隐藏子菜单
		self.closeSubItems = function() {
			self.hoverItem(null);
		}
		//***********************************************************
		//结束事件处理************************************************
		//***********************************************************
		
		//***********************************************************
		//开始外部事件处理************************************************
		//***********************************************************
		//调用外部的selectedChange事件
		self.selectedRoute.subscribe(function(newValue) {
			if(self.selectedChanged!=null) {
				self.selectedChanged(self.selectedItem());
			}
			if(self.isHrefRoute()) {
				window.location.hash = newValue;
			}
		});
		//***********************************************************
		//结束外部事件处理************************************************
		//***********************************************************
	}
	return navbarViewModel;
});