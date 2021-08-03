const tip = document.querySelector(".tip");
const grid = document.querySelector(".grid-container");
const numPerson = document.querySelector(".num-of-people");
const numPersonInput = document.querySelector(".num");
const bill = document.querySelector(".bill");
const custom = document.querySelector(".custom");
const reset = document.querySelector(".reset");

const ui = new UI;

grid.addEventListener("click", (e)=>{
    ui.active(e.target, grid);
    if (e.target.className === "tip"){
        const tipCalc = new Tip(Number(bill.value), Number(numPersonInput.value), custom.value);
        ui.showResult(tipCalc.calcTip(), tipCalc.calcTotal())
    }
})

custom.addEventListener("focus", ()=>{
    const tips = document.querySelectorAll(".tip")
    for (value of tips){
        value.id = "";
    }
})

const events = [bill, custom, numPersonInput];

events.forEach((input)=>{
    input.addEventListener("keyup", (e)=>{
        if(numPersonInput.value === "0" || input.value === ""){
            document.querySelector(".error").style.display = "block";
            input.id = "input-error";
        }
        else if(input.value !== 0){
            const tipCalc = new Tip(Number(bill.value), Number(numPersonInput.value), custom.value);
            document.querySelector(".error").style.display = "none";
            input.id = "";
            ui.showResult(tipCalc.calcTip(), tipCalc.calcTotal())
            document.querySelector(".reset").style.opacity = "1";
        }
        e.preventDefault()
    })
})

reset.addEventListener("click", ()=>{
    ui.reset()
})
