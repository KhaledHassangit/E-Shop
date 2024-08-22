import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByBrand } from '../../../Redux/Actions/ProductActions';

const ProductsByBrandHook = (brandID) => {

    const dispatch = useDispatch()

    const getProduct= async()=>{
// Construct the price range query strings
        await dispatch(getProductsByBrand(9,"",brandID))
    }
        useEffect(() => {
            getProduct()
        }, [])
    
        const allproducts = useSelector(state => state.allproducts.productsbybrand)
        const loading = useSelector(state => state.allproducts.loading)
        
        let allitems = []
        let PagenationCount = []
        try{
            
            if(allproducts.data && allproducts)
                allitems= allproducts.data
            else
            allitems= []
    
        // Return Pagenation
        if(allproducts.paginationResult)
        PagenationCount= allproducts.paginationResult.numberOfPages
        else{
        PagenationCount= []
    
        }
    } catch(e){}
    const onPress = async (pageN) =>{
    
        await dispatch((getProductsByBrand(9,pageN,brandID))
    )
    }


    return[allitems,PagenationCount,onPress,loading]
}

export default ProductsByBrandHook
