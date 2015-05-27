define([], function() {

 	function calendarViewModel(params) {
		var self = this;
		
		self.date = params.date!=null ? params.date: ko.observable(new Date());
		
		//星期
		self.isWest = true; //暂时不考虑false的情况
		self.weekDays = ["一","二","三","四","五","六","日"]; //暂时不作考虑和处理
		self.westWeekDays = ["日","一","二","三","四","五","六"];
	
		//月份
		self.yearMonths = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
		
		//从上一年的12月，1-12月，到次年的1月份，每个月的天数
		self.monthTotalDays = [31,31,28,31,30,31,30,31,31,30,31,30,31,31];
		
		//本月日期
		self.thisMonthDay = cube.obj({year:1, month:1, dayNums: 1});

		//上个月日期
		self.preMonthDay = cube.obj({year:1, month:1, dayNums: 1});
		
		//本月日期
		self.nextMonthDay = cube.obj({year:1, month:1, dayNums: 1});
		
		//设置title显示内容
		self.showState = cube.obj(-1);//0:月，1：选择月，2：选择年
		self.titleText = cube.comp(function(){
			if(self.showState()==0) {
				return  self.date().getFullYear()+'年'+ (self.date().getMonth()+1)+'月';
			} else if(self.showState()==1) {
				return self.date().getFullYear()+'年';
			}
			else if(self.showState()==2) {
				return (self.date().getFullYear()-6)+'年-'+(self.date().getFullYear()+5)+'年';
			}
		},self);
		
		//改变title显示状态。年/月/日选择
		self.changeShowState = function() {
			self.showState(self.showState()+1);
			if(self.showState() == 3) {
				self.showState(0);
			}
		}
		
		self.changeShowState();
		
		//根据年份、月份获取天数
		var getMonthTotalDays = function(year, month)
		{
			if(month == 2) {
				if((year % 4 == 0 && year % 100!= 0) || (year % 4 == 0 && year % 100== 0 && year % 400 == 0))
					return 29;
				else return 28;
			} else {
				return self.monthTotalDays[month];
			}
				
		}
		
		//初始化上个月、这个月和下个月的全月信息
		var calculateMonthDays = function()
		{
			var date = self.date();
			var year = date.getFullYear();
			var month = date.getMonth()+1;
			var weekDay;
			
			date = new Date(year,month-1,1);
			weekDay = date.getDay();
			self.thisMonthDay({year:year,month:month,dayNums:getMonthTotalDays(year,month),firstWeekDay: weekDay});
			
			date = new Date(year,month-2,1);
			year = date.getFullYear();
			month = date.getMonth()+1;
			weekDay = date.getDay();
			self.preMonthDay({year:year,month:month,dayNums:getMonthTotalDays(year,month),firstWeekDay: weekDay});
			
			date = new Date(year,month+1,1);
			year = date.getFullYear();
			month = date.getMonth()+1;
			weekDay = date.getDay();
			self.nextMonthDay({year:year,month:month,dayNums:getMonthTotalDays(year,month),firstWeekDay: weekDay});
		}
		
		//计算显示的内容
		var calculateShowDateItems = function() {
			
			calculateMonthDays();
			
			var weekInd = 0;
			var firstWeekDay = self.thisMonthDay().firstWeekDay;
			if(firstWeekDay == 0) firstWeekDay = 7;
			for(i=0;i<42;i++) {
				var curDate;
				if(i<firstWeekDay) {
					curDate = self.DateItems()[weekInd]()[i%7];
					curDate.monthInd(-1);
					curDate.year(self.preMonthDay().year);
					curDate.month(self.preMonthDay().month);
					curDate.day(self.preMonthDay().dayNums-(firstWeekDay-i)+1);
				} else if(i<firstWeekDay+self.thisMonthDay().dayNums){
					if( i % 7 == 0) {
						weekInd++;
					}
					curDate = self.DateItems()[weekInd]()[i%7];
					curDate.monthInd(0);
					curDate.year(self.thisMonthDay().year);
					curDate.month(self.thisMonthDay().month);
					curDate.day(i-firstWeekDay+1);
				} else {
					if( i % 7 == 0) {
						weekInd++;
					}
					curDate = self.DateItems()[weekInd]()[i%7];
					curDate.monthInd(1);
					curDate.year(self.nextMonthDay().year);
					curDate.month(self.nextMonthDay().month);
					curDate.day(i-firstWeekDay-self.thisMonthDay().dayNums+1);
				}
				
				//选择一个当前日期
				if((curDate.day() == self.date().getDate()) && 
					(curDate.month() == self.date().getMonth()+1) &&
					(curDate.year() == self.date().getFullYear()) ) {
						self.selectDate(curDate);
				}
			}
		};
		//计算年份选择显示的内容
		var calculateShowYearItems = function() {
			for(var i=0;i<3;i++) {
				var item = cube.arr([]);
				for(var j=0;j<4;j++)
				{
					var year = self.YearItems()[i]()[j];
					year.yearName(self.date().getFullYear()-6+(4*i+j));
				}
				self.YearItems().push(item);
			}
		};
		
		//初始化显示内容：DateItems
		self.DateItems = cube.arr([]);
		self.selectDate = cube.obj();
		for(var i=0;i<6;i++) {
			var item = cube.arr([]);
			for(var j=0;j<7;j++)
			{
				var day = {
						year : cube.obj(1),
						month: cube.obj(1),
						day: cube.obj(1),
						weekInd: i,
						weekDay: j,
						monthInd: cube.obj(0), //-1:表示上个月，0表示这个月，1表示下个月
						
						isHover: cube.obj(false),
						showHover: function() {
							this.isHover(true);
						},
						hiddenHover: function() {
							this.isHover(false);
						},
						selectDay: function(d) {
							self.date(new Date(this.year(),this.month()-1,this.day()));
							if(this.monthInd()!=0) {
								calculateShowDateItems();
							}else {
								self.selectDate(this);
							}
						}
				};
				day.isSelect=cube.comp(function(){
					return (this.year() == self.date().getFullYear()) &&
					(this.month() == (self.date().getMonth()+1 ))&&
					(this.day() == self.date().getDate());
				},day);
				item().push(day);
			}
			self.DateItems().push(item);
		}
		
		//初始化显示内容：MonthItems
		self.MonthItems = cube.arr([]);
		self.selectMonth = cube.obj();
		
		//self.selectMonth = cube.obj();
		for(var i=0;i<3;i++) {
			var item = cube.arr([]);
			for(var j=0;j<4;j++)
			{
				var month = {
						monthInd: i*4+j,
						monthName: self.yearMonths[i*4+j],
						isSelect:cube.obj(false),
						isHover: cube.obj(false),
						showHover: function() {
							this.isHover(true);
						},
						hiddenHover: function() {
							this.isHover(false);
						},
						selectMonth: function(d) {
							if(self.selectMonth() != null)
								self.selectMonth().isSelect(false);
							this.isSelect(true);
							self.selectMonth(this);
							self.showState(0);
							self.date(new Date(self.date().getFullYear(),
									this.monthInd,
									self.date().getDate()));
							calculateShowDateItems();
							this.isHover(false);
						}
				};
				if(i*4+j == (self.date().getMonth())) {
					month.isSelect(true);
					self.selectMonth(month);
				}
				item().push(month);
			}
			self.MonthItems().push(item);
		}
		//初始化显示内容：YearItems
		self.YearItems = cube.arr([]);
		self.selectYear = cube.obj();
		for(var i=0;i<3;i++) {
			var item = cube.arr([]);
			for(var j=0;j<4;j++)
			{
				var year = {
						yearName: cube.obj(self.date().getFullYear()-6+(4*i+j)),
						isSelect:cube.obj(false),
						isHover: cube.obj(false),
						showHover: function() {
							this.isHover(true);
						},
						hiddenHover: function() {
							this.isHover(false);
						},
						selectYear: function(d) {
							if(self.selectYear() != null)
								self.selectYear().isSelect(false);
							this.isSelect(true);
							self.selectYear(this);
							self.showState(1);
							this.isHover(false);
							self.date(new Date(this.yearName(),
									self.date().getMonth(),
									self.date().getDate()));
							
						}
				};
				if(year.yearName() == (self.date().getFullYear())) {
					year.isSelect(true);
					self.selectYear(year);
				}
				item().push(year);
			}
			self.YearItems().push(item);
		}

		
		//显示上个月/上年/上个年份范围
		self.showPre= function() {
			if(self.showState()==0) {
				var year = self.date().getFullYear();
				var month = self.date().getMonth()+1;
				var monthDay = self.date().getDate();
				self.date(new Date(year,month-2,monthDay)); 
			
				calculateShowDateItems();
			} else if(self.showState()==1) {
				var year = self.date().getFullYear()-1;
				var month = self.date().getMonth()-1;
				var monthDay = self.date().getDate();
				self.date(new Date(year,month,monthDay)); 
			} else if(self.showState()==2) {
				var year = self.date().getFullYear()-16;
				var month = self.date().getMonth()-1;
				var monthDay = self.date().getDate();
				self.date(new Date(year,month,monthDay)); 
				
				calculateShowYearItems();
			}
			
		};
		
		//显示下个月/下年/下个年份范围
		self.showNext = function() {
			if(self.showState()==0) {
				var year = self.date().getFullYear();
				var month = self.date().getMonth()+1;
				var monthDay = self.date().getDate();
				var d = new Date(year,month,monthDay); 
				self.date(d);
			
				calculateShowDateItems();
			} else if(self.showState()==1) {
				var year = self.date().getFullYear()+1;
				var month = self.date().getMonth()-1;
				var monthDay = self.date().getDate();
				self.date(new Date(year,month,monthDay)); 
			}else if(self.showState()==2) {
				var year = self.date().getFullYear()+10;
				var month = self.date().getMonth()-1;
				var monthDay = self.date().getDate();
				self.date(new Date(year,month,monthDay)); 
				
				calculateShowYearItems();
			}
		};
		
	
		calculateShowDateItems();
		
		//日期变化，订阅事件，重构显示内容。
		self.date.subscribe(function(newValue) {
			calculateShowDateItems();
		});
		
	}
	return calendarViewModel;
});