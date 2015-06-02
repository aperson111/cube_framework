define([], function() {
	
	var PageViewModel = function(params) {
		var self = this;
		
		self.isShowPanelAppearance = cube.obj(false);
		self.isShowPanelOption = cube.obj(false);
		self.isShowPanelData = cube.obj(false);
		self.isShowPanelEvent = cube.obj(false);
		
		self.propertiesItems = cube.comp(function(){
			var item = {
					appearance:[],
					option:[],
					data:[],
					event:[]
			};
			for(var pro in params.properties.appearance)
			{
				var obj = {};
				obj.propertyKey = pro;
				obj.name= params.properties.appearance[pro].name;
				obj.editType =params.properties.appearance[pro].editType;
				obj.value =params.properties.appearance[pro].value;
				obj.readonly =params.properties.appearance[pro].readonly;
				item.appearance.push(obj);
			}
			for(var pro in params.properties.option)
			{
				var obj = {};
				obj.propertyKey = pro;
				obj.name= params.properties.option[pro].name;
				obj.editType =params.properties.option[pro].editType;
				obj.value =params.properties.option[pro].value;
				obj.readonly =params.properties.option[pro].readonly;
				item.option.push(obj);
			}
			for(var pro in params.properties.data)
			{
				var obj = {};
				obj.propertyKey = pro;
				obj.name= params.properties.data[pro].name;
				obj.editType =params.properties.data[pro].editType;
				obj.value =params.properties.data[pro].value;
				obj.readonly =params.properties.data[pro].readonly;
				item.data.push(obj);
			}
			for(var pro in params.properties.event)
			{
				var obj = {};
				obj.propertyKey = pro;
				obj.name= params.properties.event[pro].name;
				obj.editType =params.properties.event[pro].editType;
				obj.value =params.properties.event[pro].value;
				obj.readonly =params.properties.event[pro].readonly;
				item.event.push(obj);
			}
			return item;
		},self);
		
		self.setShowPanel = function(p_name){
			if(p_name == 'appearance') {
				self.isShowPanelAppearance(!self.isShowPanelAppearance());
			}
			else if(p_name == 'option') {
				self.isShowPanelOption(!self.isShowPanelOption());
			}
			else if(p_name == 'data') {
				self.isShowPanelData(!self.isShowPanelData());
			}
			else if(p_name == 'event') {
				self.isShowPanelEvent(!self.isShowPanelEvent());
			}
		}
	};
	
	return PageViewModel;
});