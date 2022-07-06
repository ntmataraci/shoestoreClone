import { useContext, useEffect } from "react"
import  ContextApi  from "./context"
const Modal = ({readingState}) => {

    const contextData = useContext(ContextApi);


    return(
        <div style={{position:"fixed",top:"0",backgroundColor:"black",opacity:"0.7",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"99"}}>
 <div style={{maxWidth:"350px",textAlign:"center"}}>
<p style={{color:"orange",fontWeight:"bolder",fontSize:"1.5rem"}}>It's a duplicate site for study. If you like products please visit : https://foreverqueen.ru/en/</p>
{
<button  style={{borderRadius:"3rem",backgroundColor:"white",color:"red",padding:"3rem",fontSize:"2rem",cursor:"pointer"}} onClick={()=>readingState()}>ok</button>
}
</div>
        </div>
    )
}

export default Modal