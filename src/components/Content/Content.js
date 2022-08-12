import React from 'react'
import Slider from './TopSlider/Slider'
import CategorySlider from './CategorySlider/CategorySlider'
import SuperDeals from './SuperDeals/SuperDeals'
import FlashDeals from './FlashDeals/FlashDeals'
import PromotionMain from './Promotion/PromotionMain'


const Content = () => {
  return (
    <div>
        <Slider />
        <CategorySlider />
        <SuperDeals/>
        <FlashDeals />
        <PromotionMain />
    </div>
  )
}

export default Content