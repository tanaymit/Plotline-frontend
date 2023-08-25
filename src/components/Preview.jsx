import React from "react";
import Tooltip from "./Tooltip";
import {Button} from "antd";

let tooltipStyle1 = { color: '#fff', background: 'black', fontSize: '16px', top: '125px', right: '400px', padding: '10px', borderRadius: '10px', maxWidth: '150px'};
let tooltipStyle2 = { color: '#fff', background: 'black', fontSize: '16px', top: '125px', right: '200px', padding: '10px', borderRadius: '10px', maxWidth: '150px'};
let tooltipStyle3 = { color: '#fff', background: 'black', fontSize: '16px', top: '395px', right: '300px', padding: '10px', borderRadius: '10px', maxWidth: '150px'};
let tooltipStyle4 = { color: '#fff', background: 'black', fontSize: '16px', top: '600px', right: '400px', padding: '10px', borderRadius: '10px', maxWidth: '150px'};
let tooltipStyle5 = { color: '#fff', background: 'black', fontSize: '16px', top: '600px', right: '200px', padding: '10px', borderRadius: '10px', maxWidth: '150px'};

const textarr = ["text 1","text 2","text 3","text 4","text 5"];

function Preview(props){

    switch (props.btn) {
        case 'b1':
            textarr[0] = props.tooltipText;
            break;
        case 'b2':
            textarr[1] = props.tooltipText;
            break;
        case 'b3':
            textarr[2] = props.tooltipText;
            break;
        case 'b4':
            textarr[3] = props.tooltipText;
            break;
        case 'b5':
            textarr[4] = props.tooltipText;
            break;
        
        default:
            break;
    }
    return(
        <div class="preview">
            {/* <h1>{props.btn}</h1>
            <h1>{props.tooltipText}</h1> */}
            <img src="./smartphone.webp" alt="" srcset="" />
            <div class="tooltip-pos">
                
            <Tooltip text = {textarr[0]} styleclass={"speech top"} styleByUser={tooltipStyle1}>
                <Button  style={{position: 'absolute', top: '80px',right: '410px'}}>Button 1</Button>
            </Tooltip>            
            
            <Tooltip text = {textarr[1]} styleclass={"speech top"} styleByUser={tooltipStyle2}>
                <Button  style={{position: 'absolute', top: '80px',right: '215px'}}>Button 2</Button>
            </Tooltip>            
            
            <Tooltip text = {textarr[2]} styleclass={"speech top"} styleByUser={tooltipStyle3}>
                <Button  style={{position: 'absolute', top: '350px',right: '320px'}}>Button 1</Button>
            </Tooltip>            
            
            <Tooltip text = {textarr[3]} styleclass={"speech bottom"} styleByUser={tooltipStyle4}>
                <Button  style={{position: 'absolute', top: '655px',right: '410px'}}>Button 4</Button>
            </Tooltip>
                        
            <Tooltip text = {textarr[4]} styleclass={"speech bottom"} styleByUser={tooltipStyle5}>
                <Button  style={{position: 'absolute', top: '655px',right: '215px'}}>Button 5</Button>
            </Tooltip>
            
            </div>
        </div>
    ); 
}

export default Preview;