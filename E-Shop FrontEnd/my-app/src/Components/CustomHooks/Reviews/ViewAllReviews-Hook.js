import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import notify from "../../../Hooks/UseNotification"
import { getAllReviews } from "../../../Redux/Actions/ReviewsActions"








const ViewAllReviewsHook = (id) => {

    const dispatch = useDispatch()


    const [loading, setLoading] = useState(true)

    const AllReviews = useSelector(state => state.CreateReview.reviews)

    if(AllReviews)
    {
        
    }
    useEffect(() => {
        setLoading(true)
        dispatch(getAllReviews(id,1,10))
        setLoading(false)
    }, [])

    const onPress =  async(page)=>{
        await dispatch(getAllReviews(id,page,5))

    }




    return[AllReviews,loading,onPress ]
}

export default ViewAllReviewsHook;
