/**
 * Menu bar class
 */
DUI.MENU_BAR = CLASS({

	preset : function() {
		'use strict';

		return UUI.V_CENTER;
	},

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.menus

		var
		// menus
		menus = params.menus;
		
		EACH(menus, self.append);
		
		self.append(CLEAR_BOTH());
	}
});
