export class Source{
    constructor(){
        this.keys = ['', '', '', '', ''];
        this.currentIndex = 0;
        
        this.sourcePanel = document.getElementById("source");
        this.coverPanel = document.getElementById("cover");
        this.cover("press any key to start!");
        this.resetKeys();
    }
    get Keys(){
        return this.keys;
    }

    validateKeyStroke(value){
        let currentKey = this.sourcePanel.children[this.currentIndex];
        if(value == this.keys[this.currentIndex]){
			currentKey.classList.add("okay");
			currentKey.classList.remove("error");
			this.currentIndex++;
		}
		else{
			currentKey.classList.add("error");
			currentKey.classList.remove("okay");
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
            this.sourcePanel.children[i].classList.remove("error");
			this.sourcePanel.children[i].classList.remove("okay");
        }
    }

    cover(msg){  
        this.unCover(false);
        this.coverPanel.textContent = msg;
        this.coverPanel.classList.add("info");
    }
    
    unCover(flag = true){
        this.coverPanel.style.zIndex = (flag == true)? -1 : 1;
    }
}