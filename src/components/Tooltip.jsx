import React, {useState} from "react";


function Tooltip({text,children,styleclass,styleByUser,arrowWidth,imgurl,arrcolor}){

    const after = {
        content: '',
        border: `${arrowWidth}px solid transparent`,
        position: 'absolute',
        borderBottomColor: `${arrcolor}`,
        borderTop: '0',
        top: `-${(arrowWidth/5)*3}px`,
        left: '50%',
        marginLeft: '-15px'
      }

    const imgstyle = {
        width: `${arrowWidth * 2}`,
        height: 'auto'
    }
    const [isVisible,setIsVisible] = useState(false);

    return(
        <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}>
        {children}
        {isVisible && <div class={styleclass} style={styleByUser} >{text}<div style={after}></div></div>}
        
    
    </div>
    );
}

export default Tooltip;