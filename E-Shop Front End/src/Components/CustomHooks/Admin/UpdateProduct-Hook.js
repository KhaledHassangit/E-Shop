import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getallcategory from "../../../Redux/Actions/CategoryActions"
import { getOneSubCategory } from '../../../Redux/Actions/SubCategoryActions';
import getAllBrand from "../../../Redux/Actions/BrandActions"
import {UpdateProduct, getOneProducts } from '../../../Redux/Actions/ProductActions';
import notify from "../../../Hooks/UseNotification"

const UpdateProductHook = (id) => {

    const [images, setImages] = useState([])
    const [ProductName, setProductName] = useState("")
    const [ProductDescribtion, setProductDescribtion] = useState("")
    const [PriceBefore, setPriceBefore] = useState('السعر قبل الخصم')
    const [PriceAfter, SetPriceAfter]= useState('السعر بعد الخصم')
    const [Quantity, setQuantity]= useState('الكمية المتاحة')
    const [CategoryID, setCategoryID]= useState("0")
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
    const oneProduct = useSelector(state => state.allproducts.oneproduct)

    const dispatch = useDispatch()
    useEffect(() => {
        const run = async()=>{
        await  dispatch(getallcategory(18))
        await dispatch(getAllBrand())
        await  dispatch(getOneProducts(id))
        }
        run()
    }, [])

    useEffect(() => {
        if (oneProduct.data) {
            setProductName(oneProduct.data.title)
            setProductDescribtion(oneProduct.data.description)
            setPriceBefore(oneProduct.data.price)
            SetPriceAfter(oneProduct.data.price)
            setQuantity(oneProduct.data.quantity)
            setCategoryID(oneProduct.data.category)
            setBrandID(oneProduct.data.brand)
            setColors(oneProduct.data.availableColors)
            setImages(oneProduct.data.images)
        }
    }, [oneProduct])

    // When Select Category 
    const onSelectCategory= async (e)=>{
        setCategoryID(e.target.value)
    }

    useEffect(() => {
        if(CategoryID != 0){
            const run = async ()=>{
                await  dispatch(getOneSubCategory(CategoryID))
            }
            run()
        }    
    }, [CategoryID])

    useEffect(() => {
        if(subcategory.data){
            setOptions(subcategory.data)
        }
    }, [subcategory])

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
    //convert url to file
    const convertURLtoFile = async (url) => {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);
    };
    const handelSubmit = async(e)=>{
        e.preventDefault()
        if(CategoryID === 0 || ProductName === "" || ProductDescribtion === "" || images.length <=0 || PriceBefore <=0)
        {
            notify("من فضلك أكمل البيانات","warning")
            return;
        }
          // Check if images array is empty

        let imageCover;
        if(images[0].length <= 1000){
            // Convert url or base64
            convertURLtoFile(images[0]).then(val  => imageCover=val)
        }else{
        // To Convert  Base64 to Image
        imageCover = dataURLtoFile(images[0],Math.random() + ".png")
        }
        let itemImages = [];

        // To Convert Base64 to Image Array
        await Promise.all(
            Array.from(Array(Object.keys(images).length).keys()).map(async (index) => {
                if (images[index].length <= 1000) {
                    // Convert url or base64
                    const file = await convertURLtoFile(images[index]);
                    itemImages.push(file);
                } else {
                    const file = dataURLtoFile(images[index], Math.random() + ".png");
                    itemImages.push(file);
                }
            })
        );
                
        const formData = new FormData()
        formData.append("title",ProductName)
        formData.append("description",ProductDescribtion)
        formData.append("quantity",Quantity)
        formData.append("price",PriceBefore)
        formData.append("category",CategoryID)
        formData.append("brand",BrandID)
        Colors.map((color)=> formData.append("availableColors",color))
        SubCategoryID.map((item)=> formData.append("subcategory",item._id))

        setTimeout(() => {
            formData.append("imageCover",imageCover)
            itemImages.map((item)=> formData.append("images",item))
        }, 1000);

        setTimeout(async() => {
            setLoading(true)
            await dispatch(UpdateProduct(id,formData))
            setLoading(false)
        }, 1000);
    }
    
    const UpdatedProduct = useSelector(state => state.allproducts.UpdatedProduct)

    useEffect(() => {
        if (Loading=== false)
        {
            // setSubCategoryID(0)
            setImages([])
            setColors([])
            setProductName("")
            setPriceBefore('السعر قبل الخصم')
            SetPriceAfter('السعر بعد الخصم')
            setQuantity('الكمية المتاحة')
            setBrandID(0)
            setProductDescribtion("")
            setTimeout(() => {
                setLoading(true)
            }, 1500);
            if(UpdatedProduct){
                if(UpdatedProduct.status === 200){
                    notify("تم التعديل بنجاح", "success")
                } else{
                    notify("هناك مشكله", "error")
                }
            }
                
        }                    

    }, [Loading])




return [Loading,images,setImages,
    ProductName
    ,setProductName
    ,ProductDescribtion,
    setProductDescribtion,
    PriceBefore,setPriceBefore
    ,PriceAfter,SetPriceAfter,
    Quantity,setQuantity,
    SubCategoryID
    ,setSubCategoryID
    ,onSelectCategory,OnSelect,OnRemove,
    Options,setOptions
    ,setBrandID,Colors,setColors
    ,saveColor,removeColor,category,
    subcategory,Brands,products
    ,handelSubmit,ShowColor
    ,setShowColor,oneProduct,BrandID,CategoryID]

}

export default UpdateProductHook
