import { useEffect, useState,useContext } from "react"
import { useRouter } from 'next/router'
import ContextApi  from "../../components/context"
const SubPage = ({data,addedNote}) => {

    const URL="https://www.foreverqueen.ru/en"
const router = useRouter()
const { id } =router.query
const [findIdx,setFindIdx]=useState()
const [selectedImg,setSelectedImg]=useState(0)
const [loaded,setLoaded]=useState(false)
useEffect(()=>{
    if(!router.isReady) return;
    const changedDat=id.replaceAll("-"," ")
    if(data){
    setFindIdx(data.findIndex(item=>changedDat.toLowerCase()==item[0].toLocaleLowerCase()))
    }
}, [router.isReady]);

const description=["Heel Height: ","Season: ", "Top Material: ", "Outsole Material: "]

const contextData=useContext(ContextApi)
const updateCart=(x)=>{
    console.log(findIdx)
    contextData.selectedItems(x)
    addedNote()
}
  
    return(
<>

{findIdx>=0&&data&&
<>
<h1>{data[findIdx][0]}</h1>
<div style={{display:"flex",gap:"1rem",maxWidth:"900px",justifyContent:"center",margin:"auto",flexWrap:"wrap"}}>
<div style={{display:"flex"}}>
{<>
    <img src={URL+data[findIdx][3][selectedImg].replaceAll("small","big")} style={{maxHeight:"650px",display:loaded?"block":"none"}} onLoad={()=>setLoaded(true)} />
<div style={{width:"438px",display:loaded?"none":"block",height:"650px"}}>Loading...</div>
</>
}

    </div>
    <div style={{display:"flex",justifyContent:"space-evenly",gap:"1rem",textAlign:"center"}}>
<ul >
    {data[findIdx][2].map((item,idx)=>{
        if(idx==4){
return
        }else{
            return(
                <li key={item} style={{display:"flex"}}>{description[idx]}<div className="listItem">{item}</div></li>
            )
        }
    }   
        )   
        }
        <div style={{maxWidth:"400px"}}>
<h2>Price: {data[findIdx][1]} $</h2>
<div style={{backgroundColor:"#B08FBB",borderRadius:"1rem",color:"white",justifyContent:"center",alignItems:"center",height:"1.5rem",width:"150px",textAlign:"center",fontWeight:"bold",alignSelf:"center",margin:"auto",cursor:"pointer"}} onClick={()=>updateCart(data[findIdx])}>Add To Chart</div>
<div style={{display:"flex", gap:"1rem",minWidth:"100px",maxHeight:"650px",flexWrap:"wrap",marginTop:"1rem",justifyContent:"center"}}>
{data[findIdx][3].map((item,idx)=>
    <img key={item} src={URL+item} onClick={()=>{setSelectedImg(idx);setLoaded(false)}}></img>
    )}
</div>
</div>
</ul>

</div>
    </div>


</>
}
</>
    )
}
export default SubPage