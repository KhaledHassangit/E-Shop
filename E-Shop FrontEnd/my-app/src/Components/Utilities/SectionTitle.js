import React from 'react'
import { Link } from 'react-router-dom';

const SectionTitle = ({title,btntitle,pathroute}) => {
    return (
        <div className='d-flex justify-content-between pt-4'>
        <div className='sub-title mb-2 mt-2'>{title}</div>
        {btntitle ? (
            <Link to={`${pathroute}`} style={{textDecoration:"none"}}>
            <div className='shopping-now'>{btntitle}</div>
            </Link>
        ): null}
        </div>
    )
}

export default SectionTitle;
