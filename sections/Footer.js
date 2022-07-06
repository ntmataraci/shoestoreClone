import Link from "next/link"
const Footer =( ) =>{
    return(
        <div style={{backgroundColor:"#6b5b95",minHeight:"200px",width:"100%",marginTop:"1rem",gap:"0.5rem",color:"white",display:"flex",justifyContent:"space-evenly",filter:"brightness(0.8)",fontSize:"0.8rem"}}>
<div ><h2 style={{color:"#f4e1d2"}}>CATEGORY</h2>
<ul>
    <li><Link href="/shoes">Shoes</Link></li>
    <li><Link href="/sandals">Sandals</Link></li>
    <li><Link href="/ankle-boots">Ankle Boots</Link></li>
    <li><Link href="/high-boots">High Boots</Link></li>
    <li><Link href="/boots">Boots</Link></li>
    <li><Link href="/clogs">Clogs</Link></li>
</ul>

</div>
<div ><h2 style={{color:"#f4e1d2"}}>BUYER</h2>
<ul>
    <li>Privacy Policy</li>
<li>Privacy policy</li>  
<li>Delivery</li>  
<li>Products return</li>  
<li>Distance selling contract</li>  
<li>Payment & Paid with iyzico</li>  
<li>Documentation</li>  
<li>Recommendations for care</li>  
<li>Warranty and service life</li>  
</ul>


</div>
<div style={{maxWidth:"150px"}} ><h2 style={{color:"#f4e1d2"}}>CONTACTS</h2>
<ul>
<li>Russian Federation</li>
<li>City Saint Petersburg</li>
<li>Moskovskiy Prospekt str., 3 TC Admiralty 3rd floor, shop Forever Queen</li>
<li>+7 (981) 147 13 11</li>
<li>info@foreverqueen.ru</li>
</ul>
</div>
        </div>
    )
}

export default Footer