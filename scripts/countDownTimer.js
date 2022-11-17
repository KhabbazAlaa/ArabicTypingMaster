export class CountDownTimer{
    constructor(seconds){
        this.countDownTime = seconds;
    }
    get CountDownTime(){
        return this.countDownTime;
    }

    /*
    @params seconds: int
    @returns string 00:00
    */
    convertToTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let extraSeconds = seconds % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
        return `${minutes}:${extraSeconds}`;
    }

    countDown(){
        if(this.countDownTime <= 0)
            return false;
        
        this.countDownTime--;
        this.updateUI();
        return true;
    }
    
    updateUI(){
        let timeLeft = this.convertToTime(this.CountDownTime);
        document.getElementById("clock").textContent = timeLeft;
    }
}