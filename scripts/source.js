export class Source{
    constructor(){
        this.keys = ['', '', '', '', ''];
        this.resetKeys();
        this.updateUI();
    }
    get Keys(){
        return this.keys;
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
}