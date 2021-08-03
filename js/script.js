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
})

custom.addEventListener("focus", ()=>{
    const tips = document.querySelectorAll(".tip")
    for (value of tips){
        value.id = "";
    }
})

numPersonInput.addEventListener("keyup", (e)=>{
    if(numPersonInput.value === "0" || numPersonInput.value === ""){
        document.querySelector(".error").style.display = "block";
        numPersonInput.id = "input-error";
    }
    else if(numPersonInput.value !== 0){
        const tipCalc = new Tip(Number(bill.value), Number(numPersonInput.value), custom.value);
        document.querySelector(".error").style.display = "none";
        numPersonInput.id = "";
        ui.showResult(tipCalc.calcTip(), tipCalc.calcTotal())
        document.querySelector(".reset").style.opacity = "1";
    }
    e.preventDefault()
})

reset.addEventListener("click", ()=>{
    ui.reset()
})
