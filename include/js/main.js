function cl(test) {
	console.log('test');
}

/*
*
*  Bibliothèque de variables (pas du tout dans l'ordre, pratique...)
*
*/

let title = document.querySelector('header'),
	zuga_logo = document.querySelector('header svg'),
	front_page = document.querySelector('.intro'),
	logo_introduction = document.querySelector('.intro-container svg'),
	enter_zuga = document.querySelector('.choose-size button'),
	choose_shape = Array.from(document.querySelectorAll('.shapes-module svg')),
	drawing_contener = document.querySelector('.drawing-contener'),
	choose_shape_menu = document.querySelector('.choose-shape'),
	spaceToDraw = document.querySelector('.space-to-draw svg'),
	button_q_curve = document.querySelector('.q-curve'),
	button_b_curve = document.querySelector('.b-curve'),
	drawing_history = document.querySelector('.drawing-history'),
	history_tool = document.querySelector('.history-tool'),
	shape_commander = document.querySelector('.tool'),
	coordonates = document.querySelector('.coordonates'),
	fill_tool_container = document.querySelector('.fill-tool-container'),
	fill_tool = document.querySelector('.fill-tool-container input[type=color]'),
	move_tool = document.querySelector('.move'),
	rotate_tool = document.querySelector('.rotate'),
	gradient_tool = document.querySelector('.gradient'),
	filter_tool = document.querySelector('.filter'),
	pattern_tool = document.querySelector('.pattern'),
	color_stocks_table = document.querySelector('.stocks');
	aux_menu = document.querySelector('.aux-menu'),
	rounded_rect_container = document.querySelector('.rounded-rect-container'),
	rounded_rect_title = document.querySelector('.rounded-rect-title'),
	rounded_rect_menu = document.querySelector('.rounded-rect-menu'),
	ellipse_radius_container = document.querySelector('.ellipse-radius-container'),
	ellipse_title = document.querySelector('.ellipse-radius-title'),
	ellipse_radius_menu = document.querySelector('.ellipse-radius-menu'),
	aux_menu_polygon = document.querySelector('.polygon-options'),
	aux_menu_polyline = document.querySelector('.polyline-options'),
	polyline_starting_points = document.querySelector('.polyline-options .starting-point'),
	aux_menu_path_options = document.querySelector('.path-options'),
	path_starting_point = document.querySelector('.path-options .starting-point'),
	move_to_path = document.querySelector('.path-options .move-to'),
	close_path = document.querySelector('.z-path'),
	end_path = document.querySelector('.end-path'),
	aux_menu_curve = document.querySelector('.curve-tool'),
	curves_options = document.querySelector('.curves-options'),
	aux_menu_quadriatic = document.querySelector('.quadriatic-curve'),
	aux_menu_reflect_quadriatic = document.querySelector('.reflect-quadriatic'),
	aux_menu_bezier = document.querySelector('.bezier-curve'),
	aux_menu_bezier_validate = document.querySelector('.control-points'),
	aux_menu_v_line = document.querySelector('.v-line'),
	aux_menu_h_line = document.querySelector('.h-line'),
	aux_menu_copy = document.querySelector('.copy-tool'),
	aux_menu_paste = document.querySelector('.paste-tool'),
	aux_menu_undo = document.querySelector('.undo-tool'),
	attributes_window = document.querySelector('.attributes-window'),
	attributes_window_modal = document.querySelector('.attributes-modal'),
	aux_menu_background = document.querySelector('.background-tool'),
	validate_points = document.querySelector('.validate-points'),
	export_svg = document.querySelector('.export-svg'),
	export_container = document.querySelector('.export-svg-info'),
	close_export_window = document.querySelector('.export-info-container button'),
	svg_to_export = document.querySelector('.export-info-container p'),
	x_coordonate = document.querySelector('.x-coordonate'),
	y_coordonate = document.querySelector('.y-coordonate'),
	drawing_title = document.querySelector('.drawing-title'),
	transform_title = document.querySelector('.transform-title'),
	transform_menu = document.querySelector('.transform-menu'),
	fill_title = document.querySelector('.fill-title'),
	fill_menu = document.querySelector('.fill-menu'),
	stroke_title = document.querySelector('.stroke-title'),
	stroke_menu = document.querySelector('.stroke-menu'),
	shape_tool = document.querySelector('.shape-tool'),
	delete_tool = document.querySelector('.icon-trash-o'),
	change_points = document.querySelector('.icon-arrows-alt'),
	shape_container = document.querySelector('.shape-container'),
	crayon_tool = document.querySelector('.tool-module .icon-pencil'),
	aux_menu_crayon = document.querySelector('.crayon-options'),
	skip_intro = document.querySelector('.skip-intro-form'),
	choose_canvas = document.querySelector('.choose-canvas'),
	choose_canvas_name = document.querySelector('.define-name'),
	choose_canvas_length = document.querySelector('.define-carac'),
	canvas_predefined = document.querySelector('.predefined-canvas'),
	choose_canvas_orientation = document.querySelector('.define-canvas'),
	validate_canvas = document.querySelector('.validate-canvas'),
	change_shape_name = document.querySelector('.icon-paragraph')
	background_change_tool = document.querySelector('.background-change'),
	list_points = document.querySelector('.icon-info-circle'),
	points_history = document.querySelector('.points-history'),
	resolution_fail = document.querySelector('.change-resolution'),
	help_window = document.querySelector('.help-window'),
	help_tips = document.querySelector('.tips'),
	options_enabler = document.querySelector('.options'),
	options_module = document.querySelector('.options-module'),
	validate_options = document.querySelector('.options-module button');


/*
*
*	Resolution under (1024)
*
*/

window.addEventListener('resize', function() {
	if (document.documentElement.offsetWidth < 1280)
		resolution_fail.style.display = 'flex';
	else
		resolution_fail.style.display = 'none';			
})

/*
*
*	Animation du logo
*
*/

if (localStorage.oyasumi == 'true') {
	front_page.style.display = 'none';

	choose_canvas.style.display = 'flex';
}

logo_introduction.innerHTML += `<animateTransform
						 xlink:href="#chicken"
						 attributeName="transform"
						 attributeType="XML"
						 type="translate"
						 from="-10, 48"
						 to="0, 0"
						 dur="1.6s"
						 begin="0s"
						 calcMode="spline"	
						 keySplines=".23 1 .32 1"
						 repeatCount="1"/>

						 <animateTransform
						 xlink:href="#wing"
						 attributeName="transform"
						 attributeType="XML"
						 type="translate"
						 from="10, -48"
						 to="0, 0"
						 dur="1.6s"
						 begin="0s"
						 calcMode="spline"
						 keySplines=".23 1 .32 1"
						 repeatCount="1"/>`;

enter_zuga.addEventListener('click', function() {
	front_page.style.display = 'none';

	choose_canvas.style.display = 'flex';
})


/*
*
*  Passer l'introduction (test localStorage)
*
*/

skip_intro.elements[0].addEventListener('change', function(e) {
	localStorage.setItem('oyasumi', `${this.checked}`);
})


//Texte d'introduction//


help_window.style.left = (document.documentElement.offsetWidth / 2) - (help_window.offsetWidth / 2) + 'px';

/*
*
*  Choix du CANVAS
*
*/

canvas_predefined.addEventListener('change', function() {
	let length_options = [];
	
	for (let i = 0; i < canvas_predefined.elements[0].length; i++) {

		if (canvas_predefined.elements[0].options[i].selected) {
			length_options = canvas_predefined.elements[0].options[i].innerText.split(' ');
			
			choose_canvas_length.elements[0].value = length_options[0];
			choose_canvas_length.elements[1].value = length_options[2];
		}

	}
})

Array.from(choose_canvas_orientation.elements).forEach(function(t) {
	t.addEventListener('change', function() {
		let last_width = choose_canvas_length.elements[0].value,
			last_height = choose_canvas_length.elements[1].value;

		if (this.value == 'portrait' && choose_canvas_length.elements[0].value > choose_canvas_length.elements[1].value) {
			choose_canvas_length.elements[1].value = last_width;
			choose_canvas_length.elements[0].value = last_height;
		} else if (this.value == 'landscape' && choose_canvas_length.elements[0].value < choose_canvas_length.elements[1].value) {
			choose_canvas_length.elements[1].value = last_width;
			choose_canvas_length.elements[0].value = last_height;
		}
	})
})

validate_canvas.addEventListener('click', function() {
	choose_canvas.style.display = 'none';

	if (choose_canvas_name.elements[0].value != '')
		spaceToDraw.children[0].children[0].innerText = choose_canvas_name.elements[0].value;
	else
		spaceToDraw.children[0].children[0].innerText = 'Untitled SVG Drawing';

	spaceToDraw.attributes.width.value = choose_canvas_length.elements[0].value;
	spaceToDraw.attributes.height.value = choose_canvas_length.elements[1].value;

	//Coordonnées de réglettes
	x_coordonate.style.display = 'block';
	y_coordonate.style.display = 'block';

	x_coordonate.style.left = spaceToDraw.parentNode.parentNode.getBoundingClientRect().x - x_coordonate.getBoundingClientRect().width + 'px';
	x_coordonate.style.top = spaceToDraw.parentNode.parentNode.getBoundingClientRect().y - (x_coordonate.getBoundingClientRect().height / 2) + 'px';

	y_coordonate.style.left = spaceToDraw.parentNode.parentNode.getBoundingClientRect().x + (y_coordonate.getBoundingClientRect().width / 2) + 'px';
	y_coordonate.style.top = spaceToDraw.parentNode.parentNode.getBoundingClientRect().y - y_coordonate.getBoundingClientRect().height + 'px';

	//Mise en place cadrillage
	for (let i = 1; i < spaceToDraw.getBoundingClientRect().width / 10; i++) {
		if (i % 10 == 0) spaceToDraw.children[0].children[1].attributes.d.value += `M${i*10},0 V8`;
		else spaceToDraw.children[0].children[1].attributes.d.value += `M${i*10},0 V5`;
	}

	for (let i = 1; i < spaceToDraw.getBoundingClientRect().height / 10; i++) {
		if (i % 10 == 0) spaceToDraw.children[0].children[1].attributes.d.value += `M0,${i*10} H8`;
		else spaceToDraw.children[0].children[1].attributes.d.value += `M0,${i*10} H5`;
	}

	//Ouverture help_window
	help_window.style.animation = 'open_presentation 0.3s linear forwards';

	setTimeout(function() {
		help_tips.style.filter = 'opacity(1)';
	}, 300)
})


/*
*
*  Fonction d'animation des réglettes
*
*/

spaceToDraw.addEventListener('mousemove', live_coord_rect);

function live_coord_rect(e) {
	y_coordonate.children[0].innerText = e.clientX - spaceToDraw.getBoundingClientRect().x;
	x_coordonate.children[0].innerText = Math.ceil(e.clientY - spaceToDraw.getBoundingClientRect().y);

	x_coordonate.style.top = e.clientY - (x_coordonate.getBoundingClientRect().height / 2) + 'px';
	y_coordonate.style.left = e.clientX + (y_coordonate.getBoundingClientRect().width / 2) + 'px';
}


/*
*
*  Ouverture du menu auxiliaire
*
*/

let aux_menu_deploy = false, paste_tempX, paste_tempY, last_pointX, last_pointY;
let copy_select = false, temp_copy;

spaceToDraw.addEventListener('contextmenu', function(event) {
	event.preventDefault();

	if (window.getComputedStyle(aux_menu).display == 'block') {
		aux_menu.style.display = 'none';
		aux_menu.style.transform = 'scale(0)';

		aux_menu_deploy = false;
	}

	aux_menu.style.display = 'block';

	setTimeout(function() {
		aux_menu.style.left = event.clientX + 'px';
		aux_menu.style.top = event.clientY + 'px';
		aux_menu.style.transform = 'scale(1)';

		aux_menu_deploy = true;
	}, 100);

	if (event.target != spaceToDraw)
		target_shape = event.target;

	paste_tempX = event.clientX;
	paste_tempY = event.clientY;

	if (display_curves == false) curves_options.style.height = 0;

	aux_menu_paste.addEventListener('click', paste_shape);
})

document.addEventListener('click', function() {
	if (aux_menu_deploy == true) {
		aux_menu.style.display = 'none';
		aux_menu.style.transform = 'scale(0)';

		aux_menu_deploy = false;

		show_attributes_options = false;
		display_curves = false;
	}
})

/*
*
*  Ouverture du menu des options
*
*/

options_enabler.addEventListener('click', open_options_module);
validate_options.addEventListener('click', enable_options);

function open_options_module() {
	options_module.style.display = 'flex';
}

function enable_options() {
	if (options_module.children[0].children[1].children[1].elements[1].checked == true)
		spaceToDraw.children[0].children[1].style.stroke = 'transparent';
	else if (options_module.children[0].children[1].children[1].elements[0].checked == true)
		spaceToDraw.children[0].children[1].style.stroke = 'black';

	if (options_module.children[0].children[2].children[1].elements[1].checked == true)
		help_window.style.visibility = 'hidden';
	else if (options_module.children[0].children[2].children[1].elements[0].checked == true)
		help_window.style.visibility = 'visible';

	options_module.style.display = 'none';
}

/*
*
*
*	Infobulles
*
*/

let popover = document.createElement('div');

const popover_object = {
	rect: 'Rectangle',
	ellipse: 'Circle',
	path: 'Path',
	crayon: 'Hand-drawing',
	delete: 'Delete',
	shape_name: 'Change Drawing Name',
	shape_info: 'Info',
	change_point: 'Change all points'
}

show_popover(choose_shape[0]);
show_popover(choose_shape[1]);
show_popover(choose_shape[2]);
show_popover(crayon_tool);
show_popover(delete_tool);
show_popover(change_shape_name);
show_popover(list_points);
show_popover(change_points);

function show_popover(toName) {
	toName.addEventListener('mouseenter', function() {
		if (toName == choose_shape[0])
			popover.innerText = popover_object.rect;
		else if (toName == choose_shape[1])
			popover.innerText = popover_object.ellipse;
		else if (toName == choose_shape[2])
			popover.innerText = popover_object.path;
		else if (toName == crayon_tool)
			popover.innerText = popover_object.crayon;
		else if (toName == delete_tool)
			popover.innerText = popover_object.delete;
		else if (toName == change_shape_name)
			popover.innerText = popover_object.shape_name;
		else if (toName == list_points)
			popover.innerText = popover_object.shape_info;
		else if (toName == change_points)
			popover.innerText = popover_object.change_point;

		document.body.appendChild(popover);
		popover.classList.add('popover');

		popover.style.left = toName.getBoundingClientRect().x + toName.getBoundingClientRect().width / 2 + 'px';
		popover.style.top = toName.getBoundingClientRect().y + toName.getBoundingClientRect().height + 5 + 'px';
	})

	toName.addEventListener('mouseleave', function() {
		document.body.removeChild(popover);
	})
}