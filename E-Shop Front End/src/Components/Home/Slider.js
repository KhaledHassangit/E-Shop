import Carousel from 'react-bootstrap/Carousel';
import React,{useState} from 'react'
import slider1 from "../../images/slider1.png"
import slider4 from "../../images/slider4.png"
function SliderCarousel() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }
    return (
    <Carousel activeIndex={index} onSelect={handleSelect}>  
        <Carousel.Item className='slider-background' interval={2000}>
            <div className='d-flex flex-row justify-content-center align-items-center'>

                <img style={{height:"296px",width:"313px"}} className='' src={slider1} alt='First Slide'/>

                <div className=''>
                    <h3 className="slider-title">هناك خصم كبير</h3>
                    <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                </div>
            </div>
        </Carousel.Item>

        <Carousel.Item className='slider-background2' interval={2000}>
            <div className='d-flex flex-row justify-content-center align-items-center'>

                <img style={{height:"296px",width:"313px"}} className='' src={slider4} alt='Second Slide'/>

                <div className=''>
                    <h3 className='slider-title'>First slide label</h3>
                    <p className='slider-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>

        </Carousel.Item>
        
        <Carousel.Item className='slider-background' interval={2000}>
            <div className='d-flex flex-row justify-content-center align-items-center'>

                <img style={{height:"296px",width:"313px"}} className='' src={slider1} alt='First Slide'/>

                <div className=''>
                    <h3 className="slider-title">هناك خصم كبير</h3>
                    <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                </div>
            </div>
        </Carousel.Item>

        <Carousel.Item className='slider-background2' interval={2000}>
            <div className='d-flex flex-row justify-content-center align-items-center'>

                <img style={{height:"296px",width:"313px"}} className='' src={slider4} alt='Second Slide'/>

                <div className=''>
                    <h3 className='slider-title'>First slide label</h3>
                    <p className='slider-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>
        </Carousel.Item>

        </Carousel>
    );
}

export default SliderCarousel;