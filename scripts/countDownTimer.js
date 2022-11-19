export class CountDownTimer{
    constructor(seconds){
        //The number of seconds that the counter will count down to 
        this.seconds = seconds;
        this.interval;
        this.timer = document.getElementById("clock");   
        this.timeOutEvent = new Event("timeOut");
    }

    get timeIsOver(){
        return (this.seconds <= 0);
    }
    /*
    @params seconds: int
    @returns string 00:00
    */
    toString(seconds) {
        let minutes = Math.floor(seconds / 60);
        let extraSeconds = seconds % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
        return `${minutes}:${extraSeconds}`;
    }

    // Update the count down every 1 second
    start(){
        this.interval = setInterval(()=>{
            this.countDown();
        }, 1000);
    }
    stop(){
        clearInterval(this.interval);
        document.dispatchEvent(this.timeOutEvent);
    }

    // every second it's called by setInterval() to decrease the value of counter by 1
    countDown(){
        this.seconds--;
        this.updateUI();
    
        if(this.timeIsOver){
            this.stop();
        }
    }
    
    updateUI(){
        let timeLeft = this.toString(this.seconds);
        this.timer.textContent = timeLeft;
        if(this.timeIsOver){
            this.timer.classList.add("error");
        }
    }
}