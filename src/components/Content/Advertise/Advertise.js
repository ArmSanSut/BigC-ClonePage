import React from 'react'
import './Advertise.css'

const Advertise = () => {
    return (
        <div style={{ width: '1570px', marginLeft: 'auto', marginRight: 'auto',display:'flex', justifyContent: 'space-between' }} >
            <div className='right-container'>
                <img alt='img' src='https://static.bigc.co.th/media/bannerads/images/fix-banner-bro11-deenee-20220728.jpg' />
                <img alt='img' src='https://static.bigc.co.th/media/bannerads/images/fix-banner-bro11-utt-20220728.jpg' />
                <img alt='img' src='https://static.bigc.co.th/media/bannerads/images/27072022-fixbanner-hba.jpg' />
                <img alt='img' src='https://static.bigc.co.th/media/bannerads/images/27072022-fixbanner-pet.jpg' />
            </div>
            <div className='left-container'>
                <img alt='img' src='https://static.bigc.co.th/media/bannerads/images/fix-banner-bro11-chat-20220728.jpg' />
                <img alt='img' src='https://static.bigc.co.th/media/bannerads/images/27072022-fixbanner-1.jpg' />
                <img alt='img' src='https://static.bigc.co.th/media/bannerads/images/27072022-fixbanner-pack.jpg' />
                <img alt='img' src='https://static.bigc.co.th/media/bannerads/images/27072022-fixbanner-besico.jpg' />
            </div>
        </div>
    )
}

export default Advertise