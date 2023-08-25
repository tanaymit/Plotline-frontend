import React from "react";
import Tooltip from "./Tooltip";
import { Button } from "antd";



function Preview(props) {



    const tooltipStyle1 = { color: 'white', background: 'black', fontSize: `${props.btn === 'b1' ? props.textsize : 15}px`, top: '125px', right: '400px', padding: `${props.btn === 'b1' ? props.padsize : 9}px`, borderRadius: '9px', maxWidth: '150px' };
    const tooltipStyle2 = { color: 'white', background: 'black', fontSize: `${props.btn === 'b2' ? props.textsize : 15}px`, top: '125px', right: '200px', padding: `${props.btn === 'b2' ? props.padsize : 9}px`, borderRadius: '9px', maxWidth: '150px' };
    const tooltipStyle3 = { color: 'white', background: 'black', fontSize: `${props.btn === 'b3' ? props.textsize : 15}px`, top: '395px', right: '300px', padding: `${props.btn === 'b3' ? props.padsize : 9}px`, borderRadius: '9px', maxWidth: '150px' };
    const tooltipStyle4 = { color: 'white', background: 'black', fontSize: `${props.btn === 'b4' ? props.textsize : 15}px`, top: '600px', right: '400px', padding: `${props.btn === 'b4' ? props.padsize : 9}px`, borderRadius: '9px', maxWidth: '150px' };
    const tooltipStyle5 = { color: 'white', background: 'black', fontSize: `${props.btn === 'b5' ? props.textsize : 15}px`, top: '600px', right: '200px', padding: `${props.btn === 'b5' ? props.padsize : 9}px`, borderRadius: '9px', maxWidth: '150px' };

    const textarr = ["text 1", "text 2", "text 3", "text 4", "text 5"];
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
    return (
        <div class="preview">

            <img src="./smartphone.webp" alt="" srcset="" />
            <div class="tooltip-pos">

                <Tooltip text={textarr[0]} styleclass={"speech top"} styleByUser={tooltipStyle1}>
                    <Button style={{ position: 'absolute', top: '80px', right: '410px' }}>Button 1</Button>
                </Tooltip>

                <Tooltip text={textarr[1]} styleclass={"speech top"} styleByUser={tooltipStyle2}>
                    <Button style={{ position: 'absolute', top: '80px', right: '215px' }}>Button 2</Button>
                </Tooltip>

                <Tooltip text={textarr[2]} styleclass={"speech top"} styleByUser={tooltipStyle3}>
                    <Button style={{ position: 'absolute', top: '350px', right: '320px' }}>Button 3</Button>
                </Tooltip>

                <Tooltip text={textarr[3]} styleclass={"speech bottom"} styleByUser={tooltipStyle4}>
                    <Button style={{ position: 'absolute', top: '655px', right: '410px' }}>Button 4</Button>
                </Tooltip>

                <Tooltip text={textarr[4]} styleclass={"speech bottom"} styleByUser={tooltipStyle5}>
                    <Button style={{ position: 'absolute', top: '655px', right: '215px' }}>Button 5</Button>
                </Tooltip>

            </div>
        </div>
    );
}

export default Preview;