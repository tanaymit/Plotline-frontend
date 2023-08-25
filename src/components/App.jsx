import React,{useState} from "react";
import Form from "./Form";
import Preview from "./Preview";


function App(){

    const [btnval,setBtnVal] = useState('');
    const buttonValue = (childdata) => {
        setBtnVal(childdata);
    }

    //get tooltip text
    const [text,getText] = useState('text goes here');
    const tooltipTextValue = (textvalue) => {
        getText(textvalue);
    }

    return(
        <div>
            {/* <h1>{btnval}</h1> */}
            <Form buttonValue = {buttonValue} tooltipText = {tooltipTextValue}/>
            <Preview 
                btn = {btnval}
                tooltipText = {text}
                
            />
            
        </div>
    )
}

export default App;