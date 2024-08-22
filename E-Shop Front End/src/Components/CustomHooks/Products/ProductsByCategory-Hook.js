import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import notify from "../../../Hooks/UseNotification"
import { getProductsByCategory } from '../../../Redux/Actions/ProductActions';

const ProductsByCategoryHook = (catID) => {

    const dispatch = useDispatch()

    const getProduct= async()=>{
// Construct the price range query strings
        await dispatch(getProductsByCategory(9,"",catID))
    }
        useEffect(() => {
            getProduct()
        }, [])
    
        const allproducts = useSelector(state => state.allproducts.productsbycat)
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
    
        await dispatch((getProductsByCategory(9,pageN,catID))
    )
    }


    return[allitems,PagenationCount,onPress,loading]
}

export default ProductsByCategoryHook
