import React from "react";
import Slider from "react-slick";
import './Promotion.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FifthTab = () => {
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
                    <a href='https://www.bigc.co.th/dailydeal' className='link'><p className='text'>ดูสินค้าทั้งหมด</p></a>
                    <img alt="arrow" src="https://www.bigc.co.th/_nuxt/img/arrow-right.ea4c886.svg" />
                </div>
            </div>
            <Slider {...settings} className="content">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img">
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850124003362_3.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/92919089888786858483828180797877767574737271706968676665646362616059585756555453525150494847464544434241403938373635343332313029282726252423222120191817161514131211109876543210Buy2_CheaperTH.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>เนสกาแฟ กาแฟกระป๋องสำเร็จรูป เอสเปรสโซ โรสต์ 180 มล. แพ็ค 6</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿79.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8852001110019_6.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/92919089888786858483828180797877767574737271706968676665646362616059585756555453525150494847464544434241403938373635343332313029282726252423222120191817161514131211109876543210Buy2_CheaperTH.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>แบรนด์ ซุปไก่สกัด สูตรต้นตำรับ 42 มล. แพ็ค 12 ขวด</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿444.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8852001210016_5.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/92919089888786858483828180797877767574737271706968676665646362616059585756555453525150494847464544434241403938373635343332313029282726252423222120191817161514131211109876543210Buy2_CheaperTH.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>แบรนด์ ซุปไก่สกัด สูตรต้นตำรับ 70 มล. แพ็ค 12</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿680.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8851028140054_4.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/92919089888786858483828180797877767574737271706968676665646362616059585756555453525150494847464544434241403938373635343332313029282726252423222120191817161514131211109876543210Buy2_CheaperTH.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ไวตามิลค์ นมถั่วเหลือง ขนาด 300 มล. แพ็ค 6</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿89.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8853002302045_1_2_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/92919089888786858483828180797877767574737271706968676665646362616059585756555453525150494847464544434241403938373635343332313029282726252423222120191817161514131211109876543210Buy2_CheaperTH.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ดัชมิลล์ 4 อิน 1 ไมโคร แอคทีฟ โยเกิร์ตพร้อมดื่มยูเอชที รสมิกซ์เบอร์รี่ 180 มล. แพ็ค 4</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿37.00 <span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/92919089888786858483828180797877767574737271706968676665646362616059585756555453525150494847464544434241403938373635343332313029282726252423222120191817161514131211109876543210Buy2_CheaperTH.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ดัชมิลล์ ดีน่า นมถั่วเหลือง งาดำ 2 เท่าน้ำตาลน้อย 180 มล. แพ็ค 4</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿37.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/92919089888786858483828180797877767574737271706968676665646362616059585756555453525150494847464544434241403938373635343332313029282726252423222120191817161514131211109876543210Buy2_CheaperTH.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ดัชมิลล์ ดีน่า นมถั่วเหลือง งาดำ 180 มิลลิลิตร แพ็ค 4</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿37.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8853002080103_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/92919089888786858483828180797877767574737271706968676665646362616059585756555453525150494847464544434241403938373635343332313029282726252423222120191817161514131211109876543210Buy2_CheaperTH.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ดัชมิลล์ ดีน่า น้ำนมถั่วเหลืองยูเอชที สูตรผสมงาดำ 2 เท่า 230 มล. แพ็ค 3</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿36.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8850124025227_3.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/92919089888786858483828180797877767574737271706968676665646362616059585756555453525150494847464544434241403938373635343332313029282726252423222120191817161514131211109876543210Buy2_CheaperTH.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>ไมโล แอคทิฟ-โก นมยูเอชที รสช็อกโกแลตมอลต์ 180 มล. แพ็ค 4</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿45.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
                            <img alt="product-img" src="https://static.bigc.co.th/media/catalog/product/cache/2/small_image/200x/17f82f742ffe127f42dca9de82fb58b1/8/8/8852001128519_8_1.jpg" />
                            <img alt="logo" className="logo" src="https://static.bigc.co.th/media/amlabel/92919089888786858483828180797877767574737271706968676665646362616059585756555453525150494847464544434241403938373635343332313029282726252423222120191817161514131211109876543210Buy2_CheaperTH.png"/>
                        </div>
                        <div className="card-details" style={{ width: '200px' }}>
                            <p>แบรนด์ เบอร์รี่พลัส บ็อกบิลเบอร์รี่ 42 มล. แพ็ค 12</p>
                            <p style={{color :'red' ,fontSize : '25px', fontWeight : 'bold'}}>฿420.00<span style={{color : 'black', fontSize : '16px'}}>/ชิ้น</span> </p>
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
export default FifthTab;