import React from 'react';
import { Carousel } from 'react-bootstrap';
import Link from 'next/link'

const Slider = () => {
    return (
    <div className="homeslider">

        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/banner/1.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
                <div className="slider-text">
                    <p className="welcome">Welcome To</p>
                    <p className="res-name">Henlow Tandoori</p>
                    <p className="res-cuisine">Indian Takeaway</p>
                    <Link href="#"><a className="btn btn-danger">Order Now</a></Link>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="/banner/2.jpg"
            alt="First slide"
            />

            <Carousel.Caption>
                <div className="slider-text">
                    <p className="welcome">Welcome To</p>
                    <p className="res-name">Henlow Tandoori</p>
                    <p className="res-cuisine">Indian Takeaway</p>
                    <Link href="#"><a className="btn btn-danger">Order Now</a></Link>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="/banner/3.jpg"
            alt="First slide"
            />

            <Carousel.Caption>
                <div className="slider-text">
                    <p className="welcome">Welcome To</p>
                    <p className="res-name">Henlow Tandoori</p>
                    <p className="res-cuisine">Indian Takeaway</p>
                    <Link href="#"><a className="btn btn-danger">Order Now</a></Link>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

        {/* <img src="/wave.png" alt="wave" className="wave" /> */}
    </div>
    );
}
 
export default Slider;