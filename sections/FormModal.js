const FormModal = ({readingState}) => {
    return(
        <div style={{position:"fixed",top:"0",backgroundColor:"#373a47d8", width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"99"}}>
<div style={{color:"white",fontWeight:"bold",backdropFilter:"opacity(1)",backgroundColor:"silver"}}>
<form style={{display:"flex",flexDirection:"column",minWidth:"300px"}} >
Name Surname: <input type={"text"}></input>
Adress : <input type={"text"}></input>
City : <input type={"text"}></input>
Country : <input type={"text"}></input>
Notes: <input type={"text"}></input>
</form>
<div style={{display:"flex",justifyContent:"center"}}>
<button onClick={readingState} >Send</button></div>
<h3>Hey, this isn't real project. Please visit <p style={{textAlign:"center"}}><a href="https://foreverqueen.ru/en/" style={{color:"red"}}>https://foreverqueen.ru/en/</a></p></h3>
</div>

        </div>
    )
}

export default FormModal