import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import LeftButton from './LeftButton';
import RightButton from "./RightButton"
import { useParams } from 'react-router'
import ProductDetailsHook from '../CustomHooks/Products/ProductDetails-Hook';

const ProductGallery = () => {
    const {id} = useParams()
    const [item,images]= ProductDetailsHook(id)


    return(

        <div className='product-gallary-card d-flex justify-content-center  align-items-center pb-4 mb-5  '>
            <ImageGallery  items={images} 
            showFullscreenButton={false} isRTL={true} showPlayButton={false}
            showThumbnails={true} renderRightNav={RightButton} renderLeftNav={LeftButton} />
        </div>
        
    )
}

export default ProductGallery
