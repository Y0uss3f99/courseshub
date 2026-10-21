import React from 'react'
import { Slider } from '../_Components/slider/slider'
import HomeDetail from '../_Components/HomeDetail/page'

const slides = [
  {
    image:  "https://aptechcantho.cusc.vn/Portals/1/userfiles/vmthuy/1000007647.jpg",
    title: "Learn to Code. Build Your Future.",
    description: "Master programming skills through practical courses, hands-on projects, and structured learning. Start your journey today and turn your ideas into real-world applications.",
  },
   {
    image: "https://drelmahdy.com/baccalaureate-1st-sec.png ",
    title: "Learn Today. Create Tomorrow.",
    description: "Build your programming skills with practical courses, interactive learning, and real-world projects designed to help you grow from a beginner into a confident developer.",
  }
  
]


export default function Home() {
  return (
<>
   <Slider slides={slides}/>
   <HomeDetail/>


</>
  )
}
