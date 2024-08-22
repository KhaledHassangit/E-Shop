import {useEffect} from 'react'
import {useSelector ,useDispatch} from "react-redux"
import getAllCategory, { getAllCategoryPage } from '../../../Redux/Actions/CategoryActions'

export const AllCategoryPageHook = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        const get = async()=>{
            await dispatch(getAllCategory(10))
        }
        get()
    },[])

    const category = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)

    let pageCount = 0 ;
    try{
    if (category.paginationResult)
    pageCount = category.paginationResult.numberOfPages
}catch(e){}
    const getPageNumber = (pageN)=>{
        dispatch(getAllCategoryPage(pageN))
    }

    return[category,loading,pageCount,getPageNumber]
}
