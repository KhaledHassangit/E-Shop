import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../../Redux/Actions/ProductActions'

const HomeProductsHook = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const allproducts = useSelector(state => state.allproducts.allproducts)
    const loading = useSelector(state => state.allproducts.loading)
    
    let items = []
    try{
        if(allproducts.data)
            items= allproducts.data.slice(0,4)
        else
            items= []
    }
    catch(e){}
    
    return[items,loading]
}

export default HomeProductsHook
