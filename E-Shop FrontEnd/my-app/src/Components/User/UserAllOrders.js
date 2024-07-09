import React from 'react'
import {Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'
import UserGetAllOrdersHook from "../../Components/CustomHooks/User/UserGetAllOrders-Hook"
import Pagenation from '../Utilities/Pagenation'
export const UserAllOrders = () => {
    const  [username,AllOrdersRes,result,paginate,orderdata,onPress]  = UserGetAllOrdersHook()
    return (
        <div>
        <div className="admin-content-text pb-4">  عدد الطلبات #{AllOrdersRes.results}</div>
        <Row className='justify-content-between'>
            {
                AllOrdersRes.data ? AllOrdersRes.data.length >=1 ? 
                (AllOrdersRes.data.map((orderItem,index)=>{
                    return (<UserAllOrderItem key={index} orderItem={orderItem} />)
                }))
                : <h6>لا يوجد طلبات </h6>
                : null
            }
                {
                    paginate.numberOfPages >= 2 ? (
                        <Pagenation pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0}
                        onPress={onPress}/>
        
                    ) : null
                }
        </Row>
        </div>
    )
}
