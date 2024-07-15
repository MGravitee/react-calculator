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

    const [memory, setMemory] = useState(null);

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

            case "memory":
                isMemory(clickedButtonData.buttonValue);
                break;
        }
    }

    // functions for switch statements to check

    function isNumber(grabbedButtonValue) {
        // so if the operand is something and number a is something we work with number b
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
        //have to work backwards, as we need to check NumberB first, and work backwards

        //checking if numberB is a value, if it is, clear it, and go back a step, displaying your operand
        if (numberB !== null) {
            setNumberB(null);
            setDisplay(operand);
            return;
            //checking if operand is a value, if it is, clear it, and go back a step, displaying numberA
        }
        if (operand !== null) {
            setOperand(null);
            setDisplay(numberA);
            return;

            //checking if operand is a value, if it is, clear it, and go back a step, displaying nothing
        }
        if (numberA !== null) {
            setNumberA(null);
            setDisplay(null);
            return;
        }
        if ((grabbedButtonValue = "All Clear")) {
            setNumberA(null);
            setNumberB(null);
            setOperand(null);
            setDisplay(null);
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
            //if divided value is float/HAS a decimal then use the toFixed from the bottom -modulus or string checking if there's a .
            const dividedValue = numberA / numberB;
            setNumberA(dividedValue);
            setOperand(null);
            setNumberB(null);
            setDisplay(dividedValue.toFixed(3));
        }
    }

    function isMemory(grabbedButtonValue) {
        if (grabbedButtonValue === "Memory Save") {
            const displayedValue = display;
            setMemory(displayedValue);
            console.log(displayedValue);
        }

        if (grabbedButtonValue === "Memory Recall") {
            const recalledValue = memory;
            if (operand === null) {
                setNumberA(recalledValue);
            } else {setNumberB(recalledValue)};
            setDisplay(recalledValue);
        }

        if (grabbedButtonValue === "Memory Addition") {
            const plusedMemValue = parseInt(display);
            const savedMemValue = parseInt(memory);
            const finalPlusValue = plusedMemValue + savedMemValue;
            setMemory(finalPlusValue);

        }
        if (grabbedButtonValue === "Memory Subtract") {
            const subtractedMemValue = display;
            const savedMemValue = memory;
            const finalSubValue = savedMemValue - subtractedMemValue;
            setMemory(finalSubValue);
            console.log(finalSubValue);
        }

        if (grabbedButtonValue === "Memory Clear") {
            if (memory !== null) {
                setMemory(null);
            }
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
