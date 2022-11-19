import {Keyboard} from "./keyboard.js";
import { Source } from "./source.js";
import { CountDownTimer } from "./countDownTimer.js";

var interfaceLang = 'EN';
var keyboard = new Keyboard();
var source = new Source();
var defaultTime = 5;
var countDownTimer = new CountDownTimer(defaultTime);
var isFirstAction = true;

document.addEventListener("timeOut", () => {
	source.cover("Time Is Over!");
});

addEventListener('change', (e)=>{
	interfaceLang = document.getElementById('language').value;
	keyboard.updateLanguage(interfaceLang);
});

addEventListener('keydown', (e)=>{
		e.preventDefault();
		if(isFirstAction){
			source.unCover();
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