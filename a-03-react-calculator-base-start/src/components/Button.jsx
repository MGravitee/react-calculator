import calculatorButtons from "../globals/calculator-button-data"

function Button( {buttonData, clickHandlerProp} ) {


    function handleClick (event) {

        
           const buttonValue = buttonData.value;
           const buttonType = buttonData.type;
            const clickedButtonData = {buttonValue, buttonType};

        clickHandlerProp(clickedButtonData) ;

    }



    return (
        
        <button 
        onClick={handleClick}
        className={`${buttonData.className} button`}
        value = {buttonData.value} 
        type = {buttonData.type}>
        
            {buttonData.text}</button>


            

    )
}

export default Button;