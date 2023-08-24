import React,{useState} from "react";
import Form from "./Form";
import Preview from "./Preview";


function App(){

    const [btnval,setBtnVal] = useState('');
    const buttonValue = (childdata) => {
        setBtnVal(childdata);
    }
    return(
        <div>
            <h1>{btnval}</h1>
            <Form buttonValue = {buttonValue}/>
            <Preview 
                btn = {btnval}
            />
            
        </div>
    )
}

export default App;