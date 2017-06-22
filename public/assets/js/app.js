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

	if(state.screen == 'screen7'){
		wrapper.append(screen7(update));
	}

	if(state.screen == 'screen8'){
		wrapper.append(screen8(update));
	}

		root.append(wrapper);
}

const state = {
		screen: null,
		yapeCode : null,
		yapePhone: null,
		yapeTerms: null,
		yapeName : null,
		yapeEmail : null,
		yapePassword : null,
		yapeCard: null,
		yapeMonth: null,
		yapeYear: null,
		pass: null
};

$(_=>{
	const root = $("#root");
	render(root);
});

