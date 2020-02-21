/*
*
*
* Changer Background SVG
*
*/

aux_menu_background.addEventListener('click', function() {
	background_change_tool.click();
})

background_change_tool.addEventListener('change', function() {
	spaceToDraw.style.backgroundColor = background_change_tool.value;
})

/*
*
*  Sélection dans l'historique
*
*/

let shape_index, old_fill, old_stroke, centerX, centerY;


function history_select_tool() {
	history_list.forEach(function(t) {		
		shape_index = history_list.indexOf(t);

		t.addEventListener('mouseover', function() {
			history_list = Array.from(document.querySelectorAll('.shape-container div'));
			shape_index = history_list.indexOf(this);
			
			old_fill = window.getComputedStyle(history_list[shape_index].children[2].children[0]).fill;
			old_stroke = window.getComputedStyle(history_list[shape_index].children[2].children[0]).stroke;
			
			spaceToDraw.children[shape_index + 1].style.fill = 'rgba(111, 217, 204, 0.4)';
			spaceToDraw.children[shape_index + 1].style.stroke = 'rgb(111, 217, 204)';
		})

		t.addEventListener('mouseleave', function() {
			shape_index = history_list.indexOf(this);

			spaceToDraw.children[shape_index + 1].style.fill = old_fill;
			spaceToDraw.children[shape_index + 1].style.stroke = old_stroke;
		})

		t.addEventListener('click', function() {
			document.querySelectorAll('.tool h2').forEach(function(t) {
				t.style.color = 'white';
			})
			document.querySelectorAll('.tool h3').forEach(function(t) {
				t.style.color = 'white';
			})

			shape_index = history_list.indexOf(this);
			selected_shape = spaceToDraw.children[shape_index + 1];

			centerX = selected_shape.getBoundingClientRect().x - spaceToDraw.getBoundingClientRect().x  + selected_shape.getBoundingClientRect().width / 2;
			centerY = selected_shape.getBoundingClientRect().y - spaceToDraw.getBoundingClientRect().y  + selected_shape.getBoundingClientRect().height / 2;

			history_list_selection();

			if (selected_shape.localName == 'rect') {
				ellipse_radius_container.style.display = 'none';
				rounded_rect_container.style.display = 'block';
				change_points.style.color = 'grey';
			} else if (selected_shape.localName == 'ellipse') {
				rounded_rect_container.style.display = 'none';
				ellipse_radius_container.style.display = 'block';				
				change_points.style.color = 'grey';
			} else {
				rounded_rect_container.style.display = 'none';
				ellipse_radius_container.style.display = 'none';
				change_points.style.color = 'white';
			}

			points_history.style.display = 'none';	
		})
	})

	return shape_index;
}

function history_list_selection() {
	for (let i = 0; i < history_list.length; i++) {	
		if (i == shape_index)
			history_list[i].children[0].classList.add('shape-selected');
		else
			history_list[i].children[0].classList.remove('shape-selected');
	}
}

/*
*
*  Renommer dessin de l'historique
*
*/

change_shape_name.addEventListener('click', function() {
	shape_container.children[shape_index].children[0].style.display = 'none';
	shape_container.children[shape_index].children[1].style.display = 'block';

	set_tooltip(tool_tip.rename_shape);
	change_name();
})


function change_name() {
	shape_container.children[shape_index].children[1].addEventListener('keypress', function(e) {
		if (e.keyCode == 13) {
		shape_container.children[shape_index].children[0].innerHTML = shape_container.children[shape_index].children[1].value;
		
		shape_container.children[shape_index].children[0].style.display = 'block';
		shape_container.children[shape_index].children[1].style.display = 'none';
		}
	})
}

/*
*
*  Resize tool
*
*/
let choose_scale = document.querySelector('.scale-tool-container form'),
	choose_translate = document.querySelector('.translate-tool-container form'),
	choose_rotate = document.querySelector('.rotate-tool-container form');


transform_menu.children[0].children[1].addEventListener('change', function(e) {

	selected_shape.setAttribute('transform', `scale(${choose_scale.elements[0].value / 100}, ${choose_scale.elements[1].value / 100}) translate(${choose_translate.elements[0].value}, ${choose_translate.elements[1].value}) rotate(${choose_rotate.elements[0].value},${centerX},${centerY})`); 
})


/*
*
*  Translate tool
*
*/

transform_menu.children[1].children[1].addEventListener('change', function(e) {

	selected_shape.setAttribute('transform', `translate(${choose_translate.elements[0].value}, ${choose_translate.elements[1].value}) scale(${choose_scale.elements[0].value / 100}, ${choose_scale.elements[1].value / 100}) rotate(${choose_rotate.elements[0].value},${centerX},${centerY})`); 
})

let move_tool_select = false;


// spaceToDraw.addEventListener('mousedown', function(e) {
// 	if (e.target != spaceToDraw) {
// 		target_shape = e.target;

// 		// if (target_shape.hasAttribute('transform')) {
// 		// 	target_shape.setAttribute('transform', `translate(0,0) scale(${choose_scale.elements[0].value / 100}, ${choose_scale.elements[1].value / 100}) rotate(${choose_rotate.elements[0].value},${centerX},${centerY})`); 
// 		// } else 
// 			target_shape.setAttribute('transform', 'translate(0,0)');

// 		translating(e);
// 	}
// })

// function translating(event) {
// 	if (target_shape.className.baseVal != 'modif-temp') {
// 		const xInit = event.clientX,
// 			  yInit = event.clientY;

// 		spaceToDraw.addEventListener('mousemove', moving);

// 		function moving(e) {
// 			target_shape.setAttribute('transform', `translate(${e.clientX - xInit},${e.clientY - yInit})`);
// 			target_shape.style.cursor = 'move';
// 		}
			
// 		document.addEventListener('mouseup', function() {
// 			if (target_shape) {
// 				let transform_number = target_shape.attributes.transform.value.slice(target_shape.attributes.transform.value.indexOf('(') +1, target_shape.attributes.transform.value.indexOf(')'));
				
// 				if (target_shape.localName == 'rect') {					
// 					target_shape.attributes.x.value = Number(target_shape.attributes.x.value) + Number(transform_number.split(',')[0]);
// 					target_shape.attributes.y.value = Number(target_shape.attributes.y.value) + Number(transform_number.split(',')[1]);

// 					target_shape.attributes.transform.value = '';
// 				} else if (target_shape.localName == 'ellipse') {
// 					target_shape.attributes.cx.value = Number(target_shape.attributes.cx.value) + Number(transform_number.split(',')[0]);
// 					target_shape.attributes.cy.value = Number(target_shape.attributes.cy.value) + Number(transform_number.split(',')[1]);

// 					target_shape.attributes.transform.value = '';
// 				}
// 			}

// 			target_shape = null;
// 			move_tool_select = false;

// 			spaceToDraw.removeEventListener('mousemove', moving);				
// 		})
// 	}
// }



/*
*
*  Rotate tool
*
*/
transform_menu.children[2].children[1].addEventListener('submit', function(e) {
	e.preventDefault();
})

transform_menu.children[2].children[1].addEventListener('change', function(e) {
	e.preventDefault();

	selected_shape.setAttribute('transform', `rotate(${choose_rotate.elements[0].value},${centerX},${centerY}) translate(${choose_translate.elements[0].value}, ${choose_translate.elements[1].value}) scale(${choose_scale.elements[0].value / 100}, ${choose_scale.elements[1].value / 100})`); 
})

document.querySelectorAll('.flip span').forEach(function(t) {
	t.addEventListener('click', function() {
		if (this.innerHTML == '90°') {
			transform_menu.children[2].children[1].elements[0].value = 90;
			selected_shape.setAttribute('transform', `rotate(90,${centerX},${centerY}) translate(${choose_translate.elements[0].value}, ${choose_translate.elements[1].value}) scale(${choose_scale.elements[0].value / 100}, ${choose_scale.elements[1].value / 100})`); 
		} else if (this.innerHTML == '180°') {
			transform_menu.children[2].children[1].elements[0].value = 180;
			selected_shape.setAttribute('transform', `rotate(180,${centerX},${centerY}) translate(${choose_translate.elements[0].value}, ${choose_translate.elements[1].value}) scale(${choose_scale.elements[0].value / 100}, ${choose_scale.elements[1].value / 100})`); 			
		}

	})
})

/*
*
*  Suprimer un dessin
*
*/

function delete_shape() {
	delete_tool.addEventListener('click', function() {
		selected_shape.remove();
		shape_container.children[shape_index].remove();
		history_list = history_list.slice(shape_index -1, shape_index);
	})
}

delete_shape();


/*
*
*  Dessins de l'historique
*
*/


function fifty_shades_of_shape() {
	let spaceToDraw_clone = spaceToDraw.cloneNode(false),
		shape_clone = spaceToDraw.lastChild.cloneNode(true),
		viewbox_width = Math.ceil((spaceToDraw.lastChild.getBoundingClientRect().width) / 10) + 1,
		viewbox_height = Math.ceil((spaceToDraw.lastChild.getBoundingClientRect().height) / 10) + 1;


	spaceToDraw_clone.setAttribute('width', 80);
	spaceToDraw_clone.setAttribute('height', 60);
	spaceToDraw_clone.style.backgroundColor = 'transparent';

	shape_clone.setAttribute('transform', `scale(0.1) translate(${spaceToDraw.getBoundingClientRect().x - spaceToDraw.lastChild.getBoundingClientRect().x + 1} ${spaceToDraw.getBoundingClientRect().y - spaceToDraw.lastChild.getBoundingClientRect().y + 1})`);
	spaceToDraw_clone.setAttribute('viewBox', `0 0 ${viewbox_width} ${viewbox_height}`);

	drawing_history.children[0].children[drawing_history.children[0].childElementCount - 1].appendChild(spaceToDraw_clone);
	spaceToDraw_clone.appendChild(shape_clone);

	drawing_history.children[0].style.height = 'unset';
}


/*
*
*  Copier / Coller un objet (menu auxiliaire)
*
*/

//let copy_select = false, temp_copy; (144 main.js)


aux_menu_copy.addEventListener('click', copy_selector);


function copy_selector() {
	set_tooltip(tool_tip.copy_paste);
	copy_select = true;

	temp_copy = target_shape.cloneNode(true);

	aux_menu_copy.style.display = 'none';
	aux_menu_paste.style.display = 'block';

	last_pointX = target_shape.getBoundingClientRect().x;
	last_pointY = target_shape.getBoundingClientRect().y;
}

function paste_shape() {
	
//transformer le tanslate [MODIF]
	temp_copy.setAttribute('transform', `translate(${paste_tempX - last_pointX},${paste_tempY - last_pointY})`);
	spaceToDraw.appendChild(temp_copy);

	let shaping_history = document.createElement('div');
	shaping_history.classList.add('draw-survey');

	drawing_history.children[0].appendChild(shaping_history);
	shaping_history.innerHTML = `<p>${target_shape.localName}</p>
								 <input class="change-shape-name" 
								 type="text" value="${target_shape.localName}">`;

	history_list = Array.from(document.querySelectorAll('.shape-container div'));
	history_select_tool();
	fifty_shades_of_shape();

	let paste_copy = history_list[history_list.length - 1].children[2].children[0];
	paste_copy.setAttribute('transform', `scale(0.1) translate(0,0)`);

	target_shape = undefined;

	aux_menu_copy.style.display = 'block';
	aux_menu_paste.style.display = 'none';
}

/*
*
*
*	Fonction de modifications des points (path)
*
*/

let target_change_points, shape_array;

change_points.addEventListener('click', function() {
	if (selected_shape.localName == 'path') {
		set_tooltip(tool_tip.change_path_point);

		target_change_points = selected_shape.attributes.d.value.split(' ');
	
		shape_array = [];
		for (let i = 0; i < target_change_points.length; i++) {
			if (target_change_points[i] == 'M' || target_change_points[i] == 'L' || target_change_points[i] == 'T') {
				shape_array.push(target_change_points[i].concat(' ' + target_change_points[i + 1]));
				i++;
			} else if (target_change_points[i] == 'Q') {
				shape_array.push(target_change_points[i].concat(' ' + target_change_points[i + 1]) + ' ' + target_change_points[i + 2]);
				i + 2;
			} else if (target_change_points[i] == 'Z')
				shape_array.push(target_change_points[i]);
		}	

		for (let i = 0; i < shape_array.length; i++) {
			if (shape_array[i] == 'Z')
				break

			let cx_point = shape_array[i].split(' ')[1].split(',')[0],
				cy_point = shape_array[i].split(' ')[1].split(',')[1];

			spaceToDraw.innerHTML += ` <rect x="${cx_point - 4}" y="${cy_point - 4}"
											 fill="rgba(227,40,40,0.8)" width="6" height="6"
											 stroke="rgb(227,40,40)" stroke-width="1" 
											 class="modif-temp"
											 style="cursor: pointer;" />`;
		}

		//je réassigne selected_shape après que spaceToDraw ait changé
			selected_shape = spaceToDraw.children[shape_index + 1];
		
		move_points();
	}

	validate_points.style.display = 'block';
})

let current_target, temp_points;

function move_points() {
	let	current_target_index;

	temp_points = document.querySelectorAll('.modif-temp');

	spaceToDraw.addEventListener('mousedown', selected_points_to_move);
	spaceToDraw.addEventListener('mousemove', move_selected_points);
	spaceToDraw.addEventListener('mouseup', empty_selected_point);
}

function selected_points_to_move(e) {
	for (let i = 0; i < temp_points.length; i++) {
		if (e.target == temp_points[i]) {
			current_target = e.target;
			current_target_index = i;
		}
	}
}

function move_selected_points(e) {
	if (current_target != undefined) {
		try{
			current_target.attributes.x.value = e.clientX - spaceToDraw.getBoundingClientRect().x - 4;
			current_target.attributes.y.value = e.clientY - spaceToDraw.getBoundingClientRect().y - 4;

			shape_array[current_target_index] = shape_array[current_target_index].split(' ')[0] + ' ' + current_target.attributes.x.value + ',' + current_target.attributes.y.value;
		} catch(e) {
		}

		selected_shape.attributes.d.value = shape_array.join(' ');
	}		
}

function empty_selected_point() {
	shape_container.querySelectorAll('.draw-survey')[shape_index].children[2].children[0].attributes.d.value = selected_shape.attributes.d.value;

	current_target = '';		
}

validate_points.addEventListener('click', function() {
	document.querySelectorAll('.modif-temp').forEach(function(t) {
		t.remove();
	})

	spaceToDraw.removeEventListener('mousedown', selected_points_to_move);
	spaceToDraw.removeEventListener('mousemove', move_selected_points);
	spaceToDraw.removeEventListener('mouseup', empty_selected_point);

	this.style.display = 'none';
})


/*
*
*  Afficher (mode texte) les coordonnées d'un dessin
*
*/

list_points.addEventListener('click', function() {
	points_history.style.display = 'block';
	points_history.innerHTML = '';

	if (selected_shape.tagName == 'rect') {
		points_history.innerHTML = `x: ${selected_shape.attributes.x.value}  
									y: ${Math.floor(selected_shape.attributes.y.value)}  
									width: ${selected_shape.attributes.width.value}  
									height: ${selected_shape.attributes.height.value}`;
	}
	else if (selected_shape.tagName == 'ellipse') {
		points_history.innerHTML = `cx: ${selected_shape.attributes.cx.value}  
									cy: ${Math.floor(selected_shape.attributes.cy.value)}  
									rx: ${Math.floor(selected_shape.attributes.rx.value)}  
									ry: ${Math.floor(selected_shape.attributes.ry.value)}`;
	} else if (selected_shape.tagName == 'path') {
		points_history.innerHTML = selected_shape.attributes.d.value;
	}
})

/*
*
*  Fonction UNDO
*
*/

let last_draw; 

aux_menu_undo.addEventListener('click', function() {
	last_draw = spaceToDraw.children[spaceToDraw.children.length - 1]; /*[MODIF]*/

	if (last_draw.localName == 'rect' || last_draw.localName == 'ellipse') {
		shape_container.lastChild.remove();
		history_list = Array.from(document.querySelectorAll('.shape-container div'));

		last_draw.remove();
	} else if (last_draw.localName == 'polygon') {
		let points_index = last_draw.attributes.points.value.split(' ');
		
		if (points_index.length == 2) {
			shape_container.lastChild.remove();	
			history_list = Array.from(document.querySelectorAll('.shape-container div'));

			last_draw.remove();
		} else points_index.pop();

		last_draw.attributes.points.value = points_index.join(' ');
	} else if (last_draw.localName == 'path') {
		let curves_instructions = ['L', 'M', 'C', 'Q', 'T', 'Z'],
			d_value = last_draw.attributes.d.value,
			index_to_erase = 0;

		if (last_draw.attributes.d.value.split(' ').length < 6) {
			shape_container.lastChild.remove();
			history_list = Array.from(document.querySelectorAll('.shape-container div'));

			last_draw.remove();
		}

		for (let i = 0; i < curves_instructions.length; i++) {

			if (d_value.lastIndexOf(curves_instructions[i]) > index_to_erase)
				index_to_erase = d_value.lastIndexOf(curves_instructions[i]);
		}

		let last_index = last_draw.attributes.d.value.slice(0, index_to_erase);

		last_draw.attributes.d.value = last_index;

	}

})


/*
*
*  Fonction d'export de code pour integration HTML
*
*/

export_svg.addEventListener('click', export_info);

function export_info(e) {
	let info = 	`<svg version="2" baseProfile="full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${spaceToDraw.attributes.width.value} ${spaceToDraw.attributes.height.value}" style="background-color: ${window.getComputedStyle(spaceToDraw).backgroundColor}">`
				+ spaceToDraw.innerHTML.substr(spaceToDraw.innerHTML.lastIndexOf('/g') + 3)
				+ `

				</svg>`;
				 
	svg_to_export.innerText = info;
	export_container.style.display = 'flex';

	close_export_window.addEventListener('click', function() {
		export_container.style.display = 'none';
	})
}