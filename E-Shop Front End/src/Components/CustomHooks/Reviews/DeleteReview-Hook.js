import { useEffect, useState } from "react"
import notify from "../../../Hooks/UseNotification"
import { useDispatch, useSelector } from "react-redux"
import { DelteReview } from "../../../Redux/Actions/ReviewsActions"

const DeleteReviewHook = (review) => {


    const dispatch = useDispatch()
    const [isUser, setisUser] = useState(false)
    const [loading, setloading] = useState(true)

    let user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        if(review.user._id === user._id)
    {
        setisUser(true)
    }
    }, [])
    const [showDelete, setshowDelete] = useState(false);
    const handleClose = () => setshowDelete(false);
    const handleShow = () => setshowDelete(true);

    const handelDelete = async()=>{
        setloading(true)
        await dispatch(DelteReview(review._id))
        setloading(false) 
        handleClose()
        // window.location.reload()
    }

    const response = useSelector(state => state.CreateReview.deletereview)
    useEffect(() => {
        if(loading === false)
            {  
                if(response === "")
                {
                    notify("Success","success")
                    setTimeout(() => {
                        window.location.reload(false)
                    }, 1000);
                }
                else{
                    notify("Fail","error")
                }

            }
    }, [loading])


    return [isUser,showDelete,handleClose,handelDelete,handleShow]
}

export default DeleteReviewHook
