import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getOneProducts, getSmiliarProducts } from '../../../Redux/Actions/ProductActions'
import mobile from "../../../images/mobile1.png"
import { getOneCategory } from '../../../Redux/Actions/CategoryActions'
import { getOneBrand } from '../../../Redux/Actions/BrandActions'

const ProductDetailsHook = (prodID) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOneProducts(prodID))
    }, [])
    const oneProduct = useSelector(state => state.allproducts.oneproduct)
    const oneCategory = useSelector(state => state.allCategory.oneCategory)
    const OneBrand = useSelector(state => state.allBrand.OneBrand)
    const SmilarProducts = useSelector(state => state.allproducts.smilarProduct)
    // console.log(SmilarProducts.data)

    // Products Item
    let item = [];
    try{
    if (oneProduct.data) {
        item = oneProduct.data;
    } else {
        item = [];
    }
}
    catch(e){}


    useEffect(() => {

        if (item.category)
        dispatch(getOneCategory(item.category))

        if (item.brand)
        dispatch(getOneBrand(item.brand))
    }, [item])

    useEffect(() => {
        if (item.category)
        dispatch(getSmiliarProducts(item.category))
    }, [])

    // Categories Item
    let cat = []

    try{
    if(oneCategory.data)
        cat= oneCategory.data
    else
        cat= []
    }catch(e){}

    let brand = []
    try{
        if(OneBrand.data)
        brand= OneBrand.data
        else
        brand= []
    }
    catch(e){}


    // Galley Images
    let images = []
    try{
        if (item.images)
        images= item.images.map((img)=>{return { original:img }})
        else
            images = [ {original: `${mobile}`}]

    }catch(e){}

    let prod = []
    try {
        if(SmilarProducts)
        prod= SmilarProducts.data
        else 
        prod = [] 

    }catch(e){}
    
    return[item,images,cat,brand,prod]
}

export default ProductDetailsHook
