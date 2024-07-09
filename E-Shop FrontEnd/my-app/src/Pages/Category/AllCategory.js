import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagenation from '../../Components/Utilities/Pagenation'
import { AllCategoryPageHook } from '../../Components/CustomHooks/Category/AllCategoryPage-Hook'

const AllCategory = () => {
    const [category,loading,pageCount,getPageNumber] = AllCategoryPageHook()


    return (
        <div>
        <CategoryContainer data={category.data} loading={loading}/>
            {/* {
                pageCount > 1 ?(<Pagenation pageCount={pageCount} onPress={getPageNumber}/>) 
                :null 
            } */}
                <Pagenation pageCount={pageCount} onPress={getPageNumber}/>

        </div>
    )
}

export default AllCategory
