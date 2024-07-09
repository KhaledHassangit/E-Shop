import {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllAddresses } from "../../../Redux/Actions/AddressActions"


const ViewAddressHook = () => {
    const dispatch = useDispatch()
    const [loading,setloading]= useState(true)
    useEffect(() => {
        setloading(true)
        const get = async ()=>{
            await dispatch(getAllAddresses())
            setloading(false)
        }
        get()
    }, [])
    const addressres = useSelector(state => state.AddressReducer.viewaddress)
    
    return [addressres]
}

export default ViewAddressHook
