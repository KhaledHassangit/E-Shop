import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import notify from "../../../Hooks/UseNotification"
import { CreateReview } from "../../../Redux/Actions/ReviewsActions"





const AddRatingHook = (id) => {

    const dispatch = useDispatch()
    
    const [RatePost, setRatePost] = useState("")
    const [Ratevalue, setRatevalue] = useState(0)
    const [loading, setLoading] = useState(true)

    const onChangeRatetext = (e)=>{
        setRatePost(e.target.value)
        
    }
    const onChangeRateValue = (value)=>{
        setRatevalue(value)
        
    }
    var user ="";
    if (localStorage.getItem("user") != null)
        user = JSON.parse(localStorage.getItem("user"))
        
    const onSubmit =  async ()=>{
        if(RatePost === "")
        {
            notify("أكتب تعليقك","error")
            return;
        } 
        setLoading(true)
        await dispatch(CreateReview(id,{
            review:RatePost,
            rating:Ratevalue,
        }))
        setLoading(false)
    }

const response = useSelector(state => state.CreateReview.post)

    useEffect(() => {
        if(loading === false)
        {
            if(response)
            {
                
                if( response.status  && response.status === 403)
                {
                    notify("You are not allowed to perform this action","error")
                }
                if
                (response.data && response.data.errors && response.data.errors.length > 0 && response.data.errors[0].msg === "you already added review on this product")
                {        notify("you already added review on this product ","error")
                    return;
                }
                else if (response.status && response.status === 201)
                {
                    console.log(response)
                    notify("تمت الاضافة   ","success")
                    setTimeout(() => {
                        window.location.reload(false)
                    }, 1000);
                }
            }
        }
    }, [loading])

    return[RatePost,Ratevalue,loading,onChangeRatetext,onChangeRateValue,user,onSubmit]
}

export default AddRatingHook;
