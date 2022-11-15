import {Keyboard} from "./Keyboard.js";
var keyboard = new Keyboard();
var cnsl = document.getElementById('console');
var interfaceLang = 0;

addEventListener('change', (e)=>{
	let langDropdownBox = document.getElementById('language');
	interfaceLang = (langDropdownBox.value === 'EN')? 0 : 1;

	for(const [key, value] of keyboard.Keys.entries()){
		let keyText;
		switch (interfaceLang){
			case 1:
				keyText = value.AR;
				break
			default:
				keyText = value.EN;
				break;
		}
		document.getElementById(key).innerHTML = `<p class="">${keyText}</p>`;
	}
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
		
		let ch = keyboard.getKey(e.code)[interfaceLang];
		cnsl.innerHTML += ch;
		console.log(ch);
	}
);

addEventListener('keyup', (e)=>{
	let key = document.getElementById(e.code);
	key.style.backgroundColor = 'black';
	key.style.boxShadow = '-2px 2px #444';
	
	}
);