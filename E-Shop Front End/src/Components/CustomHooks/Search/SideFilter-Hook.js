import {useEffect,useState} from 'react'
import {useSelector ,useDispatch} from "react-redux"
import getAllCategory from '../../../Redux/Actions/CategoryActions'
import getAllBrand from '../../../Redux/Actions/BrandActions'
import AllProductsHook from '../Products/AllProducts-Hook'

export const SideFilterHook = () => {
const [allitems,loading,PagenationCount,onPress,getProduct,results] = AllProductsHook()

    const dispatch = useDispatch()  
    useEffect(() => {
        dispatch(getAllCategory())
        dispatch(getAllBrand())

    },[])

    const allcategory = useSelector(state => state.allCategory.category)
    const Brands = useSelector (state=> state.allBrand.Brand)



    const [CheckedCat, setCheckedCat] = useState([])

    let CategoryQueryString =""

    const ChoosenCategory =(e)=>{   
        let value = e.target.value
        if(value === "0")
        {
            // getQuery()
            setCheckedCat([])
        }
        else {
            if (e.target.checked === true)
            {
                // getQuery()
                setCheckedCat([...CheckedCat,value])
            }else if (e.target.checked === false){
                let newArray =  CheckedCat.filter((e)=>  e !== value)
                // getQuery()
                setCheckedCat(newArray)

            }
        }
    } 

    useEffect(() => {
            // (category[in][]=) Api Url + val(id)
            CategoryQueryString = CheckedCat.map(val => "category[in][]="+val).join("&")
            localStorage.setItem("ChoosenCategory",CategoryQueryString)
            setTimeout(() => {
                getProduct()
            }, 1000);
    }, [CheckedCat])

    const [CheckedBrand, setCheckedBrand] = useState([])
    let BrandQueryString =""

    const ChoosenBrand =(e)=>{   
        let value = e.target.value
        if(value === "0")
        {
            setCheckedBrand([])
        }
        else {
            if (e.target.checked === true)
            {
                setCheckedBrand([...CheckedBrand,value])
            }else if (e.target.checked === false){
                let newArray =  CheckedBrand.filter((e)=>  e !== value)
                setCheckedBrand(newArray)
            }
        }
    } 
    useEffect(() => {
        // (category[in][]=) Api Url + val(id)
        BrandQueryString = CheckedBrand.map(val => "brand[in][]="+val).join("&")
        localStorage.setItem("ChoosenBrand",BrandQueryString)
        setTimeout(() => {
            getProduct()
        }, 1000);
}, [CheckedBrand])


const [From, setPriceFrom] = useState(0)
const [To, setToFrom] = useState(0)

const priceFrom = (e) => {
    let pricefromvalue = e.target.value
    localStorage.setItem("priceFrom",pricefromvalue)
    setPriceFrom(pricefromvalue)
    console.log(e.target.value)
}
const priceTo = (e) => {
    let pricetovalue = e.target.value
    localStorage.setItem("priceTo",pricetovalue)
    setToFrom(pricetovalue)
}

useEffect(() => {
    setTimeout(() => {
        getProduct();
    }, 1000);
}, [From, To])




    let category = []
    try{
        if (allcategory.data)
        category = allcategory.data
        else
            category = []
    } catch(e){}

    let Brand = []
    try{
        if (Brands.data)
        Brand = Brands.data
        else
        Brand = []
    } catch(e){}


    return[category,Brand,ChoosenCategory,ChoosenBrand,priceFrom,priceTo]

}
