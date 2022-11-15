import {Keyboard} from "./Keyboard.js";
var keyboard = new Keyboard();
//var cnsl = document.getElementById('console');
var interfaceLang = 'EN';

addEventListener('change', (e)=>{
	interfaceLang = document.getElementById('language').value;
	keyboard.updateKeys(interfaceLang);
});

addEventListener('keydown', (e)=>{
		e.preventDefault();
		let key = document.getElementById(e.code);
		key.style.backgroundColor = '#222222';
		key.style.boxShadow = 'none';
		e.value
		if(e.code === 'CapsLock'){
			keyboard.updateCapsLockState();
		}
		
		// let ch = keyboard.getKey(e.code)[interfaceLang];
		// cnsl.innerHTML += ch;
		// console.log(ch);
	}
);

addEventListener('keyup', (e)=>{
	let key = document.getElementById(e.code);
	key.style.backgroundColor = 'black';
	key.style.boxShadow = '-2px 2px #444';
	
	}
);