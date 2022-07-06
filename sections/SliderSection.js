import React, { useEffect,useState,useContext } from 'react'
import  ContextApi  from '../components/context'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'
const URL="https://www.foreverqueen.ru/en"

  export default ({gallery,addedNote}) => {
    const[screenWidth,SetScreenWidth]=useState()
    const [options,SetOptions]=useState()
    const [sliderRef] = useKeenSlider(options)
useEffect(()=>{
 if (typeof window!="undefined"){
SetScreenWidth(window.innerWidth)
  }
},[])

   
useEffect(()=>{
  SetOptions({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: screenWidth>900?5:3,
      spacing: 15,
    }
  })
},[screenWidth])
 
    
const contextData=useContext(ContextApi)
const updateCart=(x)=>{
    contextData.selectedItems(x)
    addedNote()
}
  
    return (
      
      <div ref={sliderRef} className="keen-slide" style={{marginTop:"2rem",display:"flex"}}>
        {gallery&&gallery.map((src, idx) => (
            <div  key={idx}  className="keen-slider__slide" >
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",height:"100%"}}>
              <Link href={"trend/"+src[0].toLowerCase().replaceAll(" ","-")}><a>
              <img src={URL+src[3][0]} style={{maxWidth:"350px"}} /></a></Link>
              <h4 className='list-item' style={{fontSize:"1rem",fontWeight:"400",textAlign:"center",margin:"0"}}>{src[0]}</h4>
              <h4>{+src[1]+"$"}</h4>

              <div style={{borderRadius:"4rem",backgroundColor:"#8B008B",color:"white",padding:"0.3rem 0.4rem",textAlign:"center",cursor:"pointer"}}  onClick={()=>updateCart(src)} >Add to Cart</div>
              </div>
            </div>
         
        ))}
      </div>
    )
  }
  