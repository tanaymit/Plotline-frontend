import React from "react";
import Tooltip from "./Tooltip";
import { Button } from "antd";



function Preview(props) {



    const tooltipStyle1 = { color: `${props.btn === 'b1' ? props.textcolor : 'white'}`, background: `${props.btn === 'b1' ? props.bgcolor : 'black'}`, fontSize: `${props.btn === 'b1' ? props.textsize : 15}px`, top: `${props.btn === 'b1' ? (props.arrowheight)*2 + 120 : 120}px`, right: '400px', padding: `${props.btn === 'b1' ? props.padsize : 9}px`, borderRadius: `${props.btn === 'b1' ? props.radius : 9}px`, maxWidth: `${props.btn === 'b1' ? props.maxwidth : 150}px` };
    const tooltipStyle2 = { color: `${props.btn === 'b2' ? props.textcolor : 'white'}`, background: `${props.btn === 'b2' ? props.bgcolor : 'black'}`, fontSize: `${props.btn === 'b2' ? props.textsize : 15}px`, top: `${props.btn === 'b2' ? (props.arrowheight)*2 + 120 : 120}px`, right: '200px', padding: `${props.btn === 'b2' ? props.padsize : 9}px`, borderRadius: `${props.btn === 'b2' ? props.radius : 9}px`, maxWidth: `${props.btn === 'b2' ? props.maxwidth : 150}px` };
    const tooltipStyle3 = { color: `${props.btn === 'b3' ? props.textcolor : 'white'}`, background: `${props.btn === 'b3' ? props.bgcolor : 'black'}`, fontSize: `${props.btn === 'b3' ? props.textsize : 15}px`, top: `${props.btn === 'b3' ? (props.arrowheight)*2 + 390 : 390}px`, right: '300px', padding: `${props.btn === 'b3' ? props.padsize : 9}px`, borderRadius: `${props.btn === 'b3' ? props.radius : 9}px`, maxWidth: `${props.btn === 'b3' ? props.maxwidth : 150}px` };
    const tooltipStyle4 = { color: `${props.btn === 'b4' ? props.textcolor : 'white'}`, background: `${props.btn === 'b4' ? props.bgcolor : 'black'}`, fontSize: `${props.btn === 'b4' ? props.textsize : 15}px`, top: `${props.btn === 'b4' ? (props.arrowheight)*2 + 695 : 695}px`, right: '400px', padding: `${props.btn === 'b4' ? props.padsize : 9}px`, borderRadius: `${props.btn === 'b4' ? props.radius : 9}px`, maxWidth: `${props.btn === 'b4' ? props.maxwidth : 150}px` };
    const tooltipStyle5 = { color: `${props.btn === 'b5' ? props.textcolor : 'white'}`, background: `${props.btn === 'b5' ? props.bgcolor : 'black'}`, fontSize: `${props.btn === 'b5' ? props.textsize : 15}px`, top: `${props.btn === 'b5' ? (props.arrowheight)*2 + 695 : 695}px`, right: '200px', padding: `${props.btn === 'b5' ? props.padsize : 9}px`, borderRadius: `${props.btn === 'b5' ? props.radius : 9}px`, maxWidth: `${props.btn === 'b5' ? props.maxwidth : 150}px` };

    const textarr = ["enter text 1", "enter text 2", "enter text 3", "enter text 4", "enter text 5"];
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

                <Tooltip text={textarr[0]} styleclass={"speech"} styleByUser={tooltipStyle1} arrcolor={props.btn === 'b1' ? props.bgcolor : 'black'} arrowWidth={props.btn === 'b1' ? props.arrowwidth : 10} imgurl={props.btn === 'b1' ? props.imgurl : ''}>
                    <Button style={{ position: 'absolute', top: '80px', right: '410px' }}>Button 1</Button>
                </Tooltip>

                <Tooltip text={textarr[1]} styleclass={"speech"} styleByUser={tooltipStyle2} arrcolor={props.btn === 'b2' ? props.bgcolor : 'black'} arrowWidth={props.btn === 'b2' ? props.arrowwidth : 10} imgurl={props.btn === 'b2' ? props.imgurl : ''}>
                    <Button style={{ position: 'absolute', top: '80px', right: '215px' }}>Button 2</Button>
                </Tooltip>

                <Tooltip text={textarr[2]} styleclass={"speech"} styleByUser={tooltipStyle3} arrcolor={props.btn === 'b3' ? props.bgcolor : 'black'} arrowWidth={props.btn === 'b3' ? props.arrowwidth : 10} imgurl={props.btn === 'b3' ? props.imgurl : ''}>
                    <Button style={{ position: 'absolute', top: '350px', right: '320px' }}>Button 3</Button>
                </Tooltip>

                <Tooltip text={textarr[3]} styleclass={"speech"} styleByUser={tooltipStyle4} arrcolor={props.btn === 'b4' ? props.bgcolor : 'black'} arrowWidth={props.btn === 'b4' ? props.arrowwidth : 10} imgurl={props.btn === 'b4' ? props.imgurl : ''}>
                    <Button style={{ position: 'absolute', top: '655px', right: '410px' }}>Button 4</Button>
                </Tooltip>

                <Tooltip text={textarr[4]} styleclass={"speech"} styleByUser={tooltipStyle5} arrcolor={props.btn === 'b5' ? props.bgcolor : 'black'} arrowWidth={props.btn === 'b5' ? props.arrowwidth : 10} imgurl={props.btn === 'b5' ? props.imgurl : ''}>
                    <Button style={{ position: 'absolute', top: '655px', right: '215px' }}>Button 5</Button>
                </Tooltip>

            </div>
        </div>
    );
}

export default Preview;