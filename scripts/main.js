import {Keyboard} from "./Keyboard.js";
import { Source } from "./source.js";

var interfaceLang = 'EN';
var keyboard = new Keyboard();
var source = new Source();
// var outputTextArea = document.getElementById('outputText');
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

		
		let currentKey = document.getElementById("source").children[source.currentIndex];
		
		if(keyboard.getKeyText(e.code) == source.Keys[source.currentIndex]){
			currentKey.classList.add("correct");
			currentKey.classList.remove("incorrect");
			source.currentIndex++;
		}
		else{
			currentKey.classList.add("incorrect");
			currentKey.classList.remove("correct");
		}

		if(source.currentIndex >= 5){
			source.resetKeys();
		}
	}
);

addEventListener('keyup', (e)=>{
	keyboard.applyPressStyle(e.code, false);	
	}
);