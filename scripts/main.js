import {Keyboard} from "./keyboard.js";
import { Source } from "./source.js";
import { CountDownTimer } from "./countDownTimer.js";

var interfaceLang = 'EN';
var keyboard = new Keyboard();
var source = new Source();
var countDownTimer = new CountDownTimer(60);

/* isFirstAction is here to check capslock state once any botton pressed 
it could be deleted if I find a way to check capslock state 
before any keypress  */
var isFirstAction = true;

// Update the count down every 1 second
var x = setInterval(function() {
	if(!countDownTimer.countDown())
		clearInterval(x);
}, 1000);

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