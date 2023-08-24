import React from "react";
import Tooltip from "./Tooltip";
import {Button} from "antd";

function Preview(props){
    return(
        <div class="preview">
            <h1>{props.btn}</h1>
            <img src="./smartphone.webp" alt="" srcset="" />
            <div class="tooltip-pos">
            <Tooltip text = {"testing stuff out"} styleclass={"speech top"}>
                <Button  style={{position: 'absolute', top: '80px',right: '410px'}}>Button 1</Button>
                {/* <button class="btn1">Test</button> */}
            </Tooltip>
            </div>
        </div>
    ); 
}

export default Preview;