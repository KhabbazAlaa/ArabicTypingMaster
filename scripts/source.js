export class Source{
    constructor(){
        this.keys = ['', '', '', '', ''];
        this.currentIndex = 0;
        
        this.sourcePanel = document.getElementById("source");
        this.coverPanel = document.getElementById("cover");
        this.resetKeys();
    }
    get Keys(){
        return this.keys;
    }

    validateKeyStroke(value){
        let currentKey = this.sourcePanel.children[this.currentIndex];
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
        for(let i = 0; i < 5; i++){
            this.sourcePanel.children[i].textContent = this.keys[i];
            this.sourcePanel.children[i].classList.remove("incorrect");
			this.sourcePanel.children[i].classList.remove("correct");
        }
    }

    cover(msg){  
        this.unCover(false);
        this.coverPanel.textContent = msg;
    }
    
    unCover(flag = true){
        this.coverPanel.style.zIndex = (flag == true)? -1 : 1;
    }
}