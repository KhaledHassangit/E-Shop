import React from 'react'
import next from "../../images/next.png"

const LeftButton = (onClick,onDisable) => {

    return (
        <img className="left" src={next} alt='' onClick={onClick} onDisable={onDisable}
        height="35px" style={{folat:"left",cursor:"pointer"}}/>
    )
}

export default LeftButton
