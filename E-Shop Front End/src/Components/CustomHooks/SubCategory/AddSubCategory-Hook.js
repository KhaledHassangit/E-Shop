import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getAllCategory from '../../../Redux/Actions/CategoryActions'
import notify from '../../../Hooks/UseNotification'
import { CreateSubCategory } from '../../../Redux/Actions/SubCategoryActions'

const AddSubCategoryHook = () => {
    const [id, setId] = useState("0")
    const [name, setName] = useState("")
    const [Loading, setLoading] = useState(true)
    // When Click on Save
    const [IsPress, setIsPress] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        if(!navigator.onLine){
            notify("No Internet Connection can’t be reached","warn")
        }
        dispatch(getAllCategory(18))
    },[])

    const category = useSelector(state => state.allCategory.category)
    const subcategory = useSelector(state => state.subcategory.subcategory)
    // When Select Category From DropDown Menu 
    const handelChange = (e)=>{
        setId(e.target.value)
    }
    // Save Change [Data]
    const handelSave = async(e)=>{
        e.preventDefault()
        // if(navigator.onLine){   
        //     notify("No Internet Connection can’t be reached","warn")
        //     return;
        // }
        if (id === "0")
        {
            notify("من فضلك أختر التصنيف الرئيسي","warning")
            return;
        }
        if (name === "")
        {
            notify("من فضلك أكمل البيانات  ","warning")
            return;
        }
        setLoading(true)
        await dispatch(CreateSubCategory({
            name:name,
            category:id,
        }))
        setLoading(false)
        setIsPress(true)
        setName("")
        setId("0")
    }
    useEffect(() => {
        if (Loading === false){   
            setTimeout(()=> setIsPress(false),1000)
            if(subcategory.status === 201){
                notify("تمت الاضافه بنجاح","success")

            } else if(subcategory === "Failed to load resource: the server responded with a status of 400 (Bad Request)") {
                notify("هذا الأسم مكرر","warn")
            }
            else{
                notify("لم تتم الاضافه ","error")
            }

        }
    }, [Loading])


    return  [id,name,setName,IsPress,Loading,category,handelChange,handelSave]
}

export default AddSubCategoryHook
