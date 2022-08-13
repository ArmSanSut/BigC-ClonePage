import React from "react";
import Slider from "react-slick";
import './Promotion.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FirstTab = () => {
    const settings = {
        dots: false,
        button: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        // cssEase: "linear",
        initialSlide: 0,
    };
  return (
    <div style={{ width: '1570px', marginLeft: 'auto', marginRight: 'auto', marginTop:'50px' }}>
            <div className="header-text">
                <div className="header-right">
                    <a href='https://www.bigc.co.th/shoponline/promotion/super-save' className='link'>
                        <p className='text'>ดูสินค้าทั้งหมด</p>
                    </a>
                    <img alt="arrow" src="https://www.bigc.co.th/_nuxt/img/arrow-right.ea4c886.svg" />
                </div>
            </div>
            <Slider {...settings} className="content">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850423000086_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>เฮลซ์บลูบอย น้ำหวานเข้มข้น กลิ่นครีมโซดา 710 มิลลิลิตร</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿51.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850124041494_8.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ตราหมี โกลด์ ผลิตภัณฑ์นมสเตอริไลส์ไขมันต่ำผสมชาขาว 140 มล. แพ็ค 4</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿54.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850124041524_8.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ตราหมี โกลด์ ผลิตภัณฑ์นมสเตอริไลส์ไขมันต่ำผสมมอลต์สกัด 140 มล. แพ็ค 4</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿54.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850367100019_1_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ชาวเกาะ กะทิสำเร็จรูป 250 มล.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿23.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850267117629_3.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>แลคตาซอย นมถั่วเหลือง รสหวาน 125 มล. แพ็ค 6</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿27.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8858998581177_8.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>เป๊ปซี่ แม็กซ์ เครื่องดื่มอัดลม ไม่มีน้ำตาล 1.45 ล.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿26.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851959632673_8.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ชเวปส์ น้ำอัดลมมะนาวโซดา 325 มล. แพ็ค 6</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿80.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850999001456_2.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>เพอร์ร่า น้ำแร่ธรรมชาติ 100% 600 มล. แพ็ค 12</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿82.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8852007934220_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>สก๊อต ซุปไก่สกัด สูตร 100% 42 มล. แพ็ค 6</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿185.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8852007912365_7.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>สก๊อต ซุปไก่สกัด สูตรผสมถั่งเฉ้า 42 มล. แพ็ค 6</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿185.00<span style={{color : 'black', fontSize : '16px'}} >/ชิ้น</span> </p>
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
  );
};
export default FirstTab;