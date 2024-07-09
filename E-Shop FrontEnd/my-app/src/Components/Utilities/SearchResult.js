import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import sort from "../../images/sort.png"
    const SearchResult = ({title,onClick}) => {
        
        const handler =()=>{

        }
        const ClickMe =(key)=>{
            localStorage.setItem("sortType",key)
            onClick()
        }
    return (
        <div className='d-flex justify-content-between pt-3 px-2'>
            <div className='sub-title'>{title}</div>
                <div className='search-count-text d-flex'>
                <UnopDropdown
                onAppear={handler}
                onDisappearStart={handler}
                // Button Title Trigger To Open Drop Down Menu  
                trigger={<p className='mt-2'>
                    <img width="20px" height="20px" className='ms-1' src={sort} alt=""/>
                    ترتيب حسب
                </p>}
                delay={300}
                align="CENTER"
                hover>
                    {/* Drop Down Menu Content */}
                <div className='card-filter '>
                    <div onClick={()=> ClickMe("")} className='border-bottom card-filter-item'>بدون ترتيب</div>
                    <div onClick={()=> ClickMe("الأكثر مبيعا")} accordion-header className='border-bottom card-filter-item'>الأكثر مبيعا</div>
                    <div onClick={()=> ClickMe("الأكثر تقيما")} className='border-bottom card-filter-item'>الأكثر تقيما</div>
                    <div onClick={()=> ClickMe("السعر الأعلي للأقل")} className='border-bottom card-filter-item'> السعر من الأعلي للأقل</div>
                    <div onClick={()=> ClickMe("السعر من الأقل للأعلي")} accordion-button className='border-bottom card-filter-item'> السعر من الأقل للأعلي</div>
                </div>
            </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchResult
