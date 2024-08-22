import {useEffect} from 'react'
import {useSelector ,useDispatch} from "react-redux"
import getAllBrand, { getAllBrandPage } from '../../../Redux/Actions/BrandActions';

const AllBrandsHook = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllBrand(5))
    }, [])
    
    const Brands = useSelector (state=> state.allBrand.Brand)
    const loading = useSelector (state=> state.allBrand.loading)


    let pageCount = 0 ;
    if (Brands.paginationResult)
    pageCount = Brands.paginationResult.numberOfPages
    
    const getPageNumber = (pageN) => {
        dispatch(getAllBrandPage(pageN))
    }
    return[Brands,loading,pageCount,getPageNumber]
    
}

export default AllBrandsHook
