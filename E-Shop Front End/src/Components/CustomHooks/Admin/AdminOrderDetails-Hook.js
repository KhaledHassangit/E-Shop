import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetOneOrder, UpdateOrderDeliver, UpdateOrderPay } from '../../../Redux/Actions/OrdersActions'
import notify from '../../../Hooks/UseNotification'

const AdminOrderDetailsHook = (id) => {

    const dispatch = useDispatch()
    const [loading,setloading]= useState(true) 
    const [OrderData,setOrderData]= useState([]) 
    const [cartItem,setcartItem]= useState([]) 


    const get = async()=>{
        setloading(true)
        await dispatch(GetOneOrder(id))
        setloading(false)
    }
    useEffect(() => {
        get()
    }, [])

    const OneOrderRes = useSelector(state => state.OrdersReducer.oneorder)

    useEffect(() => {
        if(loading === false){
            if(OneOrderRes)
            {
                if(OneOrderRes.data){
                    setOrderData(OneOrderRes.data)
                }
                if(OneOrderRes.cartItems){
                    setcartItem(OneOrderRes.cartItems)
                }
            } else{
                setOrderData([])
            }
        }
    }, [loading])   

    const [ladoingPay,setladoingPay]= useState(true)  
    const [ladoingDeliver,setladoingDeliver]= useState(true)  
    const [pay,setpay]= useState(0) 
    const [Deliver,setDeliver]= useState(0) 



    const onChangePaid = async()=>{
        if(pay === "true"){
            setladoingPay(true)
            await dispatch(UpdateOrderPay(id))
            setladoingPay(false)
        }else if (pay === "0")
            {
                notify("أختر حالة الطلب","error")
            }
    }


    const onChangeDelving = async()=>{
        if(Deliver === "true"){
            setladoingDeliver(true)
            await dispatch(UpdateOrderDeliver(id))
            setladoingDeliver(false)
        }else if (Deliver ==="0")
            {
                notify("أختر حالة الطلب","error")
            }
        
    }

    const UpdatePay = useSelector(state => state.OrdersReducer.updatepay)
    console.log(UpdatePay)
    useEffect(() => {
        if(ladoingPay === false){
            if(UpdatePay && UpdatePay.status === 200 )
            {
                notify(" تم تغير حالة الطلب ","success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
        }
    }, [ladoingPay])   
    
    const UpdateDeliver = useSelector(state => state.OrdersReducer.updatedeliver)

    useEffect(() => {
        if(ladoingDeliver === false){
            if(UpdateDeliver && UpdateDeliver.status === 200 )
            {
                notify(" تم تغير حالة الطلب ","success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
        }
    }, [ladoingDeliver])   

    const onclickSavePay = (e)=>{
        setpay(e.target.value)
    }
    
    const onclickSaveDeliver = (e)=>{
        setDeliver(e.target.value)
    }

    return [OrderData,cartItem,onChangePaid,onChangeDelving,onclickSavePay,onclickSaveDeliver]
}

export default AdminOrderDetailsHook
