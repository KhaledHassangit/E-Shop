import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductWishList } from '../../../Redux/Actions/WishlistActions'


const ProductContainerHook = () => {

    const dispatch = useDispatch()

    const  [loadingWish, setloadingWish] = useState(true)

    const  [favproduct, setfavproduct] = useState([])

    useEffect(() => {
        const get = async()=>{
            setloadingWish(true)
            await dispatch(getProductWishList())
            setloadingWish(false)
        }
        get();
    }, [])

    const userwishlist = useSelector(state => state.WishListReducer.userwishlist)
    useEffect(() => {
        if (!loadingWish) {
            if (userwishlist && Array.isArray(userwishlist.data) && userwishlist.data.length >= 1) {
                console.log(userwishlist.data);
                setfavproduct(userwishlist.data.map(item => item._id));
            } else {
                setfavproduct([]);
            }
        }
    }, [loadingWish, userwishlist]);
    
    
    return [favproduct]
}

export default ProductContainerHook
