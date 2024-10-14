import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCoursel/HomeSectionCarousel'
import {mens_kurta} from "../../../data/mens_kurta"
import {mensShoesPage1} from "../../../data/sheos"
import {sareePage1} from "../../../data/sarees.js"

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className="space-y-20 py-10  flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCarousel data={mens_kurta}  section_name={"Men's Kurta"}/>
            <HomeSectionCarousel data={mensShoesPage1}  section_name={"Men's Sheos"}/>
            <HomeSectionCarousel data={sareePage1}  section_name={"Women's Saree"}/>
            <HomeSectionCarousel data={mens_kurta}  section_name={"Men's Kurta"}/>
           
          
        </div>
    </div>
  )
}

export default HomePage