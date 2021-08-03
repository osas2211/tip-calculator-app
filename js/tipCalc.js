class Tip{
    constructor(bill = 0, numPerson = 1, tipPecent = 1){
        this.bill = bill;
        this.numPerson = numPerson;
        this.tipPecent = tipPecent;
    }
    calcTip(){
        return ((this.bill * (this.tipPecent/100)) / this.numPerson).toFixed(2);
    }

    calcTotal(){
        return ((this.bill/this.numPerson) + ((this.bill * (this.tipPecent/100)) / this.numPerson)).toFixed(2);
    }
}


class UI{
    constructor (){
        this.tip_ = document.querySelector(".tip-percent");
        this.total = document.querySelector(".total");
    }
    showResult(tipPercent, tipTotal){
        this.tip_.textContent = `$${tipPercent}`;
        this.total.textContent = `$${tipTotal}`;
    }

    reset(){
        this.tip_.textContent = "$0.00";
        this.total.textContent = "$0.00";
        for (this.input of  document.getElementsByTagName("input")){
            this.input.value = ""
        }
        for (this.tip__ of document.querySelectorAll(".tip")){
            this.tip__.id = "";
        }
        document.querySelector(".reset").style.opacity = "0.5"
    }
    active(target, grid){
        if (target.className === "tip"){
            custom.value = target.firstElementChild.textContent;
            for (this.child of grid.children){
                this.child.id = "";
            }
            target.id = "active"
        }
    }
}

