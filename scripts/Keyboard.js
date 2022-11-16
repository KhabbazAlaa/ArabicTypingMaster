export class Keyboard{
	//initializing the object by providing the English-Arabic pairs of each key
	constructor(){
		this.keys = new Map();
		this.keys.set('Backquote', { EN: '`',  AR: 'ذ'});
		//upper row 
		//KeyLangMap.set('Tab', 'TAB');
		this.keys.set('KeyQ', { EN: 'Q',  AR: 'ض'});
		this.keys.set('KeyW', { EN: 'W',  AR: 'ص'});
		this.keys.set('KeyE', { EN: 'E',  AR: 'ث'});
		this.keys.set('KeyR', { EN: 'R',  AR: 'ق'});
		this.keys.set('KeyT', { EN: 'T',  AR: 'ف'});
		this.keys.set('KeyY', { EN: 'Y',  AR: 'غ'});
		this.keys.set('KeyU', { EN: 'U',  AR: 'ع'});
		this.keys.set('KeyI', { EN: 'I',  AR: 'ه'});
		this.keys.set('KeyO', { EN: 'O',  AR: 'خ'});
		this.keys.set('KeyP', { EN: 'P',  AR: 'ح'});
		this.keys.set('BracketLeft', { EN: '[',  AR:'ج'});
		this.keys.set('BracketRight',{ EN: ']',  AR: 'د'});
		//home row key
		//KeyLangMap.et('CapsLock', 'CAPSLOCK')
		this.keys.set('KeyA', { EN: 'A',  AR: 'ش'});
		this.keys.set('KeyS', { EN: 'S',  AR: 'س'});
		this.keys.set('KeyD', { EN: 'D',  AR: 'ي'});
		this.keys.set('KeyF', { EN: 'F',  AR: 'ب'});
		this.keys.set('KeyG', { EN: 'G',  AR: 'ل'});
		this.keys.set('KeyH', { EN: 'H',  AR: 'ا'});
		this.keys.set('KeyJ', { EN: 'J',  AR: 'ت'});
		this.keys.set('KeyK', { EN: 'K',  AR: 'ن'});
		this.keys.set('KeyL', { EN: 'L',  AR: 'م'});
		this.keys.set('Semicolon', { EN: ';',  AR: 'ك'});
		this.keys.set('Quote', { EN: '\\',  AR: 'ط'});
		//lower row keys
		this.keys.set('KeyZ', { EN: 'Z',  AR: 'ئ'});
		this.keys.set('KeyX', { EN: 'X',  AR: 'ء'});
		this.keys.set('KeyC', { EN: 'C',  AR: 'ؤ'});
		this.keys.set('KeyV', { EN: 'V',  AR: 'ر'});
		this.keys.set('KeyB', { EN: 'B',  AR: 'لا'});
		this.keys.set('KeyN', { EN: 'N',  AR: 'ى'});
		this.keys.set('KeyM', { EN: 'M',  AR: 'ة'});
		this.keys.set('Comma',  { EN: ',',  AR: 'و'});
		this.keys.set('Period', { EN: '.',  AR: 'ز'});
		this.keys.set('Slash',  { EN: '/',  AR: 'ظ'});
	}

	/*
	*@returns {Map}		
	*/
	get Keys(){
		return this.keys;
	}

	/*
	*@param {string} code: code is the key of our Map
	*@returns object{EN: '', AR: ''}
	*/
	getKey(code){
		return this.keys.get(code);
	}
	
	getKeyText(code, lang){
		let keyText;
		switch (lang){
			case 'AR':
				keyText = this.getKey(code).AR;
				break;
			default:
				keyText = this.getKey(code).EN;
				break;
		}

		return keyText;
	}
	

	updateCapsLockState(){
		let light = document.getElementById('light');
		light.style.backgroundColor = event.getModifierState('CapsLock')? '#00FF00':'black';
	}

	updateLanguage(lang){
		for(const code of this.keys.keys()){
			let keyText = this.getKeyText(code, lang);
			document.getElementById(code).textContent = keyText;	
		}
	}

	applyPressStyle(code, pressed){
		let key = document.getElementById(code);
		if(pressed){
			key.classList.add("press");
			key.classList.remove("unpress");
		}
		else{
			key.classList.add("unpress");
			key.classList.remove("press");
		}
	}
};