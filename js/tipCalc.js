class Tip{
    constructor(bill, numPerson, tipPecent){
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
        this.tip = document.querySelector(".tip-percent");
        this.total = document.querySelector(".total");
    }
    showResult(tipPercent, tipTotal){
        this.tip.textContent = `$${tipPercent}`;
        this.total.textContent = `$${tipTotal}`;
    }

    reset(){
        this.tip.textContent = "$0.00";
        this.total.textContent = "$0.00";
        for (this.input of  document.getElementsByTagName("input")){
            this.input.value = ""
        }
        for (this.tip of document.querySelectorAll(".tip")){
            this.tip.id = "";
        }
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

