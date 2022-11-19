export class Source{
    constructor(){
        this.keys = ['', '', '', '', ''];
        this.currentIndex = 0;
        this.resetKeys();
        this.updateUI();
    }
    get Keys(){
        return this.keys;
    }

    validateKeyStroke(value){
        let currentKey = document.getElementById("source").children[this.currentIndex];
        if(value == this.keys[this.currentIndex]){
			currentKey.classList.add("correct");
			currentKey.classList.remove("incorrect");
			this.currentIndex++;
		}
		else{
			currentKey.classList.add("incorrect");
			currentKey.classList.remove("correct");
		}
		//loading new keys
		if(this.currentIndex >= 5){
			this.resetKeys();
		}
    }
    resetKeys(){
        //let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let alphabet = "asdfghjkl";
        alphabet = alphabet.toUpperCase();
        for(let i = 0; i < 5; i++){
            const ch = alphabet[Math.floor(Math.random() * alphabet.length)]
            this.keys[i] = ch;
        }
        this.updateUI();
        this.currentIndex = 0;
    }

    updateUI(){
        let src = document.getElementById("source");
        for(let i = 0; i < 5; i++){
            src.children[i].textContent = this.keys[i];
            src.children[i].classList.remove("incorrect");
			src.children[i].classList.remove("correct");
        }
    }

    unCover(flag){  
        document.getElementById("cover").style.zIndex = (flag)? -1 : 1;
    }
}