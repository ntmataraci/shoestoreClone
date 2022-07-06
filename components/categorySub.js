import { useContext, useState } from "react"
import Link from "next/link"
import ContextApi from "./context"
import { useRouter } from "next/router"

const CategorySub = ({data,addedNote}) => {
    const URL="https://www.foreverqueen.ru/en"
const router=useRouter()
const [loaded,setLoaded]=useState(false)
// const addToCart=(x)=>{
// if (window!="undefined"){
//     const localData=window.localStorage.getItem("shoeStoreCart")
//     window.localStorage.setItem("shoeStoreCart",localData+","+x[0])
// }    
// }

const contextData=useContext(ContextApi)
const updateCart=(x)=>{
    contextData.selectedItems(x)
    addedNote()
}



    return(

        <div >
              <Link href={router.asPath+"/"+data[0].toLowerCase().replaceAll(" ","-")}><a>
            <div className="loadingAnim" style={{display:loaded?"none":"flex",textAlign:"center",width:"400px",height:"500px",alignItems:"center",justifyContent:"center",backgroundColor:"gray",color:"pink",opacity:"0.6"}}>Loading</div>
            <img src={URL+data[3][0].replace("small","medium")} style={{objectFit:"cover",display:loaded?"block":"none"}} onLoad={()=>setLoaded(true)}/>
            <div style={{textAlign:"center",fontSize:"1.1rem",marginBottom:"0.3rem",maxWidth:"300px"}} className="listItem">{data[0]}</div>
            <div style={{textAlign:"center",fontSize:"1.1rem",marginBottom:"0.3rem"}}>{data[1]+" $"}</div>
            </a>
            </Link>
            <div style={{borderRadius:"4rem",backgroundColor:"#8B008B",color:"white",padding:"0.3rem 0.4rem",textAlign:"center",cursor:"pointer"}} onClick={()=>updateCart(data)}>Add To Cart</div>
            </div>

    )
}

export default CategorySub