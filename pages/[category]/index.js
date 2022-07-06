import { category } from "../../category"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import CategorySub from "../../components/categorySub"
const Category=({data,addedNote})=>{
    const [statedData,setStatedData]=useState()
    const [lengthState,setLengthState]=useState([])
    const [page,setPage]=useState(1)
    const router = useRouter()
    const path =router.asPath.substring(1)
   const filteredData=category.find(item=>item[0]==path)
    const perPage=20


let dataList=[]
const loopFor=(start,end)=>{
    for(let i=start;i<end;i++){
dataList=[...dataList,data[i]]
    }
    setStatedData(dataList)
}

useEffect(()=>{
    filteredData&&
loopFor(filteredData[1],filteredData[2])
},[path])

let lengthDataArray=[]
const lengthOfData= ()=> {if(statedData) {
for (let i=0;i<Math.ceil(statedData.length/perPage);i++){
lengthDataArray=[...lengthDataArray,i]
}
setLengthState(lengthDataArray)
}
}

useEffect(()=>{
    lengthOfData()
},[page,statedData])

    return(
<>
<div style={{display:"flex",flexWrap:"wrap",gap:"2rem",justifyContent:"space-between",margin:"auto",justifyContent:"center"}}>
{statedData&&statedData.map((item,idx)=>
<div key={item[0]+idx}>

    {statedData[idx+2]&&Math.floor(idx/perPage)==page-1&&
    <CategorySub data={item} addedNote={addedNote}  />

    }

  </div> 
    )}
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",width:"100%",gap:"1rem",marginBottom:"3rem",color:"red",cursor:"pointer",fontWeight:"bold"}}>
    {lengthState&&lengthState.map(item=><div key={item} onClick={()=>setPage(item+1)}>{item+1}</div>)
    }</div>
    </div>
</>
    )
}

export default Category


{/* <div style={{display:"flex",flexWrap:"wrap",width:"100%",flexDirection:idx%2==0?"row-reverse":"row"}}>
    {statedData[idx+2]&&Math.floor(idx/10)==page-1&&
    <>
    <div style={{width:"60%"}}><img src={URL+statedData[idx*3][3][0]} style={{height:"200px",width:"400px",objectFit:"cover"}}/></div>
    <div style={{width:"40%"}}><div><img src={URL+statedData[idx*3+1][3][0]}/></div><div><img src={URL+statedData[idx*3+2][3][0]}/></div></div>
    </>
    }
    </div>  */}
