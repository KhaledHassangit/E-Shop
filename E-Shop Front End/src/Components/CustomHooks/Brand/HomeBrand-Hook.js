import React from 'react'
import {useEffect} from 'react'
import {useSelector ,useDispatch} from "react-redux"
import getAllBrand from '../../../Redux/Actions/BrandActions';



const HomeBrandHook = () => {

const dispatch = useDispatch();
const Brands = useSelector (state=> state.allBrand.Brand)
const loading = useSelector (state=> state.allBrand.loading)

useEffect(() => {
    dispatch(getAllBrand())
}, [])

    return[Brands,loading]
}

export default HomeBrandHook
