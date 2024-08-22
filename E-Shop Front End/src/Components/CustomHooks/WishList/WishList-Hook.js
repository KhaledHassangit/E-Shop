import { useEffect, useState } from 'react';
import favoff from "../../../images/favoff.png"
import favon from "../../../images/fav-on.png"
import { useDispatch , useSelector } from 'react-redux';
import { AddToWishList, RemoveToWishList } from '../../../Redux/Actions/WishlistActions';
import notify  from "../../../Hooks/UseNotification"

const WishListHook = (item,favproduct) => {
    const dispatch = useDispatch()

    let Fav= favproduct.some(fitem => fitem === item._id)

    const [faveicon, setfaveicon] = useState(favoff)
    const [isfav, setisfav] = useState(Fav)
    const [LoadingAdd, setLoadingAdd] = useState(true)
    const [LoadingRemove , setLoadingRemove ] = useState(true)

    useEffect(() => {
        setisfav(favproduct.some(fitem => fitem === item._id))
    }, [favproduct])
    
    const handlfav= ()=>{
        if(isfav) {
            RemoveFromWithList()
        }else{
            AddToWithList()
        }
        // setisfav(!isfav)
    }
    useEffect(() => {

        if(isfav){
            setfaveicon(favon)
        }
        else{
            setfaveicon(favoff)
        }
        

    },[isfav])


    const responseAdd = useSelector(state => state.WishListReducer.wishlist)

    const AddToWithList =  async ()=>{
        setisfav(true)
        setfaveicon(favon)
        setLoadingAdd(true)
        await dispatch(AddToWishList({
            productId:item._id,
        }))
        setLoadingAdd(false)
        
    }   
    useEffect(() => {
        if(LoadingAdd === false){
            if(responseAdd && responseAdd.status === 200)
        {
            notify("Added Successfully","success")
        }
        else if(responseAdd && responseAdd.status === 401)
        {
            notify("Please Login With Your Account","warn")
        }
        }
    }, [LoadingAdd])

    const responseRemove = useSelector(state => state.WishListReducer.removewishlist)
    
    const RemoveFromWithList =  async ()=>{
        setisfav(false)
        setfaveicon(favoff)
        setLoadingRemove(true)
        await dispatch(RemoveToWishList(item._id))
        setLoadingRemove(false)

    }   

    useEffect(() => {
        if(LoadingRemove === false){
            if(responseRemove && responseRemove.status === "success")
            {
                notify("Removed Successfully","success")
            }
        }
    }, [LoadingRemove])


    return [faveicon,handlfav,AddToWithList,RemoveFromWithList]
}

export default WishListHook
