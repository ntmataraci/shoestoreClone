import { useContext, useEffect, useState } from "react";
import ContextProvider from "../components/context";
const Cart = ({isReaded,readingState}) => {
  const contextData = useContext(ContextProvider);
  const [stateLastList, setStateLastList] = useState();
  const [amountState, setAmountState] = useState();

  

  useEffect(() => {
    allAmount()
    setStateLastList(contextData.readingItems);
  }, [ contextData.readingItems,amountState]);

  const columnStyles = {
    backgroundColor: "white",
fontSize:"1.5rem",
    display: "flex",
    alignItems: "center",
    width: "100%",
    minWidth:"150px",
    height:"min-content",
    flexDirection:"column",
    gap:"1rem"
  };

const changeQty=(x,y)=>{
    console.log(x)
    if (y==1){
 contextData.insertQty(x)
    }else if(y==-1){
        contextData.removeQty(x)
    }else{
        contextData.deleteData(x)
 setAmountState("0")
    }
}

 const allAmount = () => {
    let qtyTemp=0
    stateLastList&&
    stateLastList.map(item=>{
     qtyTemp+= item["arr"][1]*item["qty"]
  
    })
    setAmountState(Math.floor(qtyTemp*100)/100)
 } 


  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "auto",borderRadius:"30px",backgroundColor:"white",width:"100%",flexWrap:"wrap",maxWidth:"1200px" }}
      >
        {stateLastList &&
          stateLastList.map((item, idx) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                borderBottom:idx<stateLastList.length-1?"1px solid black":"none",
                flexWrap:"wrap"
              }}
              key={idx}
            >
              <div
                style={{
           
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
  
                }}
              >
                <h3 style={{padding:"1rem",textAlign:"center",margin:"auto"}} >{item["id"]}</h3>
                <img
                  src={"https://www.foreverqueen.ru/en" + item["arr"][3][0]}
                  style={{ margin: "auto" }}
                ></img>
              </div>
              <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{...columnStyles}}>
                 <div >Price</div>
                  <div>{Math.floor(item["arr"][1]*100)/100} $</div>
                </div>
                <div style={columnStyles}>
                    <div>Qty:</div>
                  <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
<div style={{display:"flex",gap:"1rem"}}>
                  <div style={{backgroundColor:"silver",textAlign:"center",cursor:"pointer",width:"3rem",fontSize:"1.2rem",padding:"0.5rem"}} onClick={()=>changeQty(item,1)}>+</div>
                  {item["qty"]}
                  <div style={{backgroundColor:"silver",textAlign:"center",cursor:"pointer",width:"3rem",fontSize:"1.2rem",padding:"0.5rem"}}  onClick={()=>changeQty(item,-1)}>-</div>
                  </div>
                  </div>

                </div>
                <div style={columnStyles}>
                    <div>Total Price:</div>
                  <div> {Math.floor(item["qty"] * item["arr"][1]*100)/100} $</div>
                </div>
                </div>
                <div style={{marginTop:"1rem"}}>
                <div  style={{width:"65%",margin:"auto",borderRadius:"4rem",backgroundColor:"red",color:"white",padding:"0.3rem 0.4rem",textAlign:"center",cursor:"pointer",fontWeight:"bold"}} onClick={()=>changeQty(item,-2)}>Delete</div>
             </div>
              </div>
            </div>
          ))}
      </div>
      <div
        style={{
          textAlign: "right",
          fontSize:"1.3rem",
          display:"flex",
          justifyContent:"center"
        }}
      >
        Amount : {amountState}  $
      </div>
      <div style={{borderRadius:"3rem",backgroundColor:"White",maxWidth:"350px",padding:"1rem",display:"flex",justifyContent:"center",margin:"auto"}} onClick={readingState}>Proceed to checkout</div>
    </>
  );
};

export default Cart;
