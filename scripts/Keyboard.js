export class Keyboard{
	constructor(){
		this.KeyLangMap = new Map();
		this.KeyLangMap.set('Backquote', ['`', 'ذ']);
		//upper row 
		//KeyLangMap.set('Tab', 'TAB');
		this.KeyLangMap.set('KeyQ', ['Q', 'ض']);
		this.KeyLangMap.set('KeyW', ['W', 'ص']);
		this.KeyLangMap.set('KeyE', ['E', 'ث']);
		this.KeyLangMap.set('KeyR', ['R', 'ق']);
		this.KeyLangMap.set('KeyT', ['T', 'ف']);
		this.KeyLangMap.set('KeyY', ['Y', 'غ']);
		this.KeyLangMap.set('KeyU', ['U', 'ع']);
		this.KeyLangMap.set('KeyI', ['I', 'ه']);
		this.KeyLangMap.set('KeyO', ['O', 'خ']);
		this.KeyLangMap.set('KeyP', ['P', 'ح']);
		this.KeyLangMap.set('BracketLeft', ['[', 'ج']);
		this.KeyLangMap.set('BracketRight',[']', 'د']);
		//home row keys
		//KeyLangMap.et('CapsLock', 'CAPSLOCK');
		this.KeyLangMap.set('KeyA', ['A', 'ش']);
		this.KeyLangMap.set('KeyS', ['S', 'س']);
		this.KeyLangMap.set('KeyD', ['D', 'ي']);
		this.KeyLangMap.set('KeyF', ['F', 'ب']);
		this.KeyLangMap.set('KeyG', ['G', 'ل']);
		this.KeyLangMap.set('KeyH', ['H', 'ا']);
		this.KeyLangMap.set('KeyJ', ['J', 'ت']);
		this.KeyLangMap.set('KeyK', ['K', 'ن']);
		this.KeyLangMap.set('KeyL', ['L', 'م']);
		this.KeyLangMap.set('Semicolon', [';', 'ك']);
		this.KeyLangMap.set('Quote', ['\'', 'ط']);
		//lower row keys
		this.KeyLangMap.set('KeyZ', ['Z', 'ئ']);
		this.KeyLangMap.set('KeyX', ['X', 'ء']);
		this.KeyLangMap.set('KeyC', ['C', 'ؤ']);
		this.KeyLangMap.set('KeyV', ['V', 'ر']);
		this.KeyLangMap.set('KeyB', ['B', 'لا']);
		this.KeyLangMap.set('KeyN', ['N', 'ى']);
		this.KeyLangMap.set('KeyM', ['M', 'ة']);
		this.KeyLangMap.set('Comma', [',', 'و']);
		this.KeyLangMap.set('Period', ['.', 'ز']);
		this.KeyLangMap.set('Slash', ['/', 'ظ']);
	}
	
	getKeyLangMap(key){
		return this.KeyLangMap.get(key);
	}
};