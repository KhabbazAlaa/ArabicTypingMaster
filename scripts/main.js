import {Keyboard} from "./Keyboard.js";
var keyboard = new Keyboard();
var outputTextArea = document.getElementById('outputText');
var interfaceLang = 'EN';

/* to check capslock state once any botton pressed 
it could be deleted if I find a way to check capslock state 
before any keypress  */
var isFirstAction = true;

addEventListener('change', (e)=>{
	interfaceLang = document.getElementById('language').value;
	keyboard.updateLanguage(interfaceLang);
});

addEventListener('keydown', (e)=>{
		e.preventDefault();
		keyboard.applyPressStyle(e.code, true);
		
		if(e.code === 'CapsLock' || isFirstAction){
			keyboard.updateCapsLockState();
			isFirstAction = false;
		}
		
		let key = keyboard.getKeyText(e.code, interfaceLang);
		outputTextArea.value += key;
	}
);

addEventListener('keyup', (e)=>{
	keyboard.applyPressStyle(e.code, false);	
	}
);