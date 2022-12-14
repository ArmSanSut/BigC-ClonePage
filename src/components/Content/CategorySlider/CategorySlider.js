import React from 'react'
import './CategorySlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/modules/scrollbar/scrollbar.min.css';

const CategorySlider = () => {
    return (
        <Swiper
            slidesPerView={6}
            spaceBetween={0}
            initialSlide={3}
            centeredSlides={true}
        >
            <div className='container'>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/bannerads/images/bco-cate-img-brochure.jpg' />
                        <div className='category-text'>
                            <span>โปรโมชั่นโบรชัวร์</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/wysiwyg/uploadimage/icon-mix-coupon.png' />
                        <div className='category-text'>
                            <span>คูปองส่วนลดพิเศษ</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/bannerads/images/bco-cate-img-bigpack.jpg' />
                        <div className='category-text'>
                            <span>สินค้าเพื่อผู้ประกอบการ</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/wysiwyg/iconcate/icon-Elderly-02_5.png' />
                        <div className='category-text'>
                            <span>ผลิตภัณฑ์สำหรับผู้สูงอายุ</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/wysiwyg/uploadimage/SIS_Parcel.png' />
                        <div className='category-text'>
                            <span>สินค้าจัดส่งพัสดุ</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/bannerads/images/bco-cate-img-covid19.jpg' />
                        <div className='category-text'>
                            <span>พร้อมรับมือโควิด-19</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/bannerads/images/bco-cate-img-ff.jpg' />
                        <div className='category-text'>
                            <span>อาหารสด</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/bannerads/images/bco-cate-img-hba.jpg' />
                        <div className='category-text'>
                            <span>สุขภาพและความงาม</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/bannerads/images/bco-cate-img-only-bigc.jpg' />
                        <div className='category-text'>
                            <span>สินค้าเฉพาะบิ๊กซี</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/bannerads/images/bco-cate-img-electronics.jpg' />
                        <div className='category-text'>
                            <span>เครื่องใช้ไฟฟ้า/ อุปกรณ์อิเล็กทรอนิกส์</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='	https://static.bigc.co.th/media/bannerads/images/bco-cate-img-mom-and-baby.jpg' />
                        <div className='category-text'>
                            <span>แม่และเด็ก</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/wysiwyg/iconcate/icon-Pet-Shop.png' />
                        <div className='category-text'>
                            <span>มุมสัตว์เลี้ยง</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='	https://static.bigc.co.th/media/bannerads/images/bco-cate-img-besico.jpg' />
                        <div className='category-text'>
                            <span>สินค้าแบรนด์เบสิโค</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/bannerads/images/bco-cate-img-bev-and-snack.jpg' />
                        <div className='category-text'>
                            <span>เครื่องดื่ม/ ขนมขบเคี้ยว</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/bannerads/images/bco-cate-img-df.jpg' />
                        <div className='category-text'>
                            <span>อาหารแห้ง/ เครื่องปรุง</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='	https://static.bigc.co.th/media/bannerads/images/bco-cate-img-household.jpg' />
                        <div className='category-text'>
                            <span>ของใช้ในครัวเรือน/ สัตว์เลี้ยง</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='	https://static.bigc.co.th/media/bannerads/images/bco-cate-img-home-lifestyle.jpg' />
                        <div className='category-text'>
                            <span>บ้านและไลฟ์สไตล์</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <img className='product-img' alt='cat-img' src='https://static.bigc.co.th/media/bannerads/images/bco-cate-img-import.jpg' />
                        <div className='category-text'>
                            <span>สินค้านำเข้า</span>
                        </div>
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
    )
}

export default CategorySlider