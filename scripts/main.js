import {Keyboard} from "./keyboard.js";
import { Source } from "./source.js";
import { CountDownTimer } from "./countDownTimer.js";

var interfaceLang = 'EN';
var keyboard = new Keyboard();
var source = new Source();
var defaultTime = 5;
var countDownTimer = new CountDownTimer(defaultTime);
var isFirstAction = true;
var result = {
	totalKeyStrokes: 0, 
	grossKeyStrokes: 0
};

document.addEventListener("timeOut", () => {
	source.cover("Time Is Over!");
	console.log(result);
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
		let isCorrect = source.validateKeyStroke(keyboard.getKeyText(e.code));
		result.totalKeyStrokes++;
		if(isCorrect) {result.grossKeyStrokes++};
	}
);

addEventListener('keyup', (e)=>{
	keyboard.applyPressStyle(e.code, false);	
	}
);