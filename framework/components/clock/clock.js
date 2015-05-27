define([], function() {

 	function clockViewModel(params) {
		var self = this;
		
		var date = new Date();
	
		self.time = params.time!=null ? params.time: 
			cube.obj({hh:date.getHours(),
			mm: date.getMinutes(),
			ss:date.getSeconds()}); //{hh:00,mm:00,ss:00}
		
		self.isSupportHtml5 = cube.isSupportHtml5();
		
		self.rootPath = rootPath; //从framework.js中获取
		
		var handWidthMax = 30;
		var clockWidthMax = 600;
		var centerLeftMax = 285;
		
		self.clockSize = params.clockSize!=null?params.clockSize:cube.obj(300);
		
		//字体大小计算
		self.fontSize = cube.comp(function(){
			return parseInt(self.clockSize() / 8);
		},self);
		//显示格式
		self.clockShowTime = cube.comp(function(){
			return (self.time().hh<10? '0'+self.time().hh : self.time().hh) + ": "+
			(self.time().mm<10? '0'+self.time().mm : self.time().mm) + ": "+
			(self.time().ss<10? '0'+self.time().ss : self.time().ss);
		},self);
		
		self.handWidth = cube.comp(function(){
			return self.clockSize() / clockWidthMax * handWidthMax;
		},self);
		self.centerLeft = cube.comp(function(){
			return centerLeftMax / clockWidthMax * self.clockSize();
		},self);
		
		//走时间
		self.runClock = window.setInterval(function(){
			var t = self.time();
			t.ss++;
			if(t.ss == 60) {
				t.ss =0;
				t.mm++;
				if(t.mm == 60) {
					t.mm = 0;
					t.hh++;
					if(t.hh == 24) {
						t.hh = 0;
					}
				}
			}
			self.time(t);
		},1000); 
		
	}
	return clockViewModel;
});