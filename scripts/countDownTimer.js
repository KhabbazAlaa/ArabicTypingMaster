/*
// To assign event
const startEvent = new Event("start");
document.dispatchEvent(startEvent);
// To trigger the event Listener
document.addEventListener("start", () => {
    console.log("The start event was triggered")
});

// To trigger the Event
document.dispatchEvent(startEvent);
*/
export class CountDownTimer{
    constructor(seconds){
        //The number of seconds that the counter will count down to 
        this.seconds = seconds;
        this.counter;
        this.timer = document.getElementById("clock");   
        this.timeOutEvent = new Event("timeOut");
        document.addEventListener("timeOut", () => {
            console.log("The timeOut event was triggered")
        });
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
        this.counter = setInterval(() => this.countDown(), 1000);
    }
    stop(){
        clearInterval(this.counter);
        console.log(this.counter);
        this.counter = '';
        console.log(this.counter);
        
        this.timer.classList.add("incorrect");
    }

    // every second it's called by setInterval() to decrease the value of counter by 1
    countDown(){
        if(this.counter <= 0){
            this.stop();
            document.dispatchEvent(this.timeOutEvent);

            return false;
        }
        
        this.counter--;
        this.updateUI();
        return true;
    }
    
    updateUI(){
        let timeLeft = this.toString(this.counter);
        this.timer.textContent = timeLeft;
        // if (this.counter <= 0) {
        //     this.timer.classList.add("incorrect");
        // }
    }
}