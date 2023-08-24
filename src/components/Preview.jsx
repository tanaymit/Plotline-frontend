import React from "react";
import Tooltip from "./Tooltip";
import {Button} from "antd";

function Preview(){
    return(
        <div class="preview">
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