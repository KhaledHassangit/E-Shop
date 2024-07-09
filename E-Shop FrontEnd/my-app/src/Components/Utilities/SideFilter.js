import React from 'react'
import { Row } from 'react-bootstrap'
import { SideFilterHook } from '../CustomHooks/Search/SideFilter-Hook'

const SideFilter = () => {
    const [category,Brand,ChoosenCategory,ChoosenBrand,priceFrom,priceTo] = SideFilterHook()
    
    let localFrom = localStorage.getItem("priceFrom")
    let localTo = localStorage.getItem("priceTo")
    
return (
    <div className="mt-3">
        <Row>
        <div className="d-flex flex-column mt-2">
            <div className="filter-title">الفئة</div>
            <div className="d-flex mt-3">
                <input  type="checkbox" value="0" />
                <div className="filter-sub me-2 ">الكل</div>
            </div>

            {
                category ? category.map((cat,index)=>{
                    return (
                        <div className="d-flex mt-3">
                        <input onChange={ChoosenCategory}  type="checkbox" value={cat._id} />
                        <div className="filter-sub me-2 " key={index}>{cat.name}</div>
                        </div>
                    )
                }) :<h6>لا يوجد تصنيفات</h6>
            }

            
        <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">الماركة</div>
            <div className="d-flex mt-3">
                <input  type="checkbox" value="0" />
                <div className="filter-sub me-2 ">الكل</div>
            </div>

            {
                Brand ? Brand.map((brand,index)=>{
                    return (
                        <div className="d-flex mt-3">
                        <input onChange={ChoosenBrand} type="checkbox" value={brand._id} />
                        <div className="filter-sub me-2 " key={index}>{brand.name}</div>
                        </div>
                    )
                }) :<h6>لا يوجد ماركات</h6>
            }

        </div>

        <div   className="filter-title my-3">السعر</div>
        <div className="d-flex">
        <p className="filter-sub my-2">من:</p>
        <input value={localFrom} onChange={priceFrom} className="m-2 text-center" type="number" style={{ width: "75px", height: "35px" }}/>
        </div>

        <div className="d-flex">
        <p  className="filter-sub my-2">الي:</p>
        <input value={localTo} onChange={priceTo} className="m-2 text-center"type="number"style={{ width: "75px", height: "35px" }}/>
        </div>
    </div>
        
        </Row >
    </div >
)
}

export default SideFilter