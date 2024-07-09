import {useEffect, useState}from 'react'
import {useSelector ,useDispatch} from "react-redux"
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../../Hooks/UseNotification';
import avatar from "../../../images/avatar.png"
import { CreateCategory } from '../../../Redux/Actions/CategoryActions';

export const AddCategoryHook = () => {
    
    const dispatch= useDispatch()
    // Save Name of The Category
    const [name, setName] = useState("")
    // Save Img When Choose One
    const [img, setImg] = useState(avatar)
    // IMG URL
    const [SelectedFile, setSelectedFile] = useState(null)
    // Loading State
    const [Loading, setLoading] = useState(true)
    // When Click on Save
    const [IsPress, setIsPress] = useState(false)

    const onChangeName=(event)=>{
        event.preventDefault();
        setName(event.target.value)     
    }
    // Load While Uploading Img
    // const loading = useSelector(state => state.allCategory.loading)
    const onImageChange=(event)=>{
    
        if(event.target.files && event.target.files[0])
        {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile((event.target.files[0]))
        }
    }


    const categoryResponse = useSelector(state => state.allCategory.category)

    // Save All The Actions(data) async await while img loading
    const handleSave= async (event)=>{
        event.preventDefault();
        if(name ==="" || SelectedFile === null)
        {
            notify("من فضلك أكمل البيانات","warning")
            return;
        }

        const formData = new FormData()
        formData.append("name",name)
        formData.append("image",SelectedFile)
        setLoading(true)
        setIsPress(true)
        await dispatch(CreateCategory(formData))
        setLoading(false)

    }

    useEffect(() => {
        if(Loading === false){
        setName("")
        setImg(avatar)
        setSelectedFile(null)
        setLoading(true)
        setTimeout(()=> setIsPress(false),1000)
        if(categoryResponse.status === 201){
            notify("تمت الاضافه بنجاح","success")
        } else{
            notify("لم تتم الاضافه ","error")
        }

        } 
    }, [Loading])

    return[img,name,Loading,IsPress,handleSave,onImageChange,onChangeName]
}