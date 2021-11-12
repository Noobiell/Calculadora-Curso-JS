class CalcController {

    constructor(){

        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize(){
        let displayCalcEl  = document.querySelector("#display");
        let dateEl  = document.querySelector("#data");
        let timeEL  = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "12/11/2021";
        timeEL.innerHTML = "6:onibus";
    }

    get displayCalc(){
        return this._displayCalc;
    }
    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get dataAutal(){
        return this._currentDate;
    }
    set dataAutal(valor){
        this._dataAtual = valor;
    }

}