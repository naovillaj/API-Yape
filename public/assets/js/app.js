"use strict";

const render = (root) =>{
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');
  const update = function() {
    render(root);
  }

	if(state.screen == null){
		wrapper.append(screen1(update));
	}

	if(state.screen == 'screen2'){
		wrapper.append(screen2(update));
	}

	if(state.screen == 'screen3'){
		wrapper.append(screen3(update));
	}

	if(state.screen == 'screen4'){
		wrapper.append(screen4(update));
	}

	if(state.screen == 'screen5'){
		wrapper.append(screen5(update));
	}

	if(state.screen == 'screen6'){
		wrapper.append(screen6(update));
	}

		root.append(wrapper);
}

const state = {
		screen: null,
		yapeUser : null
};

console.log(state.screen);

$(_=>{
	const root = $("#root");
	render(root);
});



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
