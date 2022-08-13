import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='top-footer'>
                <div className='top-img'>
                    <img alt='img' src='https://static.bigc.co.th/media/bannerads/images/th-01.png' />
                    <img alt='img' src='https://static.bigc.co.th/media/bannerads/images/th-02.png' />
                    <img alt='img' src='https://static.bigc.co.th/media/bannerads/images/th-03.png' />
                    <img alt='img' src='https://static.bigc.co.th/media/bannerads/images/th-04.png' />
                    <img alt='img' src='https://static.bigc.co.th/media/bannerads/images/th-05.png' />
                </div>
                <hr className='bottom-line'></hr>
            </div>
            <div className='bottom-footer'>
                <div className='footer-details'>
                    <div className='top-detail'>
                        <p>บิ๊กซีช้อปปิ้งออนไลน์</p>
                    </div>
                    <div className='detail-lists'>
                        <a href='#'>
                            <p className='list-item'>เกี่ยวกับบิ๊กซีช้อปปิ้งออนไลน์</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>การสั่งซื้อสินค้า</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>การชำระเงิน</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>การสะสมคะแนน</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>การแลกคะแนนเป็นส่วนลด</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>การใช้รหัสส่วนลดพิเศษ</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>การรับสินค้าที่บิ๊กซี</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>บริการจัดส่งถึงบ้าน</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>บริการจัดส่งพัสดุทั่วไทย</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>การสั่งซื้อสินค้า BIG POWER</p>
                        </a>
                    </div>
                </div>
                <div className='footer-details'>
                    <div className='top-detail'>
                        <p>บริการลูกค้า</p>
                    </div>
                    <div className='detail-lists'>
                        <a href='#'>
                            <p className='list-item'>คำถามที่พบบ่อย</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>ตรวจสอบพื้นที่จัดส่ง</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>การตรวจสอบสถานะการจัดส่ง</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>การยกเลิกหรือเปลี่ยนแปลงการจัดส่ง</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>ข้อตกลงและเงื่อนไขการซื้อสินค้า</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>นโยบายความเป็นส่วนตัว</p>
                        </a>
                    </div>
                </div>
                <div className='footer-details'>
                    <div className='top-detail'>
                        <p>ติดต่อเรา</p>
                    </div>
                    <div className='detail-lists'>
                        <div className='address'>
                            <a href='#'>
                                <p className='list-item'>บิ๊กซีช้อปปิ้งออนไลน์ เวลา 9:00 - 22:00 น.</p>
                                <p>โทร. 1756 กด 1</p>
                                <p>จัดส่งทุกวันไม่เว้นวันหยุด</p>
                                <p>เวลาจัดส่งสินค้า 10.00 - 20.00 น.</p>
                            </a>
                        </div>
                        <a href='#'>
                            <p className='list-item'>เกี่ยวกับบิ๊กซี</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>ร่วมงานกับเรา</p>
                        </a>
                        <a href='#'>
                            <p className='list-item'>สนใจพื้นที่เช่าในสาขา</p>
                        </a>
                    </div>
                </div>
                <div className='footer-details'>
                    <div className='top-detail'>
                        <p>รับข่าวสาร</p>
                    </div>
                    <div className='detail-lists'>
                        <p>สมัครสมาชิกรับข่าวสาร</p>
                        <div className='news'>
                            <input type='text' placeholder='ลงทะเบียนรับข่าวสาร'/>
                            <p>สมัครสมาชิก</p>
                        </div>
                        <p>เมื่อคลิก ”สมัครรับข่าวสาร” ถือว่าท่านได้ให้ความยินยอมโดยชัดแจ้งที่จะรับโปรโมชั่นและข่าวสารจากบริษัทท่านสามารถศึกษาเงื่อนไขและข้อกำหนด และนโยบายความเป็นส่วนตัวได้ที่ <a href='#'>เงื่อนไขและข้อกำหนด นโยบายความเป็นส่วนตัว</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer