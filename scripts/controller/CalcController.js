class CalcController {

    constructor(){
        this._operation = [];
        this._locale = 'pt-br'
        this._displayCalcEl  = document.querySelector("#display");
        this._dateEl  = document.querySelector("#data");
        this._timeEL  = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){

        this.setDisplayDateTime();
    
        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000)

    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(events => {

            element.addEventListener(events, fn, false);

        })
    }

    clearAll(){
        this._operation = [];
    }

    clearEntry(){
        this._operation.pop()
    }

    getLastOperation(){

        return this._operation[this._operation.length-1];

    }

    setLastOperation(value){
        this._operation[this._operation.length-1] = value;
    }

    isOperator(value){
        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);// O INDEXOFF PESQUISA O VALOR DENTRO DO ARRAI E VERIFICA SE EXISTE LÁ, SE EXISTE ELE TRAZ A POSIÇÃO DO ARRAY
    }

    addOperator(value){

        if(isNaN(this.getLastOperation())){
            //quando string
            if(this.isOperator(value)){
                //trocar o operador
                this.setLastOperation() = value;

            }else if(isNaN(value)){
                
                //outra coisa
                console.log(value);

            }else{

                this._operation.push(value);

            }
        }else{
            //quando numero
            let newValue = this.getLastOperation().toString() + value.toString();
            this.setLastOperation(parseInt(newValue));
        }

        console.log(this._operation);
    }

    setError(){
        this.displayCalc = "Error";
    }

    execBtn(value){
        switch(value){
            case 'ac':
                this.clearAll();
                break;
            case 'ca':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperator('+');
                break;
            case 'subtracao':
                this.addOperator('-');
                break;
            case 'divisao':
                this.addOperator('/');
                break;
            case 'multiplicacao':
                this.addOperator('*');
                break;
            case 'porcento':
                this.addOperator('%');
                break;
            case 'igual':

                break;
            case 'ponto':
                this.addOperator('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            this.addOperator(parseInt(value));
                break;
            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, 'click drag', e=>{

                let textBtn = btn.className.baseVal.replace("btn-", "");
                this.execBtn(textBtn);
    
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{

                btn.style.cursor = "pointer";

            });

        });

    }


    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {day: "2-digit", month: "short", year: "numeric"});
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
