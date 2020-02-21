/*
*
*  Fill Attribute : Fill Color
*
*/

fill_menu.children[0].children[1].addEventListener('change', function(e) {
	let choose_fillcolor = document.querySelector('.fill-color form');

	selected_shape.style.fill = choose_fillcolor.elements[0].value;

	shape_container.querySelectorAll('.draw-survey')[shape_index].children[2].children[0].style.fill = choose_fillcolor.elements[0].value;
})

/*
*
*  Fill Attribute : Fill Opacity
*
*/

fill_menu.children[1].children[1].addEventListener('change', function(e) { //ex children[2]
	let choose_opacity = document.querySelector('.fill-opacity form');

	selected_shape.style.fillOpacity = choose_opacity.elements[0].value;

	shape_container.querySelectorAll('.draw-survey')[shape_index].children[2].children[0].style.fillOpacity = choose_opacity.elements[0].value;
})


/*
*
*  Stroke Attribute : Stroke Color
*
*/

stroke_menu.children[0].children[1].addEventListener('change', function(e) {
	let	color_wheel = document.querySelector('.stroke-color input');

	selected_shape.style.stroke = color_wheel.value;

	shape_container.querySelectorAll('.draw-survey')[shape_index].children[2].children[0].style.stroke = color_wheel.value;
})


/*
*
*  Stroke Attribute : Stroke Width
*
*/

stroke_menu.children[1].children[1].addEventListener('change', function(e) {
	let choose_width = document.querySelector('.stroke-width input');

	selected_shape.style.strokeWidth = choose_width.value;

	shape_container.querySelectorAll('.draw-survey')[shape_index].children[2].children[0].style.strokeWidth = choose_width.value;
})

/*
*
*  Stroke Attribute : Stroke Linecap
*
*/

stroke_menu.children[2].children[1].addEventListener('change', function(e) {
	let choose_linecap = document.querySelector('.stroke-linecap form');

	for (let i = 0; i < choose_linecap.elements.length; i++) {
		if (choose_linecap.elements[i].checked == true)
			selected_shape.style.strokeLinecap = choose_linecap.elements[i].dataset.svg;
	
		shape_container.querySelectorAll('.draw-survey')[shape_index].children[2].children[0].style.strokeLinecap = choose_linecap.elements[i].dataset.svg;
	}	

})

/*
*
*  Stroke Attribute : Stroke Linejoin
*
*/


stroke_menu.children[3].children[1].addEventListener('change', function(e) {
	let choose_linejoin = document.querySelector('.stroke-linejoin form');

	for (let i = 0; i < choose_linejoin.elements.length; i++) {
		if (choose_linejoin.elements[i].checked == true) 
			selected_shape.style.strokeLinejoin = choose_linejoin.elements[i].dataset.svg;
		
		if (window.getComputedStyle(selected_shape).strokeLinejoin == 'miter')
			document.querySelector('.stroke-miterlimit').style.color = 'white';
		else
			document.querySelector('.stroke-miterlimit').style.color = 'lightgrey';

	
	
		shape_container.querySelectorAll('.draw-survey')[shape_index].children[2].children[0].style.strokeLinejoin = choose_linejoin.elements[i].dataset.svg;
	}

})

/*
*
*  Stroke Attribute : Stroke Miterlimit
*
*/

stroke_menu.children[4].children[1].addEventListener('change', function(e) {
	let choose_miterlimit = document.querySelector('.stroke-miterlimit input');

	selected_shape.style.strokeMiterlimit = choose_miterlimit.value;

	shape_container.querySelectorAll('.draw-survey')[shape_index].children[2].children[0].style.strokeMiterlimit = choose_miterlimit.value;
})	

/*
*
*  Stroke Attribute : Stroke Dasharray
*
*/

stroke_menu.children[5].children[1].addEventListener('change', function(e) {
	let choose_dasharray = document.querySelector('.stroke-dasharray input');

	selected_shape.style.strokeDasharray = choose_dasharray.value;

	shape_container.querySelectorAll('.draw-survey')[shape_index].children[2].children[0].style.strokeDasharray = choose_dasharray.value;
})

/*
*
*  Stroke Attribute : Stroke Dashoffset
*
*/

stroke_menu.children[6].children[1].addEventListener('change', function(e) {
	let choose_dashoffset = document.querySelector('.stroke-dashoffset input');

	selected_shape.style.strokeDashoffset = choose_dashoffset.value;

	shape_container.querySelectorAll('.draw-survey')[shape_index].children[2].children[0].style.strokeDashoffset = choose_dashoffset.value;
})

/*
*
*  Stroke Attribute : Stroke Opacity
*
*/

stroke_menu.children[7].children[1].addEventListener('change', function(e) {
	let choose_opacity = document.querySelector('.stroke-opacity form');
	
	selected_shape.style.strokeOpacity = choose_opacity.elements[0].value;

	shape_container.querySelectorAll('.draw-survey')[shape_index].children[2].children[0].style.strokeOpacity = choose_opacity.elements[0].value;
})

/*
*
*
* Change Ellipse Radii
*
*/

let ellipse_form_elements = Array.from(document.querySelector('.ellipse-radius-menu form').elements);

ellipse_form_elements.forEach(function(t) {
	t.addEventListener('change', function() {
		selected_shape.attributes.rx.value = ellipse_form_elements[0].value;
		selected_shape.attributes.ry.value = ellipse_form_elements[1].value;

		//fifty_shades_of_shape();
	})
})

/*
*
*
* Set Rounded Corner for Rect
*
*/

let rect_form_elements = Array.from(document.querySelector('.rounded-rect-menu form').elements);

rect_form_elements.forEach(function(t) {
	t.addEventListener('change', function() {
		selected_shape.attributes.rx.value = rect_form_elements[0].value;
		selected_shape.attributes.ry.value = rect_form_elements[1].value;

		//fifty_shades_of_shape();
	})
})