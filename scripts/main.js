import {Keyboard} from "./Keyboard.js";
//import {LANGUAGES} from "./KeyLangMap.js";
let t = new Keyboard();
console.log(t.getKeyLangMap('KeyQ'));

addEventListener('change', (e)=>{
	let langDropdownBox = document.getElementById('language');
	for(const [key, value] of KeyLangMap.entries()){
		if(langDropdownBox.value === 'EN'){
			document.getElementById(key).innerHTML = '<p class="">' + value[0] + '</p>'
		} 
		else{
			let bottom = '<p class="">' + value[1][0] + '</p>';
			document.getElementById(key).innerHTML = bottom;
		}
		//console.log(value[1]);
	}

});

addEventListener('keydown', (e)=>{
		e.preventDefault();
		let key = document.getElementById(e.code);
		key.style.backgroundColor = '#222222';
		key.style.boxShadow = 'none';
		
		if(e.code === 'CapsLock'){
			updateCapsLockState();
		}	

	}
);

addEventListener('keyup', (e)=>{
	let key = document.getElementById(e.code);
	key.style.backgroundColor = 'black';
	key.style.boxShadow = '-2px 2px #444';
	
	}
);

function updateCapsLockState(){
	let light = document.getElementById('light');
	light.style.backgroundColor = event.getModifierState('CapsLock')? '#00FF00':'black';
}