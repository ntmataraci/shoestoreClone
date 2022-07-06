import Head from 'next/head'
import Header from '../sections/Header'
import Slider from '../sections/Slider'
import { useEffect, useState } from 'react'
import SliderSection from '../sections/SliderSection'

export default function Home({data,addedNote}) {
const [videoEnded,setVideoEnded]=useState(false)
const [imgLoaded,SetImgLoaded]=useState(false)
const [imgSent,sendImgSent]=useState()
const [videoAnimation,setVideoAnimation]=useState(false)
const URL="https://www.foreverqueen.ru/en"
const images = [
  URL+"/assets/images/products/50432/medium/94e821eb-64f9-49fc-8809-bc7321e25754.jpg",
  URL+"/assets/images/products/50308/medium/538feb45-bf43-4761-875b-51f368a315e4.jpg",
  URL+"/assets/images/products/1132/medium/1692c49b-307c-4b3e-8500-d854e11c1d76.jpg",
  URL+"/assets/images/products/128/medium/20210225-120605.jpg",
]

let rndImg=[]


const callRandomPhoto= () => {
  for (let i=0;i<15;i++){
  rndImg=[...rndImg,data[Math.floor(Math.random()*(data.length-1))]]
}
sendImgSent(rndImg)
}
useEffect(()=>{
if(rndImg.length<15){
callRandomPhoto()
}},[])


const loaded= () => {
  SetImgLoaded(true)
}

const videoEnd=()=>{
setVideoAnimation(true)
  setTimeout(
    ()=>setVideoEnded(true),4000
  )
}


  return (
<>

<div  style={{width:"100%",maxHeight:"554px",height:"100%"}}>

{!videoEnded?
<div className={videoAnimation?"videoOpacity":"none"} style={{display:"flex",justifyContent:"center",maxHeight:"554px"}} >
<video autoPlay="autopaly" muted={true} poster='https://www.foreverqueen.ru/files/images/slider/slide1.jpg' onEnded={videoEnd}>
  <source src='https://www.foreverqueen.ru/files/video/vid1.mp4'  type="video/mp4"/>
</video>
</div>
:
<div style={{display:"flex",justifyContent:"center"}} >
<Slider gallery={images}  loaded={loaded}  data={data}/>
</div>
}
</div>
<div>
<h2 style={{textAlign:"center"}}>Trendings</h2>
 <SliderSection gallery={imgSent} addedNote={addedNote}/>  
 </div>

</>
  )
}
