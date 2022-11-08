import React from 'react';
import './Carousel.css';
import logo1 from '../../Assets/img-1.png';
import logo2 from '../../Assets/img-2.png';
import logo3 from '../../Assets/img-3.png';

const Carousel = () => {
    return (
        <div className="carousel w-full h-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={logo1} alt="" className="w-full" />
                </div>
                <div className='absolute flex transform -translate-y-1/2 md:hidden top-1/2 w-full'>
                    <h1 className='text-center text-2xl font-bold text-white mx-auto'>Smart Solution For All Of <br /> Your Digital Printing Service</h1>
                </div>
                <div className='hidden md:flex'>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                        <div>
                            <p className='bg-red-500 w-1/3 p-2 text-white rou'>Digital Printing Service</p>
                            <h1 className='text-5xl font-bold text-white'>
                                Produce Digital Printing <br />
                                With Business Growing
                            </h1>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                        <p className='text-xl text-white'>We are genuinely invested in your company and getting your results</p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                        <button className="btn btn-warning mr-5 text-white font-bold">Get In Touch</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img alt='' src={logo2} className="w-full" />
                </div>
                <div className='absolute flex transform -translate-y-1/2 md:hidden top-1/2 w-full'>
                    <h1 className='text-center text-2xl font-bold text-white mx-auto'>Smart Solution For All Of <br /> Your Digital Printing Service</h1>
                </div>
                <div className='hidden md:flex'>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                        <div>
                            <p className='bg-red-500 w-1/3 p-2 text-white rou'>Digital Printing Service</p>
                            <h1 className='text-5xl font-bold text-white'>
                                Produce Digital Printing <br />
                                With Business Growing
                            </h1>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                        <p className='text-xl text-white'>We are genuinely invested in your company and getting your results</p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                        <button className="btn btn-warning mr-5 text-white font-bold">Get In Touch</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={logo3} alt="" className="w-full" />
                </div>
                <div className='absolute flex transform -translate-y-1/2 md:hidden top-1/2 w-full'>
                    <h1 className='text-center text-2xl font-bold text-white mx-auto'>Smart Solution For All Of <br /> Your Digital Printing Service</h1>
                </div>
                <div className='hidden md:flex'>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                        <div>
                            <p className='bg-red-500 w-1/3 p-2 text-white rou'>Digital Printing Service</p>
                            <h1 className='text-5xl font-bold text-white'>
                                Produce Digital Printing <br />
                                With Business Growing
                            </h1>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                        <p className='text-xl text-white'>We are genuinely invested in your company and getting your results</p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                        <button className="btn btn-warning mr-5 text-white font-bold">Get In Touch</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;