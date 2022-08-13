import React from 'react'
import Slider from './TopSlider/Slider'
import CategorySlider from './CategorySlider/CategorySlider'
import SuperDeals from './SuperDeals/SuperDeals'
import FlashDeals from './FlashDeals/FlashDeals'
import PromotionMain from './Promotion/PromotionMain'
import HotBrand from './HotBrand/HotBrand'
import Advertise from './Advertise/Advertise'
import PriceShock from './PriceShoock/PriceShock'

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

    </div>
  )
}

export default Content