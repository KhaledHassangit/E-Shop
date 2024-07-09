import { useState } from "react";
import { useDispatch } from 'react-redux'
import { DeleteAddress } from "../../../Redux/Actions/AddressActions";

const DeleteAddressHook = (id) => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    
    const handelDelete = async ()=>{
        await dispatch(DeleteAddress(id))
        setShow(false)
        window.location.reload(false)
    }

    return  [handleClose,handleShow,handelDelete,show]
}

export default DeleteAddressHook
