import  { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../../../Redux/Actions/CartActions'
import notify from "../../../Hooks/UseNotification.js"
const AddtoCartHook = (ProdID,item) => {

    const dispatch = useDispatch()
    const  [indexColor, setindexColor] = useState("")
    const  [colorText, setcolorText] = useState("")
    const  [loading, setLoading] = useState(true)

    const SelectColor = (index,color) =>{
        setindexColor(index)
        setcolorText(color)
        console.log(color)
    }
    const AddtoCarthandel =  async()=>{
        if(item.availableColors.length >= 1){
            if(colorText === ""){
                notify("Choose A Color !","warn")
                return;
            }
        }else{
            setcolorText("")
        }
        setLoading(true)
        await dispatch(AddToCart({
            productId: ProdID,
            color: colorText,
        }))
        setLoading(false)
    }

    const AddedProductres = useSelector(state => state.CartReducer.addtocart)
    useEffect(() => {
        if(loading === false)
        {
            if(AddedProductres && AddedProductres.status === 200 ){
                notify("Product Added Successfully To Your Cart","success")
                // setTimeout(() => {
                //     window.location.reload(false)
                // }, 1000);
            }
            else{
                notify("You are not logged in. Please login to get access","warn")

            }
        }
    }, [loading])


    return [indexColor,SelectColor,AddtoCarthandel]
}

export default AddtoCartHook
