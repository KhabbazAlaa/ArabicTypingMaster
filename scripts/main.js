import {Keyboard} from "./keyboard.js";
import { Source } from "./source.js";
import { CountDownTimer } from "./countDownTimer.js";

var interfaceLang = 'EN';
var keyboard = new Keyboard();
var source = new Source();
var defaultTime = 5;
var countDownTimer = new CountDownTimer(defaultTime);

/* isFirstAction is here to check capslock state once any botton pressed 
it could be deleted if I find a way to check capslock state 
before any keypress  */
var isFirstAction = true;


addEventListener('change', (e)=>{
	interfaceLang = document.getElementById('language').value;
	keyboard.updateLanguage(interfaceLang);
});



addEventListener('keydown', (e)=>{
		e.preventDefault();
		if(isFirstAction){
			source.unCover(true);
			keyboard.updateCapsLockState();
			countDownTimer.start();
			isFirstAction = false;
			return;
		}

		keyboard.applyPressStyle(e.code, true);
		source.validateKeyStroke(keyboard.getKeyText(e.code));
	}
);

addEventListener('keyup', (e)=>{
	keyboard.applyPressStyle(e.code, false);	
	}
);