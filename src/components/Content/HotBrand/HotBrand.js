import React from 'react'
import './HotBrand.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HotBrand = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "white" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "white" }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: false,
        button: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div style={{ width: '1570px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="header">
                <h2>แบรนด์สุดฮิต</h2>
            </div>
            <hr></hr>
            <Slider {...settings} className="card-content">
                <div className="card-wrapper">
                    <div className="img">
                        <img className='brand-img' alt="product-img" src="https://static.bigc.co.th/media/bannerads/images/sns-besico-home-logo.jpg" style={{width : '250px', transform :'translateX(30px)'}}/>
                    </div>
                    <div className="btn">
                        <button>ช้อปเลย</button>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="img">
                        <img className='brand-img' alt="product-img" src="https://static.bigc.co.th/media/bannerads/images/logo-big-power.jpg" style={{width : '250px', transform :'translateX(30px)'}} />
                    </div>
                    <div className="btn">
                        <button>ช้อปเลย</button>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="img">
                        <img className='brand-img' alt="product-img" src="https://static.bigc.co.th/media/bannerads/images/logo-pure-1.jpg" style={{width : '250px', transform :'translateX(30px)'}} />
                    </div>
                    <div className="btn">
                        <button>ช้อปเลย</button>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="img">
                        <img className='brand-img' alt="product-img" src="https://static.bigc.co.th/media/bannerads/images/logo-babylove-certainty-196x196px.jpg" style={{width : '250px', transform :'translateX(30px)'}} />
                    </div>
                    <div className="btn">
                        <button>ช้อปเลย</button>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="img">
                        <img className='brand-img' alt="product-img" src="https://static.bigc.co.th/media/bannerads/images/logo-shop-196x196px-23.jpg" style={{width : '250px', transform :'translateX(30px)'}} />
                    </div>
                    <div className="btn">
                        <button>ช้อปเลย</button>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="img">
                        <img className='brand-img' alt="product-img" src="https://static.bigc.co.th/media/bannerads/images/enfa-196x196.jpg" style={{width : '250px', transform :'translateX(30px)'}} />
                    </div>
                    <div className="btn">
                        <button>ช้อปเลย</button>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="img">
                        <img className='brand-img' alt="product-img" src="https://static.bigc.co.th/media/bannerads/images/cocacala-logo.jpg" style={{width : '250px', transform :'translateX(30px)'}}/>
                    </div>
                    <div className="btn">
                        <button>ช้อปเลย</button>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="img">
                        <img className='brand-img' alt="product-img" src="https://static.bigc.co.th/media/bannerads/images/colgate-logo.jpg" style={{width : '250px', transform :'translateX(30px)'}}/>
                    </div>
                    <div className="btn">
                        <button>ช้อปเลย</button>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="img">
                        <img className='brand-img' alt="product-img" src="https://static.bigc.co.th/media/bannerads/images/foremost-logo.jpg" style={{width : '250px', transform :'translateX(30px)'}}/>
                    </div>
                    <div className="btn">
                        <button>ช้อปเลย</button>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="img">
                        <img className='brand-img' alt="product-img" src="https://static.bigc.co.th/media/bannerads/images/entranccdd.png" style={{width : '250px', transform :'translateX(30px)'}}/>
                    </div>
                    <div className="btn">
                        <button>ช้อปเลย</button>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="img">
                        <img className='brand-img' alt="product-img" src="https://static.bigc.co.th/media/bannerads/images/logo-p-g-196x196px.jpg" style={{width : '250px', transform :'translateX(30px)'}}/>
                    </div>
                    <div className="btn">
                        <button>ช้อปเลย</button>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="img">
                        <img className='brand-img' alt="product-img" src="https://static.bigc.co.th/media/bannerads/images/pepsi-logo-brand-20210301-1.jpg" style={{width : '250px', transform :'translateX(30px)'}}/>
                    </div>
                    <div className="btn">
                        <button>ช้อปเลย</button>
                    </div>
                </div>
                
            </Slider>
        </div>
    )
}

export default HotBrand