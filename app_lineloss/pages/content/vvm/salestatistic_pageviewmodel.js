define([], function() {
	var PageViewModel = function(params) {
	
		var self = this;
		
		self. regionTreeItems= [
			     {
			    	 text: "浙江省",
			    	 route: "province_zj",
			    	 isHover: cube.obj(false),
			    	 showHover: function() {
			    		 this.isHover(true);
			    	 },
			    	 hiddenHover: function() {
			    		 this.isHover(false);
			    	 },
			    	 isAct: cube.obj(true),
			    	 actItem: function() {
			    		 this.isAct(true);
			    		 if(self.actRegionTreeItems() != null)
			    			 self.actRegionTreeItems().isAct(false);
			    		 self.actRegionTreeItems(this);
			    	 },
			    	 isExpand: cube.obj(true),
			    	 modifyExpand: function() {
		    	    		var ex = this.isExpand();
		    	    		this.isExpand(ex==false?true:false);
			    	 },
			    	 hasChildren: true,
			    	 children: [
			    	    { 
			    	    	text: "杭州市",
			    	    	route: "city_hz",
			    	    	isHover: cube.obj(false),
					    	showHover: function() {
					    		this.isHover(true);
					    	},
					    	hiddenHover: function() {
					    		this.isHover(false);
					    	},
			    	    	isAct: cube.obj(false),
			    	    	actItem: function() {
					    		 this.isAct(true);
					    		 if(self.actRegionTreeItems() != null)
					    			 self.actRegionTreeItems().isAct(false);
					    		 self.actRegionTreeItems(this);
					    	 },
			    	    	isExpand: cube.obj(false),
			    	    	modifyExpand: function() {
			    	    		var ex = this.isExpand();
			    	    		this.isExpand(ex==false?true:false);
			    	    	},
			    	    	hasChildren: true,
			    	    	children: [
			    	    	   {
			    	    		   text:"上城区",
			    	    		   route:"couty_sc",
			    	    		   isHover: cube.obj(false),
			  			    	 	showHover: function() {
			  			    	 		this.isHover(true);
			  			    	 	},
			  			    	 	hiddenHover: function() {
			  			    	 		this.isHover(false);
			  			    	 	},
			    	    		   isAct: cube.obj(false),
			    	    		   actItem: function() {
			  			    		 this.isAct(true);
			  			    		 if(self.actRegionTreeItems() != null)
			  			    			 self.actRegionTreeItems().isAct(false);
			  			    		 self.actRegionTreeItems(this);
			  			    	 },
			    	    		   isExpand: cube.obj(false),
			    	    		   modifyExpand: function() {
					    	    		var ex = this.isExpand();
					    	    		this.isExpand(ex==false?true:false);
					    	    	},
			    	    		   hasChildren: false,
			    	    		   children:[]
			    	    	   }   
			    	    	 ]
			    	    },
			   		    {
			   		    	 text: "宁波市",
				    	     route: "city_nb",
				    	     isHover: cube.obj(false),
					    	 showHover: function() {
					    		 this.isHover(true);
					    	 },
					    	 hiddenHover: function() {
					    		 this.isHover(false);
					    	 },
				    	     isAct: cube.obj(false),
				    	     actItem: function() {
					    		 this.isAct(true);
					    		 if(self.actRegionTreeItems() != null)
					    			 self.actRegionTreeItems().isAct(false);
					    		 self.actRegionTreeItems(this);
					    	 },
				    	     isExpand: cube.obj(false),
				    	     modifyExpand: function() {
				    	    		var ex = this.isExpand();
				    	    		this.isExpand(ex==false?true:false);
				    	     },
				    	     hasChildren: true,
				    	     children: [
				    	       {
				    	    	   text:"宁海区",
				    	    	   route:"couty_nh",
				    	    	   isHover: cube.obj(false),
				    	    	   showHover: function() {
							    	 this.isHover(true);
				    	    	   },
				    	    	   hiddenHover: function() {
							    	 this.isHover(false);
				    	    	   },
				    	    	   isAct: cube.obj(false),
				    	    	   actItem: function() {
							    		 this.isAct(true);
							    		 if(self.actRegionTreeItems() != null)
							    			 self.actRegionTreeItems().isAct(false);
							    		 self.actRegionTreeItems(this);
							    	 },
						    	   isExpand: cube.obj(false),
						    	   modifyExpand: function() {
					    	    		var ex = this.isExpand();
					    	    		this.isExpand(ex==false?true:false);
					    	    	},
						    	   hasChildren: false,
			    	    		   children:[]
				    	       }   
				   		     ]
			    	    }
			    	 ]
			     },
			     {
			    	 text: "北京市",
			    	 route: "province_bj",
			    	 isHover: cube.obj(false),
			    	 showHover: function() {
			    		 this.isHover(true);
			    	 },
			    	 hiddenHover: function() {
			    		 this.isHover(false);
			    	 },
			    	 isAct: cube.obj(false),
			    	 actItem: function() {
			    		 this.isAct(true);
			    		 if(self.actRegionTreeItems() != null)
			    			 self.actRegionTreeItems().isAct(false);
			    		 self.actRegionTreeItems(this);
			    	 },
			    	 isExpand: cube.obj(true),
			    	 modifyExpand: function() {
		    	    		var ex = this.isExpand();
		    	    		this.isExpand(ex==false?true:false);
			    	 },
			    	 hasChildren:false,
			    	 children:[]
			     },
			     {
			    	 text: "江苏省",
			    	 route: "province_js",
			    	 isHover: cube.obj(false),
			    	 showHover: function() {
			    		 this.isHover(true);
			    	 },
			    	 hiddenHover: function() {
			    		 this.isHover(false);
			    	 },
			    	 isAct: cube.obj(false),
			    	 actItem: function() {
			    		 this.isAct(true);
			    		 if(self.actRegionTreeItems() != null)
			    			 self.actRegionTreeItems().isAct(false);
			    		 self.actRegionTreeItems(this);
			    	 },
			    	 isExpand: cube.obj(true),
			    	 modifyExpand: function() {
		    	    		var ex = this.isExpand();
		    	    		this.isExpand(ex==false?true:false);
			    	 },
			    	 hasChildren: true,
			    	 children: [
			    	    { 
			    	    	text: "南京市",
			    	    	route: "city_nj",
			    	    	isHover: cube.obj(false),
					    	showHover: function() {
					    		 this.isHover(true);
					    	},
					    	hiddenHover: function() {
					    	  this.isHover(false);
					    	},
			    	    	isAct: cube.obj(false),
			    	    	actItem: function() {
					    		 this.isAct(true);
					    		 if(self.actRegionTreeItems() != null)
					    			 self.actRegionTreeItems().isAct(false);
					    		 self.actRegionTreeItems(this);
					    	 },
			    	    	isExpand: cube.obj(false),
			    	    	modifyExpand: function() {
			    	    		var ex = this.isExpand();
			    	    		this.isExpand(ex==false?true:false);
			    	    	},
			    	    	hasChildren: false,
		    	    		   children:[]
			    	    },
			   		    {
			   		    	 text: "苏州市",
				    	     route: "city_sz",
				    	     isHover: cube.obj(false),
					    	 showHover: function() {
					    		 this.isHover(true);
					    	 },
					    	 hiddenHover: function() {
					    		 this.isHover(false);
					    	 },
				    	     isAct: cube.obj(false),
				    	     actItem: function() {
					    		 this.isAct(true);
					    		 if(self.actRegionTreeItems() != null)
					    			 self.actRegionTreeItems().isAct(false);
					    		 self.actRegionTreeItems(this);
					    	 },
				    	     isExpand: cube.obj(false),
				    	     modifyExpand: function() {
				    	    		var ex = this.isExpand();
				    	    		this.isExpand(ex==false?true:false);
				    	     },
				    	     hasChildren: false,
		    	    		   children:[]
			    	    }
			    	 ]
			     }
			];
		self.actRegionTreeItems = cube.obj(self.regionTreeItems[0]);
	};
	
	return PageViewModel;
});
