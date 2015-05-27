define([], function() {
	var PageViewModel = function(params) {
		var self = this;
		
		if(params.curDate == null) {
			var date = new Date();
			self.calendarDate = cube.obj(date);
		} else {
			self.calendarDate = params.curDate;
		}
		
		self.curTime = cube.obj({hh:self.calendarDate().getHours(),
			mm: self.calendarDate().getMinutes(),
			ss:self.calendarDate().getSeconds()});
		
		if(params.clockSize != null)
			self.clockSize = params.clockSize;
		else
			self.clockSize = 200;
	};
	
	return PageViewModel;
});
