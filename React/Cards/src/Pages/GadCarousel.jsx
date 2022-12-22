import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function GadCarousel() {
    return (
        <div className='bg-secondary'>
            <Carousel className='container ml-auto '>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://content.techgig.com/photo/88544171/New-year-new-phone-Top-5-smartphones-to-launch-in-2022.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-black'>
                        <h2>Christmas Flash Sale</h2>
                        <h1>Hurry Up!</h1>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1300}>
                    <img
                        className="d-block w-100"
                        src="https://st1.bgr.in/wp-content/uploads/2022/10/Samsung-Galaxy-Z-Flip-3-5G-Price-and-Discount-Offer.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-black'>
                        <h2>The World's First Flexible Smart Phone</h2>
                        <h1>Samsung Flip 256GB</h1>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1300}>
                    <img
                        className="d-block w-100"
                        src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/1479.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-white'>
                        <h2>Grey variant (256GB)</h2>
                        <h1>Oneplus Nord</h1>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default GadCarousel;