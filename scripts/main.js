import {Keyboard} from "./Keyboard.js";
var keyboard = new Keyboard();
//var cnsl = document.getElementById('console');
var interfaceLang = 'EN';

// to check capslock state once any botton pressed 
// it could be deleted if I find a way to check capslock state 
//before any keypress 
var isFirstAction = true;

addEventListener('change', (e)=>{
	interfaceLang = document.getElementById('language').value;
	keyboard.updateLanguage(interfaceLang);
});

addEventListener('keydown', (e)=>{
		e.preventDefault();
		let key = document.getElementById(e.code);
		keyboard.applyPressedStyle(key, true);
		
		if(e.code === 'CapsLock' || isFirstAction){
			keyboard.updateCapsLockState();
			isFirstAction = false;
		}
		
		// let ch = keyboard.getKey(e.code)[interfaceLang];
		// cnsl.innerHTML += ch;
		// console.log(ch);
	}
);

addEventListener('keyup', (e)=>{
	let key = document.getElementById(e.code);
	keyboard.applyPressedStyle(key, false);	
	}
);