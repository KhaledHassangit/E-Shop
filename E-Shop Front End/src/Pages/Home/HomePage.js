import React from 'react'
import SliderCarousel from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import ProductsContainer from '../../Components/Products/ProductsContainer'
import DicountSection from './DicountSection'
import BrandContainer from '../../Components/Brand/BrandContainer'
import HomeProductsHook from '../../Components/CustomHooks/Products/HomeProducts-Hook'


const HomePage = () => {
    const [items,loading] = HomeProductsHook()


    return (
        <div className='font' style={{minHeight:"650px"}}>
            <SliderCarousel/>
            <HomeCategory/>
            <ProductsContainer loading={loading} products={items} title="الأكثر مبيعا" btntitle="المزيد" pathroute={"/AllProducts"}/>
            <DicountSection/>
            <ProductsContainer loading={loading}  products={items} title=" وصل حديثا" btntitle="المزيد" pathroute={"/AllProducts"} />
            <BrandContainer title=" أشهر الماركات " btntitle="المزيد" />
        </div>
    )
}

export default HomePage
