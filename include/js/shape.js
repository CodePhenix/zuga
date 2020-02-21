let shape = {
	rect: {
		choose: false,
		draw: draw_rect
	},
	ellipse: {
		choose: false,
		draw: draw_circle
	},
	// polygon: {
	// 	choose: false,
	// 	draw: draw_polygon
	// },
	path: {
		choose: false,
		draw: draw_path
	}
}

let history_list, indexTest, selected_shape, target_shape;

choose_shape.forEach(function(t) {
	t.addEventListener('click', function() {
		//Erase non-valid shape//
		if (crayon_enable == true) {
			spaceToDraw.lastChild.remove();
			history_list[history_list.length - 1].remove();
			crayon_tool.style.border = 'unset';

			spaceToDraw.removeEventListener('click', crayon_start_point);
			spaceToDraw.removeEventListener('mousemove', hand_drawing);
		}

		for (let i = 0; i < Object.keys(shape).length; i++) {
			if (shape[Object.keys(shape)[i]].choose == true) {
				spaceToDraw.lastChild.remove();
				history_list[history_list.length - 1].remove();
				spaceToDraw.removeEventListener('click', shape[Object.keys(shape)[i]].draw);

				if (Object.keys(shape)[i] == 'rect') {
					spaceToDraw.removeEventListener('click', initiate_rectangle);
					spaceToDraw.removeEventListener('mousemove', set_rectangle_dimension);
				}
				else if (Object.keys(shape)[i] == 'ellipse') {
					spaceToDraw.removeEventListener('mousemove', circle_temp);
					spaceToDraw.removeEventListener('click', circle_start);
				}

				shape[Object.keys(shape)[i]].choose = false;
			}
		}

		shape[this.children[0].tagName].choose = true;
		
		if (shape[this.children[0].tagName].choose == true)
			this.style.border = '1px solid lightgrey';

		if (this.children[0].tagName == 'rect') {
			set_tooltip(tool_tip.draw_rect);
			spaceToDraw.addEventListener('click', initiate_rectangle);
		}
		else if (this.children[0].tagName == 'ellipse') {
			set_tooltip(tool_tip.draw_ellipse);
			spaceToDraw.addEventListener('click', circle_start);			
		} else if (this.children[0].tagName == 'path')
			set_tooltip(tool_tip.draw_path);
		

		spaceToDraw.innerHTML += ` <${this.children[0].localName} />`;
		spaceToDraw.addEventListener('click', shape[this.children[0].tagName].draw);
		
		let shaping_history = document.createElement('div');
		shaping_history.classList.add('draw-survey');

		drawing_history.children[0].appendChild(shaping_history);
		shaping_history.innerHTML = `<p>${spaceToDraw.lastChild.localName}</p><input class="change-shape-name" type="text" value="${spaceToDraw.lastChild.localName}">`;

		history_list = Array.from(document.querySelectorAll('.shape-container div'));
		history_select_tool();

		selected_shape = spaceToDraw.lastChild;

		//resize_tool();

		shape_tool.style.height = 'unset';
		points_history.style.display = 'none';
	})
})


/*
*
*  Fonction de dessin d'un rectangle
*
*/

function draw_rect(e) {
	let rectDrawing = spaceToDraw.lastChild;

	rectDrawing.classList.add('rect-example');
	rectDrawing.setAttribute('rx', '0');
	rectDrawing.setAttribute('ry', '0');

	if (rectDrawing.hasAttribute('width')) {
		spaceToDraw.removeEventListener('mousemove', set_rectangle_dimension);
		spaceToDraw.removeEventListener('click', shape.rect.draw);
		
		fifty_shades_of_shape();
		set_tooltip(tool_tip.history);

		shape.rect.choose = false;
		choose_shape[0].style.border = 'unset';
	}

}

function initiate_rectangle(e) {
	let rectDrawing = spaceToDraw.lastChild;

	rectDrawing.setAttribute('x', e.clientX - (rectDrawing.getBoundingClientRect().width / 2) - spaceToDraw.getBoundingClientRect().x);
	rectDrawing.setAttribute('y', e.clientY - (rectDrawing.getBoundingClientRect().height / 2) - spaceToDraw.getBoundingClientRect().y);

	spaceToDraw.addEventListener('mousemove', set_rectangle_dimension);
}

function set_rectangle_dimension(e) {
	let rectDrawing = spaceToDraw.lastChild;

	spaceToDraw.removeEventListener('click', initiate_rectangle);

	rectDrawing.setAttribute('width', e.clientX - spaceToDraw.getBoundingClientRect().x - rectDrawing.attributes.x.value);
	rectDrawing.setAttribute('height', e.clientY - spaceToDraw.getBoundingClientRect().y - rectDrawing.attributes.y.value);
}

/*
*
*  Fonction de dessin d'un polygon
*
*/

// function draw_polygon(e) {
// 	let polygonDrawing = spaceToDraw.lastChild;

// 	aux_menu_polygon.style.display = 'block';

// 	if (polygonDrawing.hasAttribute('points'))
// 		polygonDrawing.attributes.points.value += ` ${e.clientX - spaceToDraw.getBoundingClientRect().x},${e.clientY - spaceToDraw.getBoundingClientRect().y}`;
// 	else 
// 		polygonDrawing.setAttribute('points', `${e.clientX - spaceToDraw.getBoundingClientRect().x},${e.clientY - spaceToDraw.getBoundingClientRect().y}`);

// 	polygonDrawing.classList.add('polygon-example');
// }

// aux_menu_polygon.addEventListener('click', function() {
// 	aux_menu_polygon.style.display = 'none';

// 	spaceToDraw.removeEventListener('click', shape.polygon.draw);

// 	fifty_shades_of_shape();
// })

/*
*
*  Fonction de dessin d'un cercle (ellipse)
*
*/

function draw_circle(e) {
	let circleDrawing = spaceToDraw.lastChild;

	circleDrawing.classList.add('circle-example');

	if (circleDrawing.hasAttribute('rx')) {
		spaceToDraw.removeEventListener('mousemove', circle_temp);
		spaceToDraw.removeEventListener('click', shape.ellipse.draw);
		
		fifty_shades_of_shape();
		set_tooltip(tool_tip.history);

		shape.ellipse.choose = false;
		choose_shape[1].style.border = 'unset';		
	}

}

function circle_start(e) {
	let circleDrawing = spaceToDraw.lastChild;

	circleDrawing.setAttribute('cx', e.clientX - spaceToDraw.getBoundingClientRect().x);
	circleDrawing.setAttribute('cy', e.clientY - spaceToDraw.getBoundingClientRect().y);

	spaceToDraw.addEventListener('mousemove', circle_temp);
}

function circle_temp(e) {
	let rayon, rootx, rooty, 
		circleDrawing = spaceToDraw.lastChild;

 	spaceToDraw.removeEventListener('click', circle_start);

	rootx = ((e.clientX - spaceToDraw.getBoundingClientRect().x) - circleDrawing.attributes.cx.value) * ((e.clientX - spaceToDraw.getBoundingClientRect().x) - circleDrawing.attributes.cx.value);
	rooty = ((e.clientY - spaceToDraw.getBoundingClientRect().y) - circleDrawing.attributes.cy.value) * ((e.clientY - spaceToDraw.getBoundingClientRect().y) - circleDrawing.attributes.cy.value);
	rayon = Math.sqrt(rootx + rooty);

	circleDrawing.setAttribute('rx', rayon);
	circleDrawing.setAttribute('ry', rayon);

	let ellipse_form_elements = Array.from(document.querySelector('.ellipse-radius-menu form').elements);

	ellipse_form_elements[0].attributes.value.value = Math.ceil(rayon);
	ellipse_form_elements[1].attributes.value.value = Math.ceil(rayon);
}

/*
*
*  Fonction de dessin d'un path
*
*/

let last_index_of_L, display_curves, validation, path_d, end_d_path, path_attr,
	moveTo_point = false, 
	horizontal_trigger = false,
	vertical_trigger = false;

function draw_path(e) {
	let pathDrawing = spaceToDraw.lastChild;
	path_d = []; /*reset*/

	aux_menu_path_options.style.display = 'block';

	// Dessin du chemin //

	if (pathDrawing.hasAttribute('d') == false) { //initiate starting point
		pathDrawing.setAttribute('d', `M ${e.clientX - spaceToDraw.getBoundingClientRect().x},${Math.floor(e.clientY - spaceToDraw.getBoundingClientRect().y)}`);
		set_tooltip(tool_tip.path_options);
	} else if (horizontal_trigger == true) { //draw horizontal line
		pathDrawing.attributes.d.value += ``;

		horizontal_trigger = false;
	} else if (vertical_trigger == true) { //draw vertical line
		pathDrawing.attributes.d.value += ``;

		vertical_trigger = false;
	} else if (quadriatic == true) { //draw quadriactic curve
		let control_point = `Q ${e.clientX - spaceToDraw.getBoundingClientRect().x},${Math.floor(e.clientY - spaceToDraw.getBoundingClientRect().y)}`;	
		
		spaceToDraw.removeEventListener('mousemove', temp_quad);
		spaceToDraw.lastChild.attributes.d.value = spaceToDraw.lastChild.attributes.d.value.slice(0, last_index_of_L) + control_point + ' ' + spaceToDraw.lastChild.attributes.d.value.split(' ')[spaceToDraw.lastChild.attributes.d.value.split(' ').length - 1];
		
		aux_menu_reflect_quadriatic.style.display = 'block';

		quadriatic = false;
	} else if (moveTo_point == true) { //define new M point
		pathDrawing.attributes.d.value += ` ${e.clientX - spaceToDraw.getBoundingClientRect().x},${Math.floor(e.clientY - spaceToDraw.getBoundingClientRect().y)}`;

		moveTo_point = false;
	} else { // define next L point
		pathDrawing.attributes.d.value += ``;
	
	 	last_index_of_L = pathDrawing.attributes.d.value.lastIndexOf('L');
	}
	
	pathDrawing.classList.add('path-example');
	
	//Captation des points indépendemment des lettres d'instructions

	let path_d_temp = spaceToDraw.lastChild.attributes.d.value.split(' ');

	for (let i = 0; i < path_d_temp.length; i++) {
		if (path_d_temp[i] == 'M' || path_d_temp[i] == 'L' || path_d_temp[i] == 'C' || path_d_temp[i] == 'Q' || path_d_temp[i] == 'T' || path_d_temp[i] == 'Z')
			path_d.push(path_d_temp[i +1]);
	}
	
	// Visualisation temporaire du prochain point

	path_attr = pathDrawing.attributes.d.value;
	spaceToDraw.addEventListener('mousemove', path_temp);

}

//fonction de prévisualisation du chemin

function path_temp(e) {
	let e_temp = ` L ${e.clientX - spaceToDraw.getBoundingClientRect().x},${Math.floor(e.clientY - spaceToDraw.getBoundingClientRect().y)}`;
	
	if (horizontal_trigger == true)
		spaceToDraw.lastChild.attributes.d.value = path_attr + ` H ${e.clientX - spaceToDraw.getBoundingClientRect().x}`;
	else if (vertical_trigger == true)
		spaceToDraw.lastChild.attributes.d.value = path_attr + ` V ${Math.floor(e.clientY - spaceToDraw.getBoundingClientRect().y)}`;
	else
		spaceToDraw.lastChild.attributes.d.value = path_attr + e_temp;	
}

/*
*
*
*	Path Option : End Path
*
*/

end_path.addEventListener('click', function() {
	aux_menu_path_options.style.display = 'none';

	let last_index = 0,
		instructions = ['M', 'L', 'C', 'Q', 'T', 'Z'];

	for (let i = 0; i < instructions.length; i++) {
		if (spaceToDraw.lastChild.attributes.d.value.lastIndexOf(instructions[i]) > last_index)
			last_index = spaceToDraw.lastChild.attributes.d.value.lastIndexOf(instructions[i]);
	}

	spaceToDraw.lastChild.attributes.d.value = spaceToDraw.lastChild.attributes.d.value.slice(0, last_index - 1);

	spaceToDraw.removeEventListener('mousemove', path_temp);
	spaceToDraw.removeEventListener('click', draw_path);

	fifty_shades_of_shape();
	set_tooltip(tool_tip.history);

	shape.path.choose = false;
	choose_shape[2].style.border = 'unset';	
})

/*
*
*
*	Path Option : Go To Last M Point
*
*/

path_starting_point.addEventListener('click', function() {
	spaceToDraw.removeEventListener('mousemove', path_temp);

	let last_index = 0,
		instructions = ['M', 'L', 'C', 'Q', 'T', 'Z'];

	for (let i = 0; i < instructions.length; i++) {
		if (spaceToDraw.lastChild.attributes.d.value.lastIndexOf(instructions[i]) > last_index)
			last_index = spaceToDraw.lastChild.attributes.d.value.lastIndexOf(instructions[i]);
	}

	spaceToDraw.lastChild.attributes.d.value = spaceToDraw.lastChild.attributes.d.value.slice(0, last_index - 1);	

	let	m_index = spaceToDraw.lastChild.attributes.d.value.split(' ').lastIndexOf('M'),
		last_m_point = spaceToDraw.lastChild.attributes.d.value.split(' ')[m_index + 1];

	spaceToDraw.lastChild.attributes.d.value += ` L ${last_m_point}`;
})

/*
*
*
*	Path Option : Define New MoveTo
*
*/

move_to_path.addEventListener('click', moveTo_newPoint);

function moveTo_newPoint() {
	spaceToDraw.removeEventListener('mousemove', path_temp);
	moveTo_point = true;

	let last_index = 0,
		instructions = ['M', 'L', 'C', 'Q', 'T', 'Z'];

	for (let i = 0; i < instructions.length; i++) {
		if (spaceToDraw.lastChild.attributes.d.value.lastIndexOf(instructions[i]) > last_index)
			last_index = spaceToDraw.lastChild.attributes.d.value.lastIndexOf(instructions[i]);
	}

	spaceToDraw.lastChild.attributes.d.value = spaceToDraw.lastChild.attributes.d.value.slice(0, last_index - 1);
	spaceToDraw.lastChild.attributes.d.value += ` M`;	
}

/*
*
*
*	Path Option : Close Path (Z)
*
*/

close_path.addEventListener('click', function() {
	aux_menu_path_options.style.display = 'none';

	let last_index = 0,
		instructions = ['M', 'L', 'C', 'Q', 'T', 'Z'];
	
	for (let i = 0; i < instructions.length; i++) {
		if (spaceToDraw.lastChild.attributes.d.value.lastIndexOf(instructions[i]) > last_index)
			last_index = spaceToDraw.lastChild.attributes.d.value.lastIndexOf(instructions[i]);
	}

	spaceToDraw.lastChild.attributes.d.value = spaceToDraw.lastChild.attributes.d.value.slice(0, last_index - 1) + ' Z';

	spaceToDraw.removeEventListener('mousemove', path_temp);
	spaceToDraw.removeEventListener('click', draw_path);

	fifty_shades_of_shape();
	set_tooltip(tool_tip.history);

	shape.path.choose = false;
	choose_shape[2].style.border = 'unset';	
})

/*
*
*
*	Option path: Horizontal / Vertical Line
*
*/

aux_menu_h_line.addEventListener('click', draw_horizontal_line);
aux_menu_v_line.addEventListener('click', draw_vertical_line);

function draw_horizontal_line() {
	horizontal_trigger = true;
}

function draw_vertical_line() {
	vertical_trigger = true;
}

/*
*
*
* Path Options : Quadriatic Curve
*
*/

aux_menu_curve.addEventListener('mouseover', function() {
	display_curves = true;
	curves_options.style.height = 'auto';
	set_tooltip(tool_tip.quadriatic_curve);
})

//Quadriatic Curve//

let quadriatic = false,
	replaceIndex,
	indexRegTest;

aux_menu_quadriatic.addEventListener('click', q_curve_temp);

function q_curve_temp(e) {
	quadriatic = true;	
	spaceToDraw.removeEventListener('mousemove', path_temp);
	//je retranche le dernier point temporaire
	spaceToDraw.lastChild.attributes.d.value = spaceToDraw.lastChild.attributes.d.value.slice(0, spaceToDraw.lastChild.attributes.d.value.lastIndexOf('L') - 1);
	spaceToDraw.addEventListener('mousemove', temp_quad);
}

function temp_quad(ev) {
	let control_point = `Q ${ev.clientX - spaceToDraw.getBoundingClientRect().x},${ev.clientY - spaceToDraw.getBoundingClientRect().y} `,
		indexFirst = spaceToDraw.lastChild.attributes.d.value.slice(0, last_index_of_L);		

	spaceToDraw.lastChild.attributes.d.value = indexFirst + control_point + path_d[path_d.length - 1]; 
}


//Reflect Last Quadriatic Curve//

aux_menu_reflect_quadriatic.addEventListener('click', reflect_last_curve);

function reflect_last_curve() {
	let indexFirst = spaceToDraw.lastChild.attributes.d.value.slice(0, last_index_of_L);

	spaceToDraw.lastChild.attributes.d.value = indexFirst + 'T ' + path_d[path_d.length - 1];
	path_attr = spaceToDraw.lastChild.attributes.d.value; //remise à jour

	aux_menu_reflect_quadriatic.style.display = 'none';
}


/*
*
*
*	Outil crayon
*
*/

let crayon_enable = false;

crayon_tool.addEventListener('click', function(e) {
	crayon_tool.style.border = '1px solid lightgrey';
	crayon_enable = true;

	spaceToDraw.innerHTML += `<path fill='transparent' 
									stroke='black' stroke-width='3' 
									stroke-linecap='round' stroke-linejoin='round'
									d='' 
									class='test-writing' />`;

	aux_menu_crayon.style.display = 'block';

	let shaping_history = document.createElement('div');
	shaping_history.classList.add('draw-survey');

	drawing_history.children[0].appendChild(shaping_history);
	shaping_history.innerHTML = `<p>crayon</p>
								 <input class="change-shape-name" 
								 type="text" value="crayon">`;

	history_list = Array.from(document.querySelectorAll('.shape-container div'));
	
	history_select_tool();
	initiate_hand_drawing();
	set_tooltip(tool_tip.crayon);
})

function initiate_hand_drawing() {
	spaceToDraw.addEventListener('click', crayon_start_point);
}

function crayon_start_point(e) {
	let crayon_path = document.querySelectorAll('.drawing-contener .test-writing');

	crayon_path[crayon_path.length - 1].attributes.d.value = `M ${e.clientX - spaceToDraw.getBoundingClientRect().x},${e.clientY - spaceToDraw.getBoundingClientRect().y} Q`; 
	
	BigTasty();
}

function BigTasty() {
	spaceToDraw.removeEventListener('click', crayon_start_point);

	spaceToDraw.addEventListener('mousemove', hand_drawing);
}

function hand_drawing(e) {
	setTimeout(function() {
		try {
			spaceToDraw.lastChild.attributes.d.value += ` ${e.clientX - spaceToDraw.getBoundingClientRect().x},${e.clientY - spaceToDraw.getBoundingClientRect().y}`;
		} catch(e) {

		}
	}, 50);
}

aux_menu_crayon.addEventListener('click', function() {
	fifty_shades_of_shape();
	set_tooltip(tool_tip.history);

	crayon_enable = false;
	spaceToDraw.removeEventListener('mousemove', hand_drawing);
	this.style.display = 'none';
	crayon_tool.style.border = 'unset';
})