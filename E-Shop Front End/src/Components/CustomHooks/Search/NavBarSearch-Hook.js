import { useEffect, useState } from "react";
import AllProductsHook from "../Products/AllProducts-Hook";


const NavBarSearchHook = () => {
    const [allitems,loading,PagenationCount,onPress,getProduct] = AllProductsHook()

    const [keyword, setKeyword] = useState("")

    const onSearch = (e) => {
        localStorage.setItem("searchWord",e.target.value)
        setKeyword(e.target.value)
        const path = window.location.pathname;
        if(path != "/AllProducts")
        {
            window.location.href="/AllProducts"
        }
    }

useEffect(() => {

    setTimeout(() => {
        getProduct(keyword)
    }, 1000);

}, [keyword])
    return [keyword,onSearch]
}

export default NavBarSearchHook;
