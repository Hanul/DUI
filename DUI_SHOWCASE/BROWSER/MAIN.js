DUI_SHOWCASE.MAIN = METHOD({

	run : function(params) {
		'use strict';

		/**
		 * 테스트 결과
		 * IE 5.5 (SP1): 아직 테스트 하지 못함
		 * Firefox 3.0: 아직 테스트 하지 못함
		 * Opera 9.5 (SP1): 아직 테스트 하지 못함
		 */
		
		var
		// menu style
		menuStyle = {
			flt : 'left',
			padding : '5px 10px'
		},
		
		menu2Style = {
			flt : 'left',
			padding : 5
		},
		
		onMenuMouseover = function(e, menu) {
			menu.addStyle({
				backgroundColor : '#e5f3ff'
			});
		},
		
		onMenuMouseout = function(e, menu) {
			menu.addStyle({
				backgroundColor : 'transparent'
			});
		},
		
		onMenu2Mouseover = function(e, menu) {
			menu.addStyle({
				backgroundColor : '#99a7b3'
			});
		},
		
		onMenu2Mouseout = function(e, menu) {
			menu.addStyle({
				backgroundColor : 'transparent'
			});
		};
		
		DUI.MENU_BAR({
			style : {
				backgroundColor : '#fff',
				color : '#000'
			},
			menus : [DUI.MENU({
				style : menuStyle,
				title : 'File',
				on : {
					mouseover : onMenuMouseover,
					mouseout : onMenuMouseout
				}
			}), DUI.MENU({
				style : menuStyle,
				title : 'Edit',
				on : {
					mouseover : onMenuMouseover,
					mouseout : onMenuMouseout
				}
			})]
		}).appendTo(BODY);
		
		DUI.MENU_BAR({
			style : {
				backgroundColor : '#aaa',
				height : 30
			},
			menus : [DUI.MENU({
				style : menu2Style,
				img : IMG({
					src : DUI_SHOWCASE.R('save.png')
				}),
				on : {
					mouseover : onMenu2Mouseover,
					mouseout : onMenu2Mouseout
				}
			}), DUI.MENU({
				style : menu2Style,
				img : IMG({
					src : DUI_SHOWCASE.R('film.png')
				}),
				on : {
					mouseover : onMenu2Mouseover,
					mouseout : onMenu2Mouseout
				}
			}), DUI.MENU({
				style : menu2Style,
				img : IMG({
					src : DUI_SHOWCASE.R('feed.png')
				}),
				on : {
					mouseover : onMenu2Mouseover,
					mouseout : onMenu2Mouseout
				}
			})]
		}).appendTo(BODY);
	}
});
