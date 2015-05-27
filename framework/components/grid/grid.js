define([], function() {

 	function gridViewModel(params) {
		var self = this;
		
		self.columnOptions = params.columnOptions;
		
		self.columnDatas = params.columnDatas;
		
		self.selectItem = params.selectItem;
		
		self.editItem = null;
		
		var rowInd = 0;
		$.each(self.columnDatas,function(){
			var obj = this;
			obj.rowInd = rowInd++;
			obj.isHover = cube.obj(false);
			obj.showHover = function() {
				obj.isHover(true);
			};
			obj.hiddenHover = function() {
				obj.isHover(false);
			};
			
			obj.isSelect = cube.obj(false);
			obj.doSelect = function() {
				if(self.selectItem() == null || (self.selectItem() != null&&self.selectItem() != obj)) {
					if(self.editItem != null) {
						self.editItem.isEdit(false);
						self.editItem = null;
					}
					if(self.selectItem()!=null) {
						self.selectItem().isSelect(false);
					}
					obj.isSelect(true);
					self.selectItem(obj);
				}
			};
			
//			obj.isEdit = cube.obj(false);
//			obj.doEdit = function(ind) {
//				var ind = 0;
//				$.each(obj.values,function(){
//					this.ind = ind++;
//					if(self.columnOptions[this.ind].editable == true) {
//						obj.isEdit(true);
//						self.editItem = obj;
//					}
//				});
//			};
			var i=0;
			$.each(this.values,function(){
				this.ind = i++;
				this.isEdit = cube.obj(false);
				this.doEdit = function() {
					if(self.columnOptions[this.ind].editable == true) {
						this.isEdit(true);
						if(self.editItem!=null)
							self.editItem.isEdit(false);
						self.editItem = this;
					}
				};
				
				//如果是下拉框，还需要进行事件处理
				this.dropdownlistOptions = self.columnOptions[this.ind].dropdownlistoptions;
				this.isDropdownlistHover = cube.obj(false);
				this.showDropdownlistHover = function() {
					this.isDropdownlistHover(true);
				}
				this.hiddenDropdownlistHover = function() {
					this.isDropdownlistHover(false);
				}
				this.isShowDropdownlistOptions = cube.obj(false);
				this.showDropdownlistOptions = function() {
					if(this.isShowDropdownlistOptions() == false)
						this.isShowDropdownlistOptions(true);
					else
						this.isShowDropdownlistOptions(false);
				}
			});
		});
		
//		self.datas = params.datas;
		
		
//		$.each(self.datas,function(){
//			this.isHover = cube.obj(false);
//			this.showHover = function() {
//				this.isHover(true);
//			};
//			this.hiddenHover = function() {
//				this.isHover(false);
//			};
//			this.isSelect = cube.obj(false);
//			this.doSelect = function() {
//				if(self.selectItem() == null || (self.selectItem() != null&&self.selectItem() != this)) {
//					if(self.selectItem()!=null) {
//						self.selectItem().isSelect(false);
//					}
//					if(self.editItem != null) {
//						self.editItem.isEdit(false);
//						self.editItem = null;
//					}
//					this.isSelect(true);
//					self.selectItem(this);
//				}
//			};
//			
//			this.isEdit = cube.obj(false);
//			this.doEdit = function() {
//				this.isEdit(true);
//				self.editItem = this;
//			};
//		});
	}
	return gridViewModel;
});