



function RecordChoice() {


    const screen = document.querySelector(".content")
    const result = document.querySelector(".result")
    let num1 = '', num2 = '', Num2exist = false, prev = '';
    let OperationStatus = 0;
    let validNum1 = false;
    let choice;
    const pressed = document.querySelector(".ui");

    pressed.addEventListener("mousedown", (e) => {
        e.target.classList.add("clicked");
    })
    pressed.addEventListener("mouseup", (e) => {
        e.target.classList.remove("clicked");
    })
    console.log(pressed);


    pressed.addEventListener("click", (e) => {
        choice = e.target.getAttribute("class");
        functions();

    })

}





function functions(choice = '', screen, result, num1, num2, Num2exist, prev, OperationStatus, validNum1) {

console.log(num1)
num1=2;
console.log(num1);

    if (choice.includes("number")) {
        screen.textContent += choice.split(" ")[0];
        if (OperationStatus == 0) {
            num1 += choice.split(" ")[0];
            validNum1 = true;
        }
        else if (OperationStatus == 1) {
            num2 += choice.split(" ")[0];
            Num2exist = true;

        }
    }
    else if (choice.includes("operator")) {


        if (validNum1) {
            OperationStatus = 1;
            prev = choice.split(" ")[0]
            screen.textContent = num1 + prev;
        }


        if (Num2exist) {
            result.textContent = operation((prev), +num1, +num2);
            screen.textContent = result.textContent
            num1 = result.textContent
            num2 = '';
            Num2exist = false;
            screen.style.fontSize = "15px";


            prev = choice.split(" ")[0]
        }
        else if ((choice.split(" ")[0] == '+' || choice.split(" ")[0] == '-') && !(validNum1)) {
            screen.textContent = choice.split(" ")[0];
            num1 = screen.textContent;
        }

    }
    else if (choice == "C") {
        reset();
        OperationStatus = 0;
        num1 = '';
        num2 = '';

    }

    else if (choice == "equal") {
        equal(screen, result, prev, num1, num2);
    }


}


function reset() {
    const screen = document.querySelector(".content")
    const result = document.querySelector(".result")
    result.textContent = "";
    screen.textContent = '';
    screen.style.fontSize = "30px"


}

function equal(screen, result, prev, num1, num2) {
    screen.textContent = '';
    result.textContent = operation((prev), +num1, +num2);
    num1 = result.textContent
    num2 = '';
}
function operation(operator, a, b) {
    let object = {
        '+': a + b,
        "-": a - b,
        "/": a / b,
        "X": a * b,
    }

    return object[operator];
}


// STARTING THE CALCULATOR
RecordChoice();

