import React from 'react'
import AdminAllOrdersCard from './AdminAllOrdersCard'
import { Row } from 'react-bootstrap'
import UserGetAllOrdersHook from '../CustomHooks/User/UserGetAllOrders-Hook'
import Pagenation from '../Utilities/Pagenation'

const AdminAllOrdersContainer = () => {
    const [username,AllOrdersRes,result,paginate,orderdata,onPress] = UserGetAllOrdersHook()
    return (
        <div>
            <div className='admin-content-text my-2'>ادارة جميع الطلبات</div>
            <Row className='justify-content-center'>
            {
                AllOrdersRes.data ? AllOrdersRes.data.length >=1 ? 
                (AllOrdersRes.data.map((orderItem,index)=>{
                    return (<AdminAllOrdersCard key={index} orderItem={orderItem} />)
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

export default AdminAllOrdersContainer
