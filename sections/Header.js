import { useContext, useEffect, useState } from "react"
import  ContextApi  from "../components/context"
import Link from 'next/link'

const Header= ({arrList}) => {
const contextData=useContext(ContextApi)


useEffect(()=>{
},[contextData.readingItems])

    return (
        <div style={{color:"#CA498C",textShadow:"4px 4px 4px rgba(0, 0, 0, 0.5)",fontFamily:"Righteous",fontSize:"30px",lineHeight:"37px",display:"flex",justifyContent:"space-between"}}>
    <div style={{display:"flex",cursor:"pointer"}}> <Link href="/"><img src="../logo.png" style={{width:"100px"}}></img></Link>
    <Link href="/"><p>forever queen replica</p></Link></div> 
<div style={{alignSelf:"flex-end",marginRight:"3rem"}}><Link href="../cart"><a>My Cart: {contextData&&contextData.readingItems.length}</a></Link></div>
        </div>
    )
}

export default Header