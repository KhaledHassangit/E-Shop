import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getallcategory from "../../../Redux/Actions/CategoryActions"
import { getOneSubCategory } from '../../../Redux/Actions/SubCategoryActions';
import getAllBrand from "../../../Redux/Actions/BrandActions"
import { CreateProduct } from '../../../Redux/Actions/ProductActions';
import notify from "../../../Hooks/UseNotification"

const AddProductHook = () => {

    const [images, setImages] = useState([])
    const [ProductName, setProductName] = useState("")
    const [ProductDescribtion, setProductDescribtion] = useState("")
    const [PriceBefore, setPriceBefore] = useState()
    const [PriceAfter, SetPriceAfter]= useState()
    const [Quantity, setQuantity]= useState()
    const [CategoryID, setCategoryID]= useState("")
    const [SubCategoryID, setSubCategoryID]= useState([])
    // SubCategory Options
    const [Options, setOptions]= useState([])
    const [BrandID, setBrandID]= useState("0")
    // Show and Hide Color Picker
    const [ShowColor, setShowColor]= useState(false)
    // To Save all Colors
    const [Colors, setColors]= useState([])
    const [Loading, setLoading]= useState(true)

    const category = useSelector(state => state.allCategory.category)
    const subcategory = useSelector(state => state.subcategory.subcategory)
    const Brands = useSelector (state=> state.allBrand.Brand)
    const products = useSelector(state=> state.allproducts.product)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getallcategory(18))
        dispatch(getAllBrand())
    }, [])
    // When Select Categoryd 
    const onSelectCategory= async (e)=>{
        if(e.target.value !== 0)
        {
            await dispatch(getOneSubCategory(e.target.value))
        }
        setCategoryID(e.target.value)
    }
    useEffect(() => {
        
        if(CategoryID !==0){
            if(subcategory.data){
                setOptions(subcategory.data)
            }
        }    
        
    }, [CategoryID])

    // When Select Color
    const saveColor = (color)=>{
        setColors([...Colors,color.hex])
        setShowColor(!ShowColor)
    }
    // Remove Color
    const removeColor= (color)=>{
        const newColors = Colors.filter((e)=> e !== color)
        setColors(newColors)
    }
    const OnSelect = (selectedList)=>{
        setSubCategoryID(selectedList)
    }
    const OnRemove = (selectedList)=>{
        setSubCategoryID(selectedList)
    }
// To Convert  Base64 to Image
function dataURLtoFile(dataurl, filename) {

    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
}
    const handelSubmit = async(e)=>{
        e.preventDefault()
        if(CategoryID === 0 || ProductName === "" || ProductDescribtion === "" || images.length <=0 || PriceBefore <=0)
        {
            notify("من فضلك أكمل البيانات","warning")
            return;

        }
        // To Convert  Base64 to Image
        const imageCover = dataURLtoFile(images[0],Math.random() + ".png")
        // To Convert  Base64 to Image Array
        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map((item,index)=>{
            return dataURLtoFile(images[index],Math.random() + ".png")
        })
        const formData = new FormData()
        formData.append("title",ProductName)
        formData.append("description",ProductDescribtion)
        formData.append("quantity",Quantity)
        formData.append("price",PriceBefore)
        formData.append("priceAfterDiscount",PriceAfter) 
        formData.append("imageCover",imageCover)
        formData.append("category",CategoryID)
        formData.append("brand",BrandID)
        Colors.map((color)=> formData.append("availableColors",color))
        SubCategoryID.map((item)=> formData.append("subcategory",item._id))
        itemImages.map((item)=> formData.append("images",item))
        setLoading(true)
        await dispatch(CreateProduct(formData))
        setLoading(false)
    }
    useEffect(() => {
        if (Loading=== false)
        {
            setSubCategoryID(0)
            setImages([])
            setColors([])
            setProductName("")
            setPriceBefore("")
            SetPriceAfter("")
            setQuantity("")
            setBrandID("")
            setProductDescribtion("")
            setTimeout(() => {
                setLoading(true)
            }, 1500);
            if(products.status === 201){
                notify("تمت الاضافه بنجاح","success")
            } else{
                notify("لم تتم الاضافه ","error")
            }
        }
    }, [Loading])
return [Loading,images,setImages,ProductName,setProductName,ProductDescribtion,setProductDescribtion,PriceBefore,setPriceBefore,PriceAfter,SetPriceAfter,Quantity,setQuantity,SubCategoryID,setSubCategoryID,onSelectCategory,OnSelect,OnRemove,Options,setOptions,setBrandID,Colors,setColors,saveColor,removeColor,category,subcategory,Brands,products,handelSubmit,ShowColor,setShowColor]

}

export default AddProductHook
