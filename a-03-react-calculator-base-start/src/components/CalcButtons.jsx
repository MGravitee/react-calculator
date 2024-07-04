import calculatorButtons from "../globals/calculator-button-data"

import Button from "./Button"


function CalcButtons({clickHandlerProp}) {
    console.log(calculatorButtons)
    return (
        <div className="button-container">
            {calculatorButtons.map( singleButton => {
                return (
                    <Button 
                    key= {singleButton.value}
                    clickHandlerProp ={clickHandlerProp}
                        buttonData={singleButton}/>
                    

                )
            })}
        </div>
    )
}

export default CalcButtons;