import React from 'react'
import Slider from './TopSlider/Slider'
import CategorySlider from './CategorySlider/CategorySlider'
import SuperDeals from './SuperDeals/SuperDeals'
import FlashDeals from './FlashDeals/FlashDeals'
import PromotionMain from './Promotion/PromotionMain'
import HotBrand from './HotBrand/HotBrand'
import Advertise from './Advertise/Advertise'
import PriceShock from './PriceShoock/PriceShock'
import OnSale from './OnSale/OnSale'
import AdvertiseFooter from './AdvertiseFooter/AdvertiseFooter'

const Content = () => {
  return (
    <div>
        <Slider />
        <CategorySlider />
        <SuperDeals/>
        <FlashDeals />
        <PromotionMain />
        <HotBrand />
        <Advertise />
        <PriceShock />
        <OnSale />
        <AdvertiseFooter />

    </div>
  )
}

export default Content