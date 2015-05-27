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
			hasChildren : false,
			children : [],
			isActive : cube.obj(),
			bottomUp : cube.obj(false),
			isOpen : cube.obj(false)
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
			],
			isActive : cube.obj(),
			bottomUp : cube.obj(false),
			isOpen : cube.obj(false)
		}, {
			text : '统计售电',
			route : '#salestatistic',
			hasChildren : false,
			children : [],
			isActive : cube.obj(),
			bottomUp : cube.obj(false),
			isOpen : cube.obj(false)
		}, {
			text : '降损措施上报',
			route : '#actionupload',
			hasChildren : false,
			children : [],
			isActive : cube.obj(),
			bottomUp : cube.obj(false),
			isOpen : cube.obj(false)
		}]);

		$.each(self.navItems(), function() {
			this.doOpen = function() {
				if (this.hasChildren)
					this.isOpen(true);
				this.isActive(true);
			}
			this.doClose = function() {
				if (this.hasChildren)
					this.isOpen(false);
				this.isActive(false);
			}
		});

		self.currentNavRoute  =  cube.obj(self.navItems()[0]);
		self.currentRoute = cube.obj(self.currentNavRoute().route.substr(1));
		
		var sammyapp = $.sammy(function() {
        
        this.notFound = function(verb, path) {
        	self.currentRoute(self.navItems()[0].route.substr(1));
        };
        
        this.get('#:view',function() {
        	self.currentRoute(this.params.view);
        });
        
    });

    sammyapp.run();
			
	};
	
	return PageViewModel;
});
