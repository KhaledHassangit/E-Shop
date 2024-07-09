import React from 'react'
import prev from "../../images/prev.png"

const RightButton = (onClick,onDisable) => {

    return (
        <img className='right' src={prev} alt='' onClick={onClick} onDisable={onDisable}
        height="35px" />
    )
}

export default RightButton
