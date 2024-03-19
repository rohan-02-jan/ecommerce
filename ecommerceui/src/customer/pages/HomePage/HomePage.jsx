import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/Men/mens_kurta'

const HomePage = () => {
  return (
    <div>HomePage
        <MainCarousel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          HomeSectionCarousel
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
          <HomeSectionCarousel data={mens_kurta} />
          <HomeSectionCarousel data={mens_kurta} />
          
        </div>

    </div>
  )
}

export default HomePage;
