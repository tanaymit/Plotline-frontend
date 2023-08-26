import React,{useState} from "react";
import Form from "./Form";
import Preview from "./Preview";


function App(){

    //get button value
    const [btnval,setBtnVal] = useState('b1');
    const buttonValue = (childdata) => {
        setBtnVal(childdata);
    }
    //get tooltip text
    const [text,getText] = useState('enter text 1');
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
    //get text color
    const [clr,getColor] = useState('white');
    const textColor = (colorvalue) => {
        getColor(colorvalue);
    }
    //get background color
    const [bgclr,getBgColor] = useState('black');
    const bgColor = (bgcolorvalue) => {
        getBgColor(bgcolorvalue);
    }
    //get radius
    const [radius,getRadius] = useState(3);
    const bdRadius = (bdradiusvalue) => {
        getRadius(bdradiusvalue);
    }
    //get radius
    const [maxwidth,getMaxWidth] = useState(5);
    const  maxWidth = (bdradiusvalue) => {
        getMaxWidth(bdradiusvalue);
    }
    //get arrow width
    const [arrowwidth,getArrowWidth] = useState(5);
    const  arrowWidth = (arwvalue) => {
        getArrowWidth(arwvalue);
    }
    //get arrow height
    const [arrowheight,getArrowHeight] = useState(0);
    const  arrowHeight = (arhvalue) => {
        getArrowHeight(arhvalue);
    }
    //get img URL
    const [imgurl,getImgURL] = useState('');
    const imgURL = (urlvalue) => {
        getImgURL(urlvalue);
    }
    return(
        <div>
            <Form buttonValue = {buttonValue} 
                tooltipText = {tooltipTextValue} 
                textsize={textSize} 
                paddingsize={paddingSize} 
                textcolor={textColor}
                bgcolor={bgColor}
                bdradius={bdRadius}
                maxwidth={maxWidth}
                arrowwidth={arrowWidth}
                arrowheight={arrowHeight}
                imgurl={imgURL}
            />


            <Preview 
                btn = {btnval}
                tooltipText = {text}
                textsize={parseInt(size,10)*5}
                padsize={parseInt(padding,10)*3}
                textcolor={clr}
                bgcolor={bgclr}
                radius={parseInt(radius,10)*3}
                maxwidth={parseInt(maxwidth,10)*30}
                arrowwidth={parseInt(arrowwidth,10)*2}
                arrowheight={parseInt(arrowheight,10)}
                imgurl={imgurl}
            />
            
        </div>
    )
}

export default App;