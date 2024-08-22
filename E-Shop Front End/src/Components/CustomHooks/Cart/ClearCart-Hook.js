import  { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notify from "../../../Hooks/UseNotification.js"
import { ClearCart, DeleteOneItem, UpdateCartItem } from '../../../Redux/Actions/CartActions.js'

const ClearCartHook = (cartitem) => {
    const dispatch = useDispatch()
    const  [loading, setLoading] = useState(true)

    const ClearCarthandel =  async()=>{
        setLoading(true)
        await dispatch(ClearCart())
        setLoading(false)
        setTimeout(() => {
            window.location.reload(false)
        }, 1000);

    }

    const ClearCartres = useSelector(state => state.CartReducer.clearcart)
        console.log(ClearCartres)
    useEffect(() => {
        if(loading === false)
        {
            if(ClearCartres  === "" && ClearCartres.status === 204 ){
                notify("Cart Deleted !","success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
            else{
                notify("You are not logged in. Please login to get access","warn")

            }
        }
    }, [loading])

// Delete One Item
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const  [loadingitem, setloadingitem] = useState(true)

    const handleShow = () => setShow(true);

    const handelDeleteItem = async ()=>{
        setloadingitem(true)
        await dispatch(DeleteOneItem(cartitem._id))
        setloadingitem(false)
        setShow(false)
        window.location.reload(false)
    }

    // Update Item Count 
    const  [itemCount, setitemCount] = useState(0)
    const onChangeCount = (e)=>{
        setitemCount(e.target.value)
    }
    useEffect(() => {
        if(cartitem){
            setitemCount(cartitem.count)
        }
    }, [])



    const handelUpdateCart = async()=>{
        await dispatch(UpdateCartItem(cartitem._id,{
            count:itemCount,
        }))
        window.location.reload(false)
    }

    return [ClearCarthandel,show,handleClose,handleShow
            ,handelDeleteItem,onChangeCount,
            itemCount,handelUpdateCart]
}

export default ClearCartHook
