class CalcController {

    constructor(){
        this._locale = 'pt-br'
        this._displayCalcEl  = document.querySelector("#display");
        this._dateEl  = document.querySelector("#data");
        this._timeEL  = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){

        this.setDisplayDateTime();
    
        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000)

    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEL.innerHTML;
    }
    set displayTime(value){
        return this._timeEL.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl;
    }
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }
    set currentDate(value){
        this._currentDate = value;
    }

}
