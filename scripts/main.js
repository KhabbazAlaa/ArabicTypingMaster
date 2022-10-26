import {Keyboard} from "./Keyboard.js";
var keyboard = new Keyboard();


addEventListener('change', (e)=>{
	let langDropdownBox = document.getElementById('language');
	for(const [key, value] of keyboard.Keys.entries()){
		let keyText = (langDropdownBox.value === 'EN')? value[0]:value[1];
		document.getElementById(key).innerHTML = `<p class="">  ${keyText}  </p>`;
	}

});

addEventListener('keydown', (e)=>{
		e.preventDefault();
		let key = document.getElementById(e.code);
		key.style.backgroundColor = '#222222';
		key.style.boxShadow = 'none';
		
		if(e.code === 'CapsLock'){
			keyboard.updateCapsLockState();
		}	

	}
);

addEventListener('keyup', (e)=>{
	let key = document.getElementById(e.code);
	key.style.backgroundColor = 'black';
	key.style.boxShadow = '-2px 2px #444';
	
	}
);