let currNum = "0";
let savedNum = null;
let currOperation = null;
let isEqPressed = false;

const handleNumPress = (num) => {
    if (isEqPressed) {
        isEqPressed = false;
        currNum = "0";
        savedNum = null;
        currOperation = null;
    }

    let dotPos = currNum.indexOf(".");

    if (num !== ".") {
        if (currNum !== "0") {
            currNum += num;
        } else {
            currNum = num.toString();
        }

        if (currNum.length > 8) {
            currNum = currNum.substring(1);
        }

        dotPos = currNum.indexOf(".");
        if (dotPos === 0) {
            currNum = currNum.substring(1);
        }

        let currNumLen = currNum.length;
        for (let i = 0; i < currNumLen - 1; i++) {
            if (currNum[0] === "0" && currNum[1] !== ".") {
                currNum = currNum.substring(1);
            } else {
                break;
            }
        }
    } else if (dotPos === -1) {
            currNum += num;
    }

    displ.innerText = currNum;
}

const handleActionButton = (operation) => {
    if (isEqPressed) {
        isEqPressed = false;
    } else {
        savedNum = currNum;
    }
    currNum = "0";


    switch (operation) {
        case DIV_OP:
            currOperation = DIV_OP;
            break;
        case MLT_OP:
            currOperation = MLT_OP;
            break;
        case MIN_OP:
            currOperation = MIN_OP;
            break;
        case PLS_OP:
            currOperation = PLS_OP;
            break;
    }
}

const handleClear = () => {
    currNum = "0";
    savedNum = null;
    displ.innerText = currNum;
}

const handleEquals = () => {
    if (savedNum === null) return;

    switch (currOperation) {
        case DIV_OP:
            savedNum = parseFloat(savedNum) / parseFloat(currNum);
            break;
        case MLT_OP:
            savedNum = parseFloat(savedNum) * parseFloat(currNum);
            break;
        case MIN_OP:
            savedNum = parseFloat(savedNum) - parseFloat(currNum);
            break;
        case PLS_OP:
            savedNum = parseFloat(savedNum) + parseFloat(currNum);
            break;
    }

    isEqPressed = true;

    savedNum = savedNum.toString();
    savedNum = savedNum.substring(savedNum.length - 8, savedNum.length);

    displ.innerText = savedNum;
}
