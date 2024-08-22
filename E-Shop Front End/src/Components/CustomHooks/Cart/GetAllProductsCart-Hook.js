import  { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProductsCart } from '../../../Redux/Actions/CartActions'

const GetAllProductsCartHook = () => {

    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)
    const [itemsNum,setitemsNum] = useState(0)
    const [cartItems, setcartItems] = useState(0)
    const [cartTotalPrice, setcartTotalPrice] = useState(0)
    const [cartTotalPriceAfterDis, setcartTotalPriceAfterDis] = useState(0)
    const  [couponNameRes, setcouponNameRes] = useState("")


    
    useEffect(() => {
        const get = async()=>{
            setLoading(true)
            await dispatch(GetAllProductsCart())
            setLoading(false)
        }
        get()
    }, [])

    const AllCartres = useSelector(state => state.CartReducer.getallproductscart)
    useEffect(() => {
        if(loading === false){
            if(AllCartres && AllCartres.status  === "success"){
                setitemsNum(AllCartres.numOfCartItems)
                setcartItems( AllCartres.data.products)
                setcartTotalPrice(AllCartres.data.totalCartPrice)
                if(AllCartres.data.coupon){
                    setcouponNameRes(AllCartres.data.coupon)
                }else{
                    setcouponNameRes("")
                }
                if(AllCartres.data.totalAfterDiscount){
                    setcartTotalPriceAfterDis(AllCartres.data.totalAfterDiscount)
                }else{
                    setcartTotalPriceAfterDis(0)
                }
            }
            else{
                setitemsNum(0)
                setcartItems([])
            }
        }
        
    }, [loading])

    return  [itemsNum,cartItems,cartTotalPrice,couponNameRes,cartTotalPriceAfterDis]
}

export default GetAllProductsCartHook
