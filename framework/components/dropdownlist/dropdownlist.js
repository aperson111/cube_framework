define([], function() {

 	function dropdownlistViewModel(params) {
		var self = this;
		
		self.items = params.items;
		
		self.selectValue = params.selectValue;
		
		$.each(self.items,function(){
			this.isHover = cube.obj(false);
			this.showHover = function() {
				this.isHover(true);
			}
			this.hiddenHover = function() {
				this.isHover(false);
			}
			this.doSelect = function() {
				self.selectValue(this.value);
				self.showOptions(false);
			}
		});
		
		self.showOptions = cube.obj(false);
		self.doOpen = function() {
			if(self.showOptions()==true)
				self.showOptions(false);
			else
				self.showOptions(true);
		};
	}
	return dropdownlistViewModel;
});