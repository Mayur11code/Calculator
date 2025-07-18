



function RecordChoice() {



    let num1 = '', num2 = '', Num2exist = false, prev = '';
    let OperationStatus = 0;
    let validNum1 = false;

    let state = { num1, num2, Num2exist, prev, OperationStatus, validNum1 };

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
        functions(choice, state);

    })

}





function functions(choice = '', state) {
    // TEST--->
    // console.log(state.num1)
    // state.num1=2;
    // console.log(state.num1);


    const screen = document.querySelector(".content")
    const result = document.querySelector(".result")
    if (choice.includes("number")) {
        screen.textContent += choice.split(" ")[0];
        if (state.OperationStatus == 0) {
            state.num1 += choice.split(" ")[0];
            state.validNum1 = true;
        }
        else if (state.OperationStatus == 1) {
            state.num2 += choice.split(" ")[0];
            state.Num2exist = true;

        }
    }
    else if (choice.includes("operator")) {

        
        if (state.Num2exist) {
            result.textContent = operation((state.prev), +state.num1, +state.num2);
            screen.textContent = result.textContent
            state.num1 = result.textContent
            state.num2 = '';
            state.Num2exist = false;
            screen.style.fontSize = "15px";
            state.prev = choice.split(" ")[0]
        }

        if (state.validNum1) {
            state.OperationStatus = 1;
            state.prev = choice.split(" ")[0]
            screen.textContent = state.num1 + state.prev;
            if (result.textContent) screen.style.fontSize = "15px";
        }



        else if ((choice.split(" ")[0] == '+' || choice.split(" ")[0] == '-') && !(state.validNum1)) {
            screen.textContent = choice.split(" ")[0];
            state.num1 = screen.textContent;
        }

    }
    else if (choice == "C") {
        reset();
        state.OperationStatus = 0;
        state.num1 = '';
        state.num2 = '';
        state.Num2exist = false;

    }

    else if (choice == "equal") {
        equal(screen, result, state);
    }


}


function reset() {
    const screen = document.querySelector(".content")
    const result = document.querySelector(".result")
    result.textContent = "";
    screen.textContent = '';
    screen.style.fontSize = "30px"


}

function equal(screen, result, state) {
    screen.textContent = '';
    result.textContent = operation((state.prev), +state.num1, +state.num2);
    state.num1 = result.textContent
    state.num2 = '';
    state.Num2exist = false;
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

