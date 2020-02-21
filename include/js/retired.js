//////////////////////////////////////
//////////////////////////////////////
////////////* RESIZE *////////////////
//////////////////////////////////////
//////////////////////////////////////





// let resize_know = false, resizeX, resizeY, resize;

// function resize_tool() {

// 	selected_shape.addEventListener('click', function(e) {
	
// 		resize = document.querySelector('.resize-button');
// 		resize.style.display = 'block';

// 		resize.setAttribute('x', `${selected_shape.getBoundingClientRect().x - spaceToDraw.getBoundingClientRect().x + selected_shape.getBoundingClientRect().width}`);
// 		resize.setAttribute('y', `${selected_shape.getBoundingClientRect().y - spaceToDraw.getBoundingClientRect().y + selected_shape.getBoundingClientRect().height}`);								

// 		resizeX = resize.attributes.y.value;
// 		resizeY = resize.attributes.x.value;

// 		resize.addEventListener('click', function() {
// 			resize_know = true;	/*[MODIF] let...*/
// 		})

// 		document.addEventListener('mousedown', function(e) {
// 			if (resize_know == true) {
// 				target_shape = resize;
// 				spaceToDraw.style.cursor = 'e-resize';
				
// 				resizing();
// 			}


// 		})

// 		function resizing() {

// 			spaceToDraw.addEventListener('mousemove', resize_cycle);

// 			function resize_cycle(e) {
// 				try {
// 					target_shape.setAttribute('x', e.clientX - spaceToDraw.getBoundingClientRect().x);
// 					target_shape.setAttribute('y', e.clientY - spaceToDraw.getBoundingClientRect().y);
					
// 					if (selected_shape.localName == 'rect') {

// 						selected_shape.setAttribute('width', target_shape.getBoundingClientRect().x - selected_shape.getBoundingClientRect().x);
// 						selected_shape.setAttribute('height', target_shape.getBoundingClientRect().y - selected_shape.getBoundingClientRect().y);	

// 					} else if (selected_shape.localName == 'ellipse') {
// 						let rayon, rootx, rooty;

// 						rootx = ((e.clientX - spaceToDraw.getBoundingClientRect().x) - selected_shape.attributes.cx.value) * ((e.clientX - spaceToDraw.getBoundingClientRect().x) - selected_shape.attributes.cx.value);
// 						rooty = ((e.clientY - spaceToDraw.getBoundingClientRect().y) - selected_shape.attributes.cy.value) * ((e.clientY - spaceToDraw.getBoundingClientRect().y) - selected_shape.attributes.cy.value);
// 						rayon = Math.sqrt(rootx + rooty);

// 						selected_shape.setAttribute('rx', rayon);
// 						selected_shape.setAttribute('ry', rayon);
// 					} else if (selected_shape.localName == 'polygon' 
// 								|| selected_shape.localName == 'polyline') {

// 						let select_centerX = selected_shape.getBoundingClientRect().x + (selected_shape.getBoundingClientRect().width / 2), 
// 							select_centerY = selected_shape.getBoundingClientRect().y + (selected_shape.getBoundingClientRect().height / 2),
// 							select_points = selected_shape.attributes.points.value.split(' ');

// 						console.log('o')

// 						for (let i = 0; i < select_points.length; i++) {

// 							if (select_points[i].getBoundingClientRect().x < select_centerX 
// 									&& select_points[i].getBoundingClientRect().y < select_centerY) {
								
// 								select_points[i].split(',')[0] = select_points[i].split(',')[0] - (resize.attributes.x.value - resizeX);
// 								select_points[i].split(',')[1] = select_points[i].split(',')[0] - (resize.attributes.y.value - resizeY);
// 							}
// 						}
// 						console.log(select_points[0])
// 						selected_shape.attributes.points.value = select_points[0] + ' ' + selected_shape.attributes.points.value.split(' ')[1] + ' ' + selected_shape.attributes.points.value.split(' ')[2] + ' ' + selected_shape.attributes.points.value.split(' ')[3];
// 					}
// 				} catch(e) {

// 				}	
// 			}

// 			document.addEventListener('mouseup', function() {
// 				target_shape = null;
// 				spaceToDraw.style.cursor = 'unset'
// 				resize_tool = false;

// 				spaceToDraw.removeEventListener('mousemove', resize_cycle);
// 			})
// 		}

// 	})
// }







//////////////////////////////////////////////
//////////////////////////////////////////////
////////////* ARC ELLIPTIQUE *////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////






/*
*
*  Option path: Arc Elliptique
*
*/
	//arc_menu.style.display = 'none';

// let arc = false;

// function a_curve_temp() {
// 	arc = true;

// 	arc_menu.style.display = 'block';

// 	arc_temp();

// 	validate_arc.style.display = 'block';
// }

// function arc_temp() {
// 	let arc_form_elements = Array.from(document.querySelector('.path-arc-window form').elements);

// 	arc_form_elements.forEach(function(t) {
// 		t.addEventListener('change', function() {
// 			let	arc_control_point = `A ${arc_form_elements[0].value} ${arc_form_elements[1].value} ${arc_form_elements[2].value} ${arc_form_elements[3].value},${arc_form_elements[4].value}`;

// 			spaceToDraw.lastChild.attributes.d.value = path_before_L + arc_control_point + path_after_L;
// 		})
// 	})
// }



////////////////////////////////////////
////////////////////////////////////////
////////////* GRADIENT *////////////////
////////////////////////////////////////
////////////////////////////////////////




/*
*
*  Gradient Tool : Linear
*
*/

// let gradient_module = document.querySelector('.gradient-module'),
// 	choose_gradient_type = document.querySelectorAll('.gradient-type div'),
// 	linear_gradient = document.querySelector('.linear-gradient-module'),
// 	gradient_form = document.querySelector('.gradient-tool form'),
// 	gradient_input = Array.from(gradient_form.elements),
// 	gradient_survey = document.querySelector('.gradient-survey'),
// 	gradient_def = document.getElementById('gradient-def'),
// 	gradient_stop_nodes = document.querySelectorAll('#gradient-def stop'),
// 	gradient_sneak = document.querySelector('.gradient-survey rect'),
// 	save_gradient = document.querySelector('.gradient-module button'),
// 	spaceToDraw_defs = document.querySelector('.space-to-draw svg g defs'),
// 	stop_inputs = document.querySelectorAll('.gradient-tool .stop-inputs'),
// 	check_orientation = document.querySelector('#orientation-check'),
// 	gradient_orientation = document.querySelector('.gradient-orientation'),
// 	orientation_inputs = Array.from(document.querySelector('.gradient-orientation form').elements);

// gradient_tool.addEventListener('click', function() {
// 	gradient_module.style.display = 'flex';
// })

// choose_gradient_type[0].addEventListener('click', function() {
// 	linear_gradient.style.display = 'block';
// 	gradient_survey.style.display = 'block';
// 	gradient_sneak.setAttribute('fill', 'url(#gradient-def)');

// 	this.parentNode.style.display = 'none';
// })

// gradient_input.forEach(apply_gradient);

// function apply_gradient(t) {
// 	t.addEventListener('change', function() {
// 		for (let i = 0; i < stop_inputs.length; i++) {
			
// 			if (this == stop_inputs[i].children[1])
// 				gradient_stop_nodes[i].attributes.offset.value = this.value + '%';
// 			else if (this == stop_inputs[i].children[2])
// 				gradient_stop_nodes[i].attributes[1].value = this.value;
		
// 		}
// 	})
// }

// check_orientation.addEventListener('change', function() {
// 	if (this.checked == true)
// 		gradient_orientation.style.display = 'block';
// 	else
// 		gradient_orientation.style.display = 'none';
// })

// orientation_inputs.forEach(apply_orientation);

// function apply_orientation(t) {
// 	t.addEventListener('change', function() {
// 		for (let i = 0; i < orientation_inputs.length; i++) {

// 			if (this == orientation_inputs[0])
// 				gradient_def.setAttribute('x1', this.value + '%');
// 			else if (this == orientation_inputs[1])
// 				gradient_def.setAttribute('y1', this.value + '%');
// 			else if (this == orientation_inputs[2])
// 				gradient_def.setAttribute('x2', this.value + '%');
// 			else if (this == orientation_inputs[3])
// 				gradient_def.setAttribute('y2', this.value + '%');							
		
// 		}
// 	})
// }

// save_gradient.addEventListener('click', function() {
// 	spaceToDraw.children[0].children[1].appendChild(gradient_def.cloneNode(true));
// 	spaceToDraw.children[0].children[1].children[0].id = 'katamari';

// 	gradient_module.style.display = 'none';

// 	//fill_gradient();
// })

// // function fill_gradient() {
// // 	spaceToDraw.addEventListener('click', function(e) {
// // 		e.target.style.fill = 'url(#katamari)';
// // 	})
// // }

// let add_stop_node_icon = document.querySelector('.gradient-module .icon-plus2'),
// 	gradient_add_panel = document.createElement('div'),
// 	stop_count = 3;


// add_stop_node_icon.addEventListener('pointerover', function() {

// 	gradient_add_panel.className = 'icon-add-panel';
// 	gradient_module.appendChild(gradient_add_panel);
// 	gradient_add_panel.innerHTML = 'Add Stop Node';
// })

// add_stop_node_icon.addEventListener('pointerleave', function() {
// 	gradient_module.removeChild(gradient_add_panel);
// })

// add_stop_node_icon.addEventListener('click', function() {
// 	gradient_def.innerHTML += ` <stop offset='0%' stop-color='#ffffff'/>`;
// 	gradient_form.appendChild(stop_inputs[0].cloneNode(true));
// 	gradient_form.lastChild.children[0].innerHTML = `Node #${stop_count}`; 

// 	//redéfinitions des variables / fonction
// 	gradient_stop_nodes = document.querySelectorAll('#gradient-def stop');
// 	gradient_input = Array.from(gradient_form.elements);
// 	stop_inputs = document.querySelectorAll('.stop-inputs');
// 	gradient_input.forEach(apply_gradient);
	
// 	stop_count++;
// })

// /*
// *
// *	Gradient Tool : Radial
// *
// */

// let radial_gradient = document.querySelector('.radial-gradient-module'),
// 	radial_def = document.querySelector('#radial-def'),
// 	radial_form = document.querySelector('.radial-tool form'),
// 	radial_input = Array.from(radial_form.elements),
// 	radial_stop_nodes = document.querySelectorAll('#radial-def stop'),
// 	radial_stop_inputs = document.querySelectorAll('.radial-tool .stop-inputs'),
// 	check_position = document.querySelector('#position-check'),
// 	radial_position = document.querySelector('.radial-position'),
// 	position_inputs =  Array.from(document.querySelector('.radial-position form').elements),
// 	choose_spread_method = document.querySelector('.choose-spread-method');

// choose_gradient_type[1].addEventListener('click', function() {
// 	radial_gradient.style.display = 'block';
// 	gradient_survey.style.display = 'block';
// 	gradient_sneak.setAttribute('fill', 'url(#radial-def)');

// 	this.parentNode.style.display = 'none';
// })

// radial_input.forEach(apply_radial_gradient);

// function apply_radial_gradient(t) {
// 	t.addEventListener('change', function() {
// 		for (let i = 0; i < radial_stop_inputs.length; i++) {
			
// 			if (this == radial_stop_inputs[i].children[1])
// 				radial_stop_nodes[i].attributes.offset.value = this.value + '%';
// 			else if (this == radial_stop_inputs[i].children[2])
// 				radial_stop_nodes[i].attributes[1].value = this.value;
		
// 		}
// 	})
// }

// check_position.addEventListener('change', function() {
// 	if (this.checked == true)
// 		radial_position.style.display = 'block';
// 	else
// 		radial_position.style.display = 'none';
// })

// position_inputs.forEach(apply_position);

// function apply_position(t) {
// 	t.addEventListener('change', function() {
// 		for (let i = 0; i < position_inputs.length; i++) {

// 			if (this == position_inputs[0])
// 				radial_def.setAttribute('cx', this.value + '%');
// 			else if (this == position_inputs[1])
// 				radial_def.setAttribute('cy', this.value + '%');
// 			else if (this == position_inputs[2])
// 				radial_def.setAttribute('r', this.value + '%');
// 			else if (this == position_inputs[3])
// 				radial_def.setAttribute('fx', this.value + '%');
// 			else if (this == position_inputs[4])
// 				radial_def.setAttribute('fy', this.value + '%');					
		
// 		}
// 	})
// }

// Array.from(choose_spread_method.elements).forEach(function(t) {
// 	t.addEventListener('change', function() {
// 		if (this.checked == true)
// 			radial_def.setAttribute('spreadMethod', this.labels[0].innerText);
// 	})
// })


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
////////////////////  Path Drawing  //////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
	// Captation des points indépendemment des lettres d'instructions

	// let path_d_temp = spaceToDraw.lastChild.attributes.d.value.split(' ');

	// for (let i = 0; i < path_d_temp.length; i++) {
	// 	if (path_d_temp[i] == 'M' || path_d_temp[i] == 'L' || path_d_temp[i] == 'C' || path_d_temp[i] == 'Q')
	// 		path_d.push(path_d_temp[i +1]);
	// }



	// if (counter_bezier == 1) pathDrawing = spaceToDraw.children[spaceToDraw.children.length - 2];
	// else if (counter_bezier == 2) pathDrawing = spaceToDraw.children[spaceToDraw.children.length - 3];
	// else pathDrawing = spaceToDraw.lastChild;

	// aux_menu_path_options.style.display = 'block';

	// aux_menu_curve.addEventListener('mouseover', function() {
	// 	display_curves = true;

	// 	curves_options.style.height = 'auto';
	// })

	// aux_menu_curve.addEventListener('mouseleave', function() {
	// 	display_curves = false;
	// })

	// aux_menu_quadriatic.addEventListener('click', q_curve_temp);
	// aux_menu_bezier.addEventListener('click', b_curve_temp);

	// move_to_path.addEventListener('click', moveTo_newPoint);
	// aux_menu_h_line.addEventListener('click', draw_horizontal_line);
	// aux_menu_v_line.addEventListener('click', draw_vertical_line);
	

	// if (pathDrawing.hasAttribute('d') && quadriatic == false && bezier == false && moveTo_point == false && vertical_trigger == false && horizontal_trigger == false) {

	// 	pathDrawing.attributes.d.value += ` L ${e.clientX - spaceToDraw.getBoundingClientRect().x},${e.clientY - spaceToDraw.getBoundingClientRect().y}`;
		
	// 	index_of_L = pathDrawing.attributes.d.value.lastIndexOf('L'), /*[MODIF]euh... manque let non ?*/
	// 	indexL = pathDrawing.attributes.d.value.substr(index_of_L + 1, 40),
		
	// 	path_before_L = pathDrawing.attributes.d.value.substr(0, index_of_L), /*wtf idem là et dessous*/
	// 	path_after_L = pathDrawing.attributes.d.value.slice(index_of_L + 1, pathDrawing.attributes.d.value.length);

	// } else if (pathDrawing.hasAttribute('d') && quadriatic == true) {
		
	// 	spaceToDraw.removeEventListener('mousemove', temp);
		
	// 	let control_point = `Q ${e.clientX - spaceToDraw.getBoundingClientRect().x},${e.clientY - spaceToDraw.getBoundingClientRect().y}`;	
		
	// 	if (indexRegTest != undefined) {
	// 		spaceToDraw.lastChild.attributes.d.value = indexRegTest + control_point + indexL;
			
	// 		indexRegTest = undefined;
	// 		replaceIndex = undefined;
	// 	} else spaceToDraw.lastChild.attributes.d.value = spaceToDraw.lastChild.attributes.d.value.replace('L', control_point);

	// 	quadriatic = false;

	// } else if (pathDrawing.hasAttribute('d') && bezier == true) {

	// 	if (counter_bezier == 2) {
	// 		let temp_coord = document.querySelectorAll('.b-temp'),
	// 			temp_target, /*[MODIF]ne devrait pas fonctionner ici, le sortir*/
	// 			tempX, 
	// 			tempY;

	// 		bezier_control_point = `C ${temp_coord[0].attributes.cx.value},${temp_coord[0].attributes.cy.value} ${temp_coord[1].attributes.cx.value},${temp_coord[1].attributes.cy.value}`;

	// 		aux_menu_bezier_validate.style.display = 'block';

	// 		if (validation == false) pathDrawing.attributes.d.value = path_before_L + bezier_control_point + path_after_L;		
			
	// 		b_curve_draw(e, pathDrawing, temp_coord);

	// 		aux_menu_bezier_validate.addEventListener('click', function() {
	// 			let control_temp = document.querySelectorAll('.b-temp');

	// 			control_temp.forEach(function(t) {
	// 				t.remove();
	// 			})

	// 			validation = false;
	// 			counter_bezier = 0;
	// 			bezier = false;

	// 			this.style.display = 'none';
	// 		})

	// 	} else if (counter_bezier < 2) {
	// 		validation = false;

	// 		counter_bezier++;
	// 		spaceToDraw.innerHTML += `<circle class='b-temp' fill='red' r='5' cx='${e.clientX - spaceToDraw.getBoundingClientRect().x}' cy='${e.clientY - spaceToDraw.getBoundingClientRect().y}'/>`;
	// 	}

	// } else if (pathDrawing.hasAttribute('d') && moveTo_point == true) {
	// 	pathDrawing.attributes.d.value += ` ${e.clientX - spaceToDraw.getBoundingClientRect().x},${e.clientY - spaceToDraw.getBoundingClientRect().y}`;

	// 	moveTo_point = false;
	// } else if (pathDrawing.hasAttribute('d') && horizontal_trigger == true) {
	// 	pathDrawing.attributes.d.value += ` ${e.clientX - spaceToDraw.getBoundingClientRect().x}`;

	// 	horizontal_trigger = false;
	// } else if (pathDrawing.hasAttribute('d') && vertical_trigger == true) {
	// 	pathDrawing.attributes.d.value += ` ${e.clientY - spaceToDraw.getBoundingClientRect().y}`;

	// 	vertical_trigger = false;
	// } else {
	// 	pathDrawing.setAttribute('d', `M ${e.clientX - spaceToDraw.getBoundingClientRect().x},${e.clientY - spaceToDraw.getBoundingClientRect().y}`);
	// }

// path_starting_points.addEventListener('click', function() {
// 	let starting_coordonate = spaceToDraw.lastChild.attributes.d.value.split(' ')[1];

// 	spaceToDraw.lastChild.attributes.d.value += ` L ${starting_coordonate}`;
// })

// close_path.addEventListener('click', function() {
// 	spaceToDraw.lastChild.attributes.d.value += ` Z`;

// 	let index = spaceToDraw.lastChild.attributes.d.value.indexOf('Z');
	
// 	spaceToDraw.lastChild.attributes.d.value = spaceToDraw.lastChild.attributes.d.value.slice(0, index + 1);
	
// 	aux_menu_path_options.style.display = 'none';
// 	spaceToDraw.removeEventListener('click', draw_path);

// 	fifty_shades_of_shape();
// })

// end_path.addEventListener('click', function() {
// 	aux_menu_path_options.style.display = 'none';
// 	spaceToDraw.removeEventListener('click', draw_path);

// 	fifty_shades_of_shape();
// })

// /*
// *
// *
// *	Option path: Horizontal / Vertical Line
// *
// */

// function draw_horizontal_line() {
// 	horizontal_trigger = true;

// 	spaceToDraw.lastChild.attributes.d.value += ` H`;
// }

// function draw_vertical_line() {
// 	vertical_trigger = true;

// 	spaceToDraw.lastChild.attributes.d.value += ` V`;
// }

// /*
// *
// *
// *	Option path: Move To
// *
// */

// function moveTo_newPoint() {
// 	moveTo_point = true;

// 	spaceToDraw.lastChild.attributes.d.value += ` M`;	
// }

// /*
// *
// *  Option path: Courbe Quadriatique
// *
// */


// let quadriatic = false,
// 	replaceIndex, 
// 	indexRegTest;

// function q_curve_temp(e) {
// 	quadriatic = true;	

// 	spaceToDraw.addEventListener('mousemove', temp)
// }

// function temp(ev) {
// 	let control_point = `Q ${ev.clientX - spaceToDraw.getBoundingClientRect().x},${ev.clientY - spaceToDraw.getBoundingClientRect().y}`,
// 		indexFirst = spaceToDraw.lastChild.attributes.d.value.slice(0, index_of_L);		

// 	if (spaceToDraw.lastChild.attributes.d.value.indexOf('L') > 0 && replaceIndex == undefined) {
// 		if (spaceToDraw.lastChild.attributes.d.value.match(/L/g).length > 1) {
// 			let regTest = /L/g,
// 				resultTest,
// 				stock;

// 			while ((stock = regTest.exec(spaceToDraw.lastChild.attributes.d.value)) !== null) {
// 				resultTest = stock.index;
// 				replaceIndex = resultTest;
// 			}
// 			indexRegTest = spaceToDraw.lastChild.attributes.d.value.slice(0, resultTest);
// 		} else spaceToDraw.lastChild.attributes.d.value = spaceToDraw.lastChild.attributes.d.value.replace(/L/, control_point);
// 	} else {
// 		if (replaceIndex != undefined) {
// 			spaceToDraw.lastChild.attributes.d.value = indexRegTest + control_point + indexL;
// 		} else spaceToDraw.lastChild.attributes.d.value = indexFirst + control_point + indexL;
// 	}
// }

// /*
// *
// *  Option path: Courbe de Bézier
// *
// */

// let bezier = false, counter_bezier;

// function b_curve_temp(e) {
// 	bezier = true;
// 	counter_bezier = 0;
// }

// function b_curve_draw(e, pathDrawing, temp_coord) {
// 	document.addEventListener('mousedown', function(e) {
// 		if (e.target == temp_coord[0]) {
// 			temp_coord[0].style.fill = 'green';
// 			temp_coord[1].style.fill = 'red';
			
// 			temp_target = e.target;
// 		} else if (e.target == temp_coord[1]) {
// 			temp_coord[0].style.fill = 'red';
// 			temp_coord[1].style.fill = 'green';
			
// 			temp_target = e.target;
// 		}
	
// 		tempX = e.clientX;
// 		tempY = e.clientY;		
// 	})

// 	spaceToDraw.addEventListener('mousemove', function(e) {
// 		let current_points = pathDrawing.attributes.d.value.split(' ');

// 		try {
// 			temp_target.attributes.cx.value = e.clientX - spaceToDraw.getBoundingClientRect().x;
// 			temp_target.attributes.cy.value = e.clientY - spaceToDraw.getBoundingClientRect().y;
// 		} catch(e) {
// 		}
		
// 		if (e.target == document.querySelectorAll('.b-temp')[0]) {

// 			let temp_index = pathDrawing.attributes.d.value.lastIndexOf('C'),
// 				temp_control = `C ${temp_coord[0].attributes.cx.value},${temp_coord[0].attributes.cy.value}`;

// 			pathDrawing.attributes.d.value = pathDrawing.attributes.d.value.substr(0, temp_index) + temp_control + ' ' + current_points[current_points.length - 2] + ' ' + current_points[current_points.length - 1];
// 		} else if (e.target == document.querySelectorAll('.b-temp')[1]) {						
				
// 			let temp_ind = pathDrawing.attributes.d.value.indexOf(current_points[current_points.length - 3]);
			
// 			bezier_control_point = ` ${temp_coord[1].attributes.cx.value},${temp_coord[1].attributes.cy.value} `;
// 			pathDrawing.attributes.d.value = pathDrawing.attributes.d.value.substr(0, temp_ind) + current_points[current_points.length - 3] + bezier_control_point + current_points[current_points.length - 1];			
// 		}

// 	})

// 	document.addEventListener('mouseup', function() {
// 		temp_target = null;
// 	})	
// }



//////////////////////////////////////
//////////////////////////////////////
////////////* SHAPES *////////////////
//////////////////////////////////////
//////////////////////////////////////

// /*
// *
// *  Fonction de dessin d'une ligne
// *
// */

// function draw_line(e) {
// 	let lineDrawing = spaceToDraw.lastChild;

// 	if (shape.line.points1.length == 0) {
// 		shape.line.points1.push(e.clientX);
// 		shape.line.points1.push(e.clientY);

// 		lineDrawing.setAttribute('x1', shape.line.points1[0] - spaceToDraw.getBoundingClientRect().x);
// 		lineDrawing.setAttribute('y1', shape.line.points1[1] - spaceToDraw.getBoundingClientRect().y);

// 		spaceToDraw.addEventListener('mousemove', line_temp);

// 	} else if (shape.line.points1.length != 0 && shape.line.points2.length == 0){
// 		spaceToDraw.removeEventListener('mousemove', line_temp);

// 		shape.line.points2.push(e.clientX);
// 		shape.line.points2.push(e.clientY);			
		
// 		lineDrawing.setAttribute('x2', shape.line.points2[0] - spaceToDraw.getBoundingClientRect().x);
// 		lineDrawing.setAttribute('y2', shape.line.points2[1] - spaceToDraw.getBoundingClientRect().y);

// 		lineDrawing.classList.add('line-example');

// 		shape.line.points1 = [];
// 		shape.line.points2 = [];

// 		shape.line.choose = false;
// 		spaceToDraw.removeEventListener('click', shape.line.draw);

// 		fifty_shades_of_shape();
// 	}
// }

// function line_temp(ev) {
// 	let lineDrawing = spaceToDraw.lastChild;		
	
// 	lineDrawing.setAttribute('x2', ev.clientX - spaceToDraw.getBoundingClientRect().x);
// 	lineDrawing.setAttribute('y2', ev.clientY - spaceToDraw.getBoundingClientRect().y);
// 	lineDrawing.classList.add('line-example');
// }

// /*
// *
// *  Fonction de dessin d'une polyline
// *
// */

// function draw_polyline(e) {

// 	let polylineDrawing = spaceToDraw.lastChild;

// 	aux_menu_polyline.style.display = 'block';
	
// 	if (polylineDrawing.hasAttribute('points'))
// 		polylineDrawing.attributes.points.value += ` ${e.clientX - spaceToDraw.getBoundingClientRect().x},${e.clientY - spaceToDraw.getBoundingClientRect().y}`;
// 	else 
// 		polylineDrawing.setAttribute('points', `${e.clientX - spaceToDraw.getBoundingClientRect().x},${e.clientY - spaceToDraw.getBoundingClientRect().y}`);


// 	polylineDrawing.classList.add('polyline-example');
// }

// polyline_starting_points.addEventListener('click', function() {
// 	let starting_coordonate = spaceToDraw.lastChild.attributes.points.value.split(' ')[0];

// 	spaceToDraw.lastChild.attributes.points.value += ` ${starting_coordonate} `;
// 	polyline_points = spaceToDraw.lastChild.attributes.points.value;
// })

// aux_menu_polyline.children[1].addEventListener('click', function() {
// 	// let resize = document.querySelector('.resize-button');
// 	// resize.style.display = 'block';

// 	// resize.setAttribute('x', `${selected_shape.getBoundingClientRect().x - spaceToDraw.getBoundingClientRect().x + selected_shape.getBoundingClientRect().width}`);
// 	// resize.setAttribute('y', `${selected_shape.getBoundingClientRect().y - spaceToDraw.getBoundingClientRect().y + selected_shape.getBoundingClientRect().height}`);								

// 	this.parentNode.style.display = 'none';
// 	spaceToDraw.removeEventListener('click', shape.polyline.draw);

// 	fifty_shades_of_shape();
// })






///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
////////////* ANCIEN MENU CHOIX DE FORMES *////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////





/*
*
*  Animation d'ouverture du menu de formes géométriques
*
*/

// let timing = 30;

// choose_shape_menu.addEventListener('mouseover', function(e) {
// 	for (let i = 0; i < choose_shape.length; i++) {
// 		choose_shape[i].style.display = 'block';
		
// 		setTimeout(function() {			
// 			choose_shape[i].style.top = 0;
// 		}, timing);

// 		timing += 30;
// 	}
// })

// drawing_contener.addEventListener('mouseover', function() {
// 	choose_shape.forEach(function(t) {
// 		t.style.top = '-100%';
// 		t.style.display = 'none';

// 		timing = 30;
// 	})
// }) 

// /*
// *
// *  Indication des noms de formes
// *
// */

// let add_panel_shape = document.createElement('div');

// choose_shape.forEach(function(t) {

// 	t.addEventListener('pointerover', function() {
// 		let indicX = this.getBoundingClientRect().x,
// 			indicY = this.getBoundingClientRect().y,
// 			indicW = this.getBoundingClientRect().width;

// 		add_panel_shape.className = 'shape-add-panel';
// 		choose_shape_menu.appendChild(add_panel_shape);

// 		add_panel_shape.style.left = indicX + indicW / 2 - add_panel_shape.offsetWidth / 2 + 'px' ;
// 		add_panel_shape.style.top = indicY - add_panel_shape.offsetHeight - 5  + 'px';
		
// 		add_panel_shape.innerHTML = this.children[0].localName;
// 	});

// 	t.addEventListener('pointerleave', function() {
// 		choose_shape_menu.removeChild(add_panel_shape);
// 	});
// })




///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////* CHANGEMENTS D'ATTRIBUTS *////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////






/*
*
*  Fill Attribute : Fill Rule
*
*/

// fill_menu.children[1].children[1].addEventListener('change', function(e) {
// 	let choose_fillrule = document.querySelector('.fill-rull form');

// 	for (let i = 0; i < choose_fillrule.elements.length; i++) {
// 		if (choose_fillrule.elements[i].checked == true)
// 			selected_shape.style.fillRule = choose_fillrule.elements[i].dataset.svg;
		
// 		shape_container.querySelectorAll('.draw-survey')[shape_index].children[1].children[0].style.fillRule = choose_fillrule.elements[i].dataset.svg;
// 	}	

// })




///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/////////////* DEBUT EXPORT PAS FINI */////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////







/*
*
*  Fonction d'export de code pour integration HTML
*
*/

// export_svg.addEventListener('click', export_info);

// function export_info(e) {
// 	let info = 	`<svg version="2" baseProfile="full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${spaceToDraw.attributes.width.value} ${spaceToDraw.attributes.height.value}">`
// 				+ spaceToDraw.innerHTML.substr(spaceToDraw.innerHTML.lastIndexOf('/g') + 3)
// 				+ `</svg>`;
				 
// 	console.log(info);

// 	spaceToDraw.addEventListener('click', define_viewbox);
// }

// function define_viewbox(e) {	
// 	let xStart = e.clientX - spaceToDraw.getBoundingClientRect().x,
// 		yStart = e.clientY - spaceToDraw.getBoundingClientRect().y;

// 	spaceToDraw.innerHTML += `<rect x="${xStart}" y="${yStart}"/>`;
// }