import React from "react";
import Slider from "react-slick";
import './Promotion.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ThirdTab = () => {
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
                    <a href='https://www.bigc.co.th/shoponline/promotion/buy2-get1-free' className='link'><p className='text'>ดูสินค้าทั้งหมด</p></a>
                    <img alt="arrow" src="https://www.bigc.co.th/_nuxt/img/arrow-right.ea4c886.svg" />
                </div>
            </div>
            <Slider {...settings} className="content">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850338009440_4.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/Buy2Get1th1.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ฮอลล์ เอ็กซ์เอส ลูกอมชูการ์ฟรี กลิ่นไลม์ 13.8 ก</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿29.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850338009839_5.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/Buy2Get1th1.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ฮอลล์ เอ็กซ์เอส ลูกอมชูการ์ฟรี กลิ่นแตงโม 15 ก.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿29.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850338009471_2.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/Buy2Get1th1.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ฮอลล์ เอ็กซ์เอส ลูกอมชูการ์ฟรี กลิ่นเมนโทลิปตัส 13.8 ก.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿29.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8857122621390_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/Buy2Get1th1.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ริกลี่ย์ ดับเบิ้ลมินต์ ลูกอม กลิ่นเบอร์รี่มินต์ 12.4 ก</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿20.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850338003738_5.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/Buy2Get1th1.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>เดนทีน ไอซ์ หมากฝรั่ง กลิ่นไอซ์ซี ไลม์ แบบแผง 8 เม็ด</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿10.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851004803201_5.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/Buy2Get1th1.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>โดโซะ ข้าวหอมญี่ปุ่นอบกรอบ สวีทชิลลี่ 65 ก.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿24.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851004807209_2.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/Buy2Get1th1.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>โดโซะ ข้าวหอมญี่ปุ่นอบกรอบ รสคอร์นชีส 56 ก.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿24.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851004801184_2.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/Buy2Get1th1.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>โดโซะ ข้าวหอมญี่ปุ่นอบกรอบ รสกลมกล่อม 56 ก.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿24.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851004811183_2_3.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/Buy2Get1th1.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>โดโซะ ข้าวหอมญี่ปุ่นอบกรอบ รสซอสเซจ -จิ 56 ก.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿24.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8888336011653.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/Buy2Get1th1.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>คลีเน็กซ์ ทิชชู่เปียก สูตรแอนตี้แบคทีเรีย 50 แผ่น</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿99.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
export default ThirdTab;