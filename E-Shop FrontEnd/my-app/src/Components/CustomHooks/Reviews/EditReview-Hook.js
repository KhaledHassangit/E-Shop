import { useEffect, useState } from "react"
import notify from "../../../Hooks/UseNotification"
import { useDispatch, useSelector } from "react-redux"
import { EditReview } from "../../../Redux/Actions/ReviewsActions"
const EditReviewHook = (review) => {

    const dispatch = useDispatch()

    const [loading, setloading] = useState(true)
    const [Editedtext, setEditedtext] = useState(review.review)
    const [EditedRate, setEditedRate] = useState(review.rating)

    const [showEdit, setshowEdit] = useState(false);
    const handleCloseEdit = () => setshowEdit(false);
    const handleShowedit = () => setshowEdit(true);

    const onChangeRateText = (e)=>{
        setEditedtext(e.target.value) 
    }
    const onChangeRateValue= (val)=>{
        setEditedRate(val) 
    }

    const handelEdit = async()=>{
        setloading(true)
        await dispatch(EditReview(review._id),
        {
            review:Editedtext,
            rating:EditedRate
        })
        setloading(false) 
        handleCloseEdit()
    }

    const response = useSelector(state => state.CreateReview.editreview)
    useEffect(() => {
        if(loading === false)
        
            {  
                console.log(response)
                if(response.status && response.status === 200)
                {
                    notify("Success","success")
                    setTimeout(() => {
                        // window.location.reload(false)
                    }, 1000);
                }
                else{
                    notify("Fail","error")
                }

            }
    }, [loading])

    return [showEdit,handleCloseEdit,handelEdit,
        onChangeRateText,onChangeRateValue,Editedtext,EditedRate,handleShowedit]
}

export default EditReviewHook
