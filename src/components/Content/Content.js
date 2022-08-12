import React from 'react'
import Slider from './TopSlider/Slider'
import CategorySlider from './CategorySlider/CategorySlider'
import SuperDeals from './SuperDeals/SuperDeals'
import FlashDeals from './FlashDeals/FlashDeals'
const Content = () => {
  return (
    <div>
        <Slider />
        <CategorySlider />
        <SuperDeals/>
        <FlashDeals />
    </div>
  )
}

export default Content