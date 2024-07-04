import CalcButtons from "./components/CalcButtons";
import Display from "./components/Display";

import { useState } from "react";

import "./App.css";

function App() {
    const [display, setDisplay] = useState(null);

    const [numberA, setNumberA] = useState(null);

    const [numberB, setNumberB] = useState(null);

    // const [result, setResult] = useState(null);

    const [operand, setOperand] = useState(null);

    function handleButtonClick(clickedButtonData) {
        console.log(clickedButtonData);

        switch (clickedButtonData.buttonType) {
            case "number":
                isNumber(clickedButtonData.buttonValue);
                break;

            case "clear":
                isClear(clickedButtonData.buttonValue);
                break;

            case "operator":
                isOperator(clickedButtonData.buttonValue);
                break;

            case "enter":
                isEnter(clickedButtonData.buttonValue);
                break;
        }
    }

    // functions for switch statements to check

    function isNumber(grabbedButtonValue) {
        // so if the operaand is something and number a is something we work with number b
        if (operand !== null && numberA !== null) {
            // if number B is something
            if (numberB) {
                const newValue =
                    numberB.toString() + grabbedButtonValue.toString();
                setNumberB(newValue);
                setDisplay(newValue);
            } else {
                setNumberB(grabbedButtonValue);
                setDisplay(grabbedButtonValue);
            }
        } else {
            if (numberA) {
                const newValue =
                    numberA.toString() + grabbedButtonValue.toString();
                setNumberA(newValue);
                setDisplay(newValue);
            } else {
                setNumberA(grabbedButtonValue);
                setDisplay(grabbedButtonValue);
            }
        }
    }
    function isClear(grabbedButtonValue) {
        if ((grabbedButtonValue = "All Clear")) {
            setNumberA(null);
            setNumberB(null);
            setOperand(null);
            setDisplay(null);
        } else {

        }
     
    }

    function isOperator(grabbedButtonValue) {
        setDisplay(grabbedButtonValue);
        setOperand(grabbedButtonValue);
    }

    function isEnter(grabbedButtonValue) {
        if (operand === "Add") {
            const addedValue = parseInt(numberA) + parseInt(numberB);
            setNumberA(addedValue);
            setOperand(null);
            setNumberB(null);
            setDisplay(addedValue);
        }
        if (operand === "Subtract") {
            const subtractedValue = numberA - numberB;
            setNumberA(subtractedValue);
            setOperand(null);
            setNumberB(null);
            setDisplay(subtractedValue);
        }

        if (operand === "Multiply") {
            const multipliedValue = numberA * numberB;
            setNumberA(multipliedValue);
            setOperand(null);
            setNumberB(null);
            setDisplay(multipliedValue);
        }
        if (operand === "Divide") {
            const dividedValue = numberA / numberB;
            setNumberA(dividedValue);
            setOperand(null);
            setNumberB(null);
            setDisplay(dividedValue);
        }
    }

    return (
        <div className="container">
            <div className="calculator">
                <Display display={display} />
                <CalcButtons clickHandlerProp={handleButtonClick} />
            </div>
        </div>
    );
}

export default App;
