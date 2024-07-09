import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductsPage } from '../../../Redux/Actions/ProductActions'

const AdminAllProductHook = () => {
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllProducts(9))
    }, [])

    const allproducts = useSelector(state => state.allproducts.allproducts)
    const loading = useSelector(state => state.allproducts.loading)

    let allitems = []
    let PagenationCount = []

    try{
    //  Return Data 
    if(allproducts)
        allitems= allproducts.data
    else
    allitems= []

    // Return Pagenation
    if(allproducts.paginationResult)
    PagenationCount= allproducts.paginationResult.numberOfPages
    else
    PagenationCount= []
}   catch (e){

}
    const onPress = async (pageN) =>{
    await dispatch(getAllProductsPage(9,pageN))
}
    return[allitems,loading,PagenationCount,onPress]
}

export default AdminAllProductHook
