import React, {useState} from "react";


function Tooltip({text,children,styleclass}){

    const [isVisible,setIsVisible] = useState(false);

    return(
        <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}>
        {children}
        {isVisible && <div class={styleclass}>{text}</div>}
        
    
    </div>
    );
}

export default Tooltip;