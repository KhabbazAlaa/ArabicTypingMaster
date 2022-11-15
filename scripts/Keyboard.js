export class Keyboard{
	//initializing the object by providing the English-Arabic pairs of each key
	constructor(){
		this.keys = new Map();
		this.keys.set('Backquote', ['`', 'ذ']);
		//upper row 
		//KeyLangMap.set('Tab', 'TAB');
		this.keys.set('KeyQ', ['Q', 'ض']);
		this.keys.set('KeyW', ['W', 'ص']);
		this.keys.set('KeyE', ['E', 'ث']);
		this.keys.set('KeyR', ['R', 'ق']);
		this.keys.set('KeyT', ['T', 'ف']);
		this.keys.set('KeyY', ['Y', 'غ']);
		this.keys.set('KeyU', ['U', 'ع']);
		this.keys.set('KeyI', ['I', 'ه']);
		this.keys.set('KeyO', ['O', 'خ']);
		this.keys.set('KeyP', ['P', 'ح']);
		this.keys.set('BracketLeft', ['[', 'ج']);
		this.keys.set('BracketRight',[']', 'د']);
		//home row keys
		//KeyLangMap.et('CapsLock', 'CAPSLOCK');
		this.keys.set('KeyA', ['A', 'ش']);
		this.keys.set('KeyS', ['S', 'س']);
		this.keys.set('KeyD', ['D', 'ي']);
		this.keys.set('KeyF', ['F', 'ب']);
		this.keys.set('KeyG', ['G', 'ل']);
		this.keys.set('KeyH', ['H', 'ا']);
		this.keys.set('KeyJ', ['J', 'ت']);
		this.keys.set('KeyK', ['K', 'ن']);
		this.keys.set('KeyL', ['L', 'م']);
		this.keys.set('Semicolon', [';', 'ك']);
		this.keys.set('Quote', ['\'', 'ط']);
		//lower row keys
		this.keys.set('KeyZ', ['Z', 'ئ']);
		this.keys.set('KeyX', ['X', 'ء']);
		this.keys.set('KeyC', ['C', 'ؤ']);
		this.keys.set('KeyV', ['V', 'ر']);
		this.keys.set('KeyB', ['B', 'لا']);
		this.keys.set('KeyN', ['N', 'ى']);
		this.keys.set('KeyM', ['M', 'ة']);
		this.keys.set('Comma', [',', 'و']);
		this.keys.set('Period', ['.', 'ز']);
		this.keys.set('Slash', ['/', 'ظ']);
	}

	/*
	*@returns {Map}		
	*/
	get Keys(){
		return this.keys;
	}

	/*
	*@param {string} code: code is the key of our Map
	*@returns {string[]}
	*/
	getKey(code){
		return this.keys.get(code);
	}

	updateCapsLockState(){
		let light = document.getElementById('light');
		light.style.backgroundColor = event.getModifierState('CapsLock')? '#00FF00':'black';
	}
};