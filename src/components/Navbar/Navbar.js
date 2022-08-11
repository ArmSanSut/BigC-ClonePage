import React from 'react'
import './Navbar.css'
import { IoPersonCircle } from 'react-icons/io5'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='top-nav'>
                <div className='header'>
                    <div className='logo'>
                        <img src='	https://www.bigc.co.th/_nuxt/img/Logo-BigC-2021.1900273.png' />
                    </div>
                    <div className='form-keywords'>
                        <form className='form-search'>
                            <input type='search' placeholder='ค้นหาสินค้า, หมวดหมู่ หรือแบรนด์' />
                        </form>
                        <ul className='keywords-list'>
                            <li>คำค้นหาล่าสุด :</li>
                            <li>น้ำดื่ม</li>
                            <li>ทีวี</li>
                            <li>พัดลม</li>
                            <li>ตู้เย็น</li>
                            <li>ข้าวสาร</li>
                            <li>แชมพู</li>
                            <li>ผ้าอ้อม</li>
                            <li>น้ำ</li>
                            <li>น้ำมันพืช</li>
                            <li>เครื่องซักผ้า</li>
                        </ul>

                    </div>
                    <div className='language'>
                        <a href='#' className='eng'>EN</a>
                        <a href='#' className='thai'>TH</a>
                    </div>
                    <div className='login'>
                        <p className='icon'><IoPersonCircle fontSize='40px' /></p>
                        <p>เข้าสู่ระบบ   |</p>
                        <p className='register'>สมัครสมาชิก</p>
                    </div>
                    <div className='cart'>
                        <div className='badge'>
                            <span>0</span>
                        </div>
                        <img src='	https://www.bigc.co.th/_nuxt/img/cart.9714e87.svg' />
                        <p>ยอดรวม</p>
                        <p>฿0.00</p>
                    </div>
                </div>
            </div>
            <div className='middle-nav'>
                <p>ระบุสถานที่จัดส่ง หรือรับสินค้า</p>
                <div className='pick-up-search'>
                    <img src='https://www.bigc.co.th/_nuxt/img/map.7a93041.svg' />
                    <input type='search' placeholder='เลือกรับสินค้าที่สาขา หรือจัดส่งถึงบ้าน' />
                </div>
                <p className='p-bottom'>* สินค้าอาจมีการเปลี่ยนแปลงขึ้นอยู่กับสถานที่จัดส่ง</p>
            </div>
            <div className='bottom-nav'>
                <div className='select'>
                    <p>สินค้าทั้งหมด</p>
                    <img src='	https://www.bigc.co.th/_nuxt/img/arrow-down.48c912f.svg' />
                </div>
                <div className='select'>
                    <p>สินค้าสั่งซื้อประจำ</p>
                </div>
                <div className='select'>
                    <p>โปรโมชั่น</p>
                    <img src='	https://www.bigc.co.th/_nuxt/img/arrow-down.48c912f.svg' />
                </div>
                <div className='select'>
                    <p>สิทธิพิเศษ</p>
                    <img src='	https://www.bigc.co.th/_nuxt/img/arrow-down.48c912f.svg' />
                </div>
                <div className='select'>
                    <p>บริการ</p>
                    <img src='	https://www.bigc.co.th/_nuxt/img/arrow-down.48c912f.svg' />
                </div>
                <div className='select'>
                    <p>วิธีการสั่งซื้อ</p>
                    <img src='	https://www.bigc.co.th/_nuxt/img/arrow-down.48c912f.svg' />
                </div>
                <div className='select'>
                    <p>บล็อก</p>
                    <img src='	https://www.bigc.co.th/_nuxt/img/arrow-down.48c912f.svg' />
                </div>
            </div>

        </div>
    )
}

export default Navbar