import React, { useEffect, useState } from 'react'
import {Row } from 'react-bootstrap'
import ProductsContainer from '../Products/ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getProductWishList } from '../../Redux/Actions/WishlistActions'
export const UserFavouriteProducts = () => {

    const dispatch = useDispatch()
    const [Loading, setLoading] = useState(true)
    const [items, setitems] = useState([])

    useEffect(() => {
        const get = async ()=>{
            await   dispatch(getProductWishList())

        }
        get()
    }, [])

    const res = useSelector(state => state.WishListReducer.userwishlist)

    useEffect(() => {
        if(Loading === false){
            if(res)
                setitems(res.data)
        }
    }, [Loading])
    return (
        <div>
            <div className='admin-content-text pb-4'>قائمة المفضلة</div>
            <Row className="justify-content-start">
                <ProductsContainer  products={items} />
            </Row>
            {/* <Pagenation/> */}
        </div>
    )
}
