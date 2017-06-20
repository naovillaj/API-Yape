"use strict";

const render = (root) =>{
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');
  	const update = function() {
    render(root);
  	}
  	wrapper.append(screen1());	
	root.append(wrapper);
}

$(_=>{
	const root = $("#root");
	render(root);
});

// const state = {
// 	datos: null
// };

// $(_=>{
// 	$.get("https://randomuser.me/api/", (json) =>{
// 		if(!json){
// 			return alert("error.message");
// 		}
// 		state.datos = json;
// 		console.log(json);
// 		const root = $("#root");
// 		render(root);
// 	});
// })