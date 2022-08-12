import React from 'react'
import Slider from "react-slick";
import './FlasDeals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Timer from './Timer';

const FlashDeals = () => {
    const settings = {
        dots: true,
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
            <div className="header">
                <div className="header-left">
                    <img alt='flash-img' src='https://www.bigc.co.th/_nuxt/img/flash.1592a3a.svg' />
                    <h2>Flash Deal</h2>
                    <Timer />
                </div>
                <div className="header-right">
                    <a href='https://www.bigc.co.th/dailydeal' className='link'><p className='text'>ดูสินค้าทั้งหมด</p></a>
                    <img alt="arrow" src="https://www.bigc.co.th/_nuxt/img/arrow-right.ea4c886.svg" />
                </div>
            </div>
            <Slider {...settings} className="content">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8854336038204_1.jpg" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>คาชิวา เตาย่างบาร์บีคิว 1300 วัตต์ รุ่น KW308</p>
                            <p>฿499.00<span>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/6/9/6921732868147.jpg" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ทีซีแอล 4K UHD แอนดรอยด์ทีวี รุ่น 50J7000A ขนาด 50 นิ้ว</p>
                            <p>฿11,990.00<span>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/6/9/6945878313897_1_1.jpg" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>โตชิบา เครื่องซักผ้า แบบ 2 ถัง รุ่น VH-H85MT ขนาด 7.5 กก.</p>
                            <p> ฿3,790.00<span>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/6/9/6972848675341.jpg" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>โตชิบา เครื่องซักผ้าฝาบน รุ่น AW-UK1100HT ขนาด 10 กก.</p>
                            <p>฿7,990.00<span>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/7/8710103752608.jpg" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ฟิลิปส์ เครื่องหนีบผม รุ่น HP8321</p>
                            <p>฿890.00<span>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8859474200858.jpg" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>อะโคนาติก แอลอีดี ดิจิตอลทีวี HD Ready รุ่น 32HD514AN ขนาด 32 นิ้ว สีดำ</p>
                            <p>฿3,890.00<span>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851456105021_1.jpg" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ชาร์ป หม้อหุงข้าวอุ่นทิพย์ รุ่น KS19E ขนาด 1.8 ล.</p>
                            <p>฿849.00<span>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851456107049.jpg" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ชาร์ป กระติกน้ำร้อน รุ่น KP-B16S ขนาด 1.6 ลิตร คละแบบ</p>
                            <p>฿779.00<span>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8859426091480_2.jpg" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ราวตากผ้า ทรงเอ คละสี ขนาด 41 x 88 x 130 ซม</p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850519328681.jpg" />
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>มิตซูบิชิ ตู้เย็น 2 ประตู รุ่น MR-FVB22S ขนาด 7.3 คิว คละสี</p>
                            <p>฿6,990.00<span>/ชิ้น</span> </p>
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

export default FlashDeals