import React, {useState} from "react";


function Tooltip({text,children,styleclass,styleByUser}){

    const [isVisible,setIsVisible] = useState(false);

    return(
        <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}>
        {children}
        {isVisible && <div class={styleclass} style={styleByUser} >{text}</div>}
        
    
    </div>
    );
}

export default Tooltip;