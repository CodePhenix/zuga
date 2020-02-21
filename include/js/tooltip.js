function set_tooltip(tipsFor) {
	help_tips.style.filter = 'opacity(0)';
	help_window.style.animation = 'open_presentation 0.2s linear alternate forwards';

	setTimeout(function() {
		help_tips.innerHTML = tipsFor;
	}, 100);

	setTimeout(function() {
		help_tips.style.filter = 'opacity(1)';
	}, 200);	

}

const tool_tip = {
	draw_rect : `Click on the canvas to start a rect <br /> and move your mouse to set width and height.`,
	draw_ellipse : `Click on the canvas to start a circle <br /> and move your mouse to set the radius.`,	
	draw_path : `Click on the canvas to begin your path, then click again to set new points. <br />When right-clicking, you have access to some path options. <br /> Always "Close or End Shape" to validate your path.`,
	path_options : `"New Move To" allow you to set a new starting point. <br />"Close Path" is like "Go To Last M Point" but stop your drawing. <br />"End Path" also stop the current drawing without closing the shape.`,
	quadriatic_curve : `Move your mouse then click to set a control point. <br />You can reflect that control point (right click > curves-options) after setting a new point.`,
	//bezier_curve : 'Click twice to place both control points, then a third time to see the result and begin moving those control points',
	crayon : `Click on the canvas to start drawing, then move your mouse <br /> (right click to stop and validate your drawing).`,
	history : `Click on the drawing under the "Drawing List" section <br /> to gain access to various options`,
	copy_paste: `Click on the canvas to set new position for the clone <br /> (some bugs may appears when transforming that clone, sorry :/)`,
	rename_shape : 'Press ENTER to validate the name.',
	change_path_point : `Drag-and-drop to modify your drawing. <br /> Right click to confirm.`,
}