import React from "react";
import Slider from "react-slick";
import './OnSale.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const OnSale = () => {
    const settings = {
        dots: false,
        button: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
    };
    return (
        <div style={{ width: '1570px', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>
            <div className="header">
                <h2>สินค้าลดราคา</h2>
                <div className="header-right">
                    <a href='https://www.bigc.co.th/shoponline/promotion/bestprice' className="link"><p className="text">ดูสินค้าทั้งหมด</p></a>
                    <img alt="arrow" src="https://www.bigc.co.th/_nuxt/img/arrow-right.ea4c886.svg" />
                </div>
            </div>
            <hr></hr>
            <Slider {...settings} className="content">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851989040301-tmf-5200-pi.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>โทมิ น้ำยาทำความสะอาดพื้น 1 กลิ่นสปริงซากุระ 5200 มล.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿178.00<span>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850357000954_5.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>มาบุญครอง ข้าวขาวหอมมะลิ 100% ถุงแดง 15 กก.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿595.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851004402602_2.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>เทสโต มันฝรั่งทอดกรอบแผ่นหยัก รสมันฝรั่งแท้ 11 ก. แพ็ค 12</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿48.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/4/9/4902430412988_14.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>แพนทีน แชมพู สูตรแฮร์ฟอล คอนโทรล 410 มล.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿129.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850002026162_5.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>โปร บลูพลัส ผงซักฟอก สูตรมาตรฐาน 4500 ก.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿179.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851932352536_3.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>คอมฟอร์ท เพียว น้ำยาปรับผ้านุ่ม สูตรเข้มข้นพิเศษ 1300 มล.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿149.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851753098613_5_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>มอคโคน่า กาแฟสำเร็จรูป 3 อิน 1 ทรีโอ เอสเปรสโซ่ 18 ก. แพ็ค 100</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿332.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850309207042_5.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ทิวลี่ ทวิน จัมโบ้ เวเฟอร์เคลือบช็อกโกแลต 35 ก. แพ็ค 12</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿48.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/3/8/38850188800076_5.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>โฟร์โมสต์ โอเมก้า 369 ผลิตภัณฑ์นมยูเอชที รสช็อกโกแลต 180 มล. แพ็ค 36</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿309.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/9/3/9334214038490_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/23222120191817161514131211109876543210icon-_80x80.png" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>วิสกัส อาหารแมว สำหรับแมวโต รสปลาทู 7 กก.</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿529.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
export default OnSale;