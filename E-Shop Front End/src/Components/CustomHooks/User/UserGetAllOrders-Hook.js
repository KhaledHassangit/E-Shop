import {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetAllUserOrders } from "../../../Redux/Actions/OrdersActions"
import notify from "../../../Hooks/UseNotification"


const UserGetAllOrdersHook = () => {

    const dispatch = useDispatch()
    const [loading,setloading]= useState(true)
    const [result,setresult]= useState(0)
    const [paginate,setpaginate]= useState({})
    const [orderdata,setorderdata]= useState([])

    const user = JSON.parse(localStorage.getItem("user"))
    let username = ""
    if(user != null)
        username = user.name

    const get = async()=>{
        setloading(true)
        await dispatch(GetAllUserOrders("",""))
        setloading(false)
    }
    useEffect(() => {
        get()
    }, [])

    const onPress = async (page)=>{
        setloading(true)
        await dispatch(GetAllUserOrders("",page))
        setloading(false)
    }
    const AllOrdersRes = useSelector(state => state.OrdersReducer.userorders)

    useEffect(() => {
        if(loading === false){
            if(AllOrdersRes && AllOrdersRes.status === 200)
            {
                setresult(AllOrdersRes.results)
                setpaginate(AllOrdersRes.paginationResult)
                setorderdata(AllOrdersRes.data)

            } else{
                notify("Error","error")
            }
        }
    }, [loading])   

    return [username,AllOrdersRes,result,paginate,orderdata,onPress]

}

export default UserGetAllOrdersHook
