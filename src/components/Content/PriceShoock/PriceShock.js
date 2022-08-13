import React, { Component } from "react";
import Slider from "react-slick";
import './PriceShock.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PriceShock = () => {
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
        dots: true,
        button: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        // cssEase: "linear",
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div style={{ width: '1570px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="header">
                <h2>Price Shock สินค้าราคาพิเศษ</h2>
                <div className="header-right">
                    <a href='https://www.bigc.co.th/shoponline/promotion/recommend' className="link"><p className="text">ดูสินค้าทั้งหมด</p></a>
                    <img alt="arrow" src="https://www.bigc.co.th/_nuxt/img/arrow-right.ea4c886.svg" />
                </div>
            </div>
            <Slider {...settings} className="content">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851932229838_13.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>บรีส เอกเซล โกลด์ ผงซักฟอก 2500 ก.</p>
                            <p>฿239.00<span>/ชิ้น</span> </p>
                        </div>
                    </div>
                    <div className="card-btn">
                        <button>เพิ่มสินค้า</button>
                    </div>
                    <div className="card-footer">
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-express.png" />
                            <p>จัดส่งด่วน</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-normal.png" />
                            <p>จัดส่งปกติ</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-store.png" />
                            <p>รับที่สาขา</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-parcel.png" />
                            <p>ส่งพัสดุ</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851004406600_1_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>เทสโต มันฝรั่งทอดกรอบแผ่นหยัก รสปูผัดผงกะหรี่ 11 กรัม แพ็ค 12</p>
                            <p>฿48.00<span>/ชิ้น</span> </p>
                        </div>
                    </div>
                    <div className="card-btn">
                        <button>เพิ่มสินค้า</button>
                    </div>
                    <div className="card-footer">
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-express.png" />
                            <p>จัดส่งด่วน</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-normal.png" />
                            <p>จัดส่งปกติ</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-store.png" />
                            <p>รับที่สาขา</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-parcel.png" />
                            <p>ส่งพัสดุ</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/4/9/4902430245012_7_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ดาวน์นี่ น้ำยาปรับผ้านุ่ม สูตรเข้มข้นพิเศษ กลิ่นหอมสดชื่นยามเช้า ถุงเติม 1.35 ล.</p>
                            <p> ฿119.00<span>/ชิ้น</span> </p>
                        </div>
                    </div>
                    <div className="card-btn">
                        <button>เพิ่มสินค้า</button>
                    </div>
                    <div className="card-footer">
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-express.png" />
                            <p>จัดส่งด่วน</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-normal.png" />
                            <p>จัดส่งปกติ</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-store.png" />
                            <p>รับที่สาขา</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-parcel.png" />
                            <p>ส่งพัสดุ</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851717200687_4_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ดัชมิลล์ ดีน่า นมถั่วเหลือง งาดำ 2 เท่าน้ำตาลน้อย 180 มล. แพ็ค 4</p>
                            <p>฿37.00<span>/ชิ้น</span> </p>
                        </div>
                    </div>
                    <div className="card-btn">
                        <button>เพิ่มสินค้า</button>
                    </div>
                    <div className="card-footer">
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-express.png" />
                            <p>จัดส่งด่วน</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-normal.png" />
                            <p>จัดส่งปกติ</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-store.png" />
                            <p>รับที่สาขา</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-parcel.png" />
                            <p>ส่งพัสดุ</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8853002080110_2_2.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ดัชมิลล์ ดีน่า นมถั่วเหลือง งาดำ 180 มิลลิลิตร แพ็ค 4</p>
                            <p>฿37.00<span>/ชิ้น</span> </p>
                        </div>
                    </div>
                    <div className="card-btn">
                        <button>เพิ่มสินค้า</button>
                    </div>
                    <div className="card-footer">
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-express.png" />
                            <p>จัดส่งด่วน</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-normal.png" />
                            <p>จัดส่งปกติ</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-store.png" />
                            <p>รับที่สาขา</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-parcel.png" />
                            <p>ส่งพัสดุ</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851753095001_5.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>มอคโคน่า ซีเล็ค กาแฟสำเร็จรูป ชนิดเติม 360 ก.</p>
                            <p>฿216.00<span>/ชิ้น</span> </p>
                        </div>
                    </div>
                    <div className="card-btn">
                        <button>เพิ่มสินค้า</button>
                    </div>
                    <div className="card-footer">
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-express.png" />
                            <p>จัดส่งด่วน</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-normal.png" />
                            <p>จัดส่งปกติ</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-store.png" />
                            <p>รับที่สาขา</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-parcel.png" />
                            <p>ส่งพัสดุ</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850250007425_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>เบอร์ดี้ 3 อิน 1 กาแฟ โรบัสต้า ขนาด 418.50 ก. แพ็ค 27</p>
                            <p>฿89.00<span>/ชิ้น</span> </p>
                        </div>
                    </div>
                    <div className="card-btn">
                        <button>เพิ่มสินค้า</button>
                    </div>
                    <div className="card-footer">
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-express.png" />
                            <p>จัดส่งด่วน</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-normal.png" />
                            <p>จัดส่งปกติ</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-store.png" />
                            <p>รับที่สาขา</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-parcel.png" />
                            <p>ส่งพัสดุ</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850709230138_6.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>เซอร์เทนตี้ ผ้าอ้อมผู้ใหญ่ แบบเทป ขนาด L จำนวน 24 ชิ้น</p>
                            <p>฿399.00<span>/ชิ้น</span> </p>
                        </div>
                    </div>
                    <div className="card-btn">
                        <button>เพิ่มสินค้า</button>
                    </div>
                    <div className="card-footer">
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-express.png" />
                            <p>จัดส่งด่วน</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-normal.png" />
                            <p>จัดส่งปกติ</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-store.png" />
                            <p>รับที่สาขา</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-parcel.png" />
                            <p>ส่งพัสดุ</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850092280604_2_3.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ไฮยีน เอ็กซ์เพิร์ท แคร์ ผลิตภัณฑ์ปรับผ้านุ่ม สูตรเข้มข้นพิเศษ กลิ่นมิลค์กี้ ทัช 540 มล.</p>
                            <p>฿49.00<span>/ชิ้น</span> </p>
                        </div>
                    </div>
                    <div className="card-btn">
                        <button>เพิ่มสินค้า</button>
                    </div>
                    <div className="card-footer">
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-express.png" />
                            <p>จัดส่งด่วน</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-normal.png" />
                            <p>จัดส่งปกติ</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-store.png" />
                            <p>รับที่สาขา</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-parcel.png" />
                            <p>ส่งพัสดุ</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851111423088_2_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>มามี่โพโค ผ้านุ่มชุ่มชื่น เซฟแอนด์แคร์ 80 ชิ้น แพ็ค 3</p>
                            <p>฿199.00<span>/ชิ้น</span> </p>
                        </div>
                    </div>
                    <div className="card-btn">
                        <button>เพิ่มสินค้า</button>
                    </div>
                    <div className="card-footer">
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-express.png" />
                            <p>จัดส่งด่วน</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-normal.png" />
                            <p>จัดส่งปกติ</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-store.png" />
                            <p>รับที่สาขา</p>
                        </div>
                        <div className="delivery-details">
                            <img alt="img" src="https://www.bigc.co.th/shopinshop/shipping-parcel.png" />
                            <p>ส่งพัสดุ</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default PriceShock