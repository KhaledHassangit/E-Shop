import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {   getAllProductsSearch } from '../../../Redux/Actions/ProductActions'


const AllProductsHook = () => {
    
    const dispatch = useDispatch()

    const getProduct= async()=>{
        getStorage()
        SortingData()
// Construct the price range query strings
        await dispatch(getAllProductsSearch(`sort=${sort}&limit=${8}&keyword=
        ${word}&${CategoryQueryString}&${BrandQueryString}
        ${pricefromString}${priceToString}`))
    }
        useEffect(() => {
            getProduct()
        }, [])
    
        const allproducts = useSelector(state => state.allproducts.allproducts)
        const loading = useSelector(state => state.allproducts.loading)
        
        let allitems = []
        let PagenationCount = []
        let results = 0
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

        if(allproducts)
        results= allproducts.results
        else
        results= 0
    
        }
        
        catch(e){}

    const onPress = async (pageN) =>{
            getStorage()
            SortingData()
            await dispatch(getAllProductsSearch(`sort=${sort}limit=${8}
            &page=${pageN}&keyword=${word}&${CategoryQueryString}&${BrandQueryString}
            ?${pricefromString}${priceToString}`))
        }

    let word = ""
    let CategoryQueryString =""
    let BrandQueryString   = ""
    let priceFrom = "";
    let priceTo = "";
    let pricefromString = "", priceToString = ""
    
    const getStorage =()=>{
        if(localStorage.getItem("searchWord") != null)
            word = localStorage.getItem("searchWord")

            if(localStorage.getItem("ChoosenCategory") != null)
            CategoryQueryString = localStorage.getItem("ChoosenCategory")
        
            if(localStorage.getItem("ChoosenBrand") != null)
            BrandQueryString = localStorage.getItem("ChoosenBrand")

            if(localStorage.getItem("pricefrom") != null)
            priceFrom = localStorage.getItem("pricefrom")

            if(localStorage.getItem("priceto") != null)
            priceTo = localStorage.getItem("priceto")

            if (priceFrom === "" || priceFrom <= 0) {
                pricefromString = ""
            } else {
                pricefromString = `&price[gte]=${priceFrom}`
            }
    
            if (priceTo === "" || priceTo <= 0) {
                priceToString = ""
            } else {
                priceToString = `&price[lte]=${priceTo}`
            }    
        }


    let sortType= "", sort;
    const SortingData =()=>{
        if(localStorage.getItem("sortType") !== null)
        {
            sortType = localStorage.getItem("sortType")
        }
        else{
            sortType=""
        }
        if(sortType === "السعر من الأقل للأعلي")
            sort= "+price"
            else if (sortType === "السعر من الأعلي للأقل")
            sort= "-price"
            else if (sortType === "")
            sort= ""
            else if (sortType === "الأكثر مبيعا")
            sort= "-sold"
            else if (sortType === "الأكثر تقيما")
            sort= "-ratingsQuantity"
    }
    

    
        return[allitems,loading,PagenationCount,onPress,getProduct,results]
}
    


export default AllProductsHook
