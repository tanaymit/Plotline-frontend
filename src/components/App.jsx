import React,{useState} from "react";
import Form from "./Form";
import Preview from "./Preview";


function App(){

    //get button value
    const [btnval,setBtnVal] = useState('');
    const buttonValue = (childdata) => {
        setBtnVal(childdata);
    }
    //get tooltip text
    const [text,getText] = useState('text goes here');
    const tooltipTextValue = (textvalue) => {
        getText(textvalue);
    }
    //get text size
    const [size,getSize] = useState(3);
    const textSize = (sizevalue) => {
        getSize(sizevalue);
    }
    //get padding
    const [padding,getPadding] = useState(3);
    const paddingSize = (sizevalue) => {
        getPadding(sizevalue);
    }
    return(
        <div>
            <Form buttonValue = {buttonValue} tooltipText = {tooltipTextValue} textsize={textSize} paddingsize={paddingSize}/>
            <Preview 
                btn = {btnval}
                tooltipText = {text}
                textsize={parseInt(size,10)*5}
                padsize={parseInt(padding,10)*3}
                
            />
            
        </div>
    )
}

export default App;