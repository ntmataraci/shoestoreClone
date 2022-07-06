import { useEffect, useState } from "react"

const Note = ({readingState})=>{
const [opacityAction,setOpacityAction]=useState(false)
useEffect(()=>{
    const timer=setTimeout(
()=>setOpacityAction(true),1000
    )
    return()=>clearTimeout(timer)
},[])


useEffect(()=>{
    if(opacityAction){
    const timerOff=setTimeout(()=>
        {
    setOpacityAction(false)
    readingState()
        }
    ,500)
    return()=>clearTimeout(timerOff)
    }
},[opacityAction])


    return(
        <div className={opacityAction?"opacityAction":""} style={{backgroundColor:"red",color:"white",width:"150px",padding:"0.5rem",position:"fixed",top:"0",right:"10px",borderRadius:"2rem",textAlign:"center",fontSize:"2rem"}}>
            Added!
        </div>
    )
}

export default Note