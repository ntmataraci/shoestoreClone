import { slide as Menu } from 'react-burger-menu'
import {useState} from "react"
import Link from 'next/link'
const TopMenu = () => {
    const URL="https://www.foreverqueen.ru/en"

    const [isOpen, setOpen] = useState(false)
const container={
    display:"flex",flexDirection:"column",alignItems:"center"
}

const imageStyle={
    height:"150px",width:"150px",filter:"brightness(0.9)",borderRadius:"50%",marginBottom:"1rem"
}

const images=[
    {
        img:URL+"/assets/images/products/50432/small/94e821eb-64f9-49fc-8809-bc7321e25754.jpg",
        text:"Shoes",
        href:"../shoes"
    },
    {
        img:URL+"/assets/images/products/871/small/20210819-163043.jpg",
        text:"Sandals",
        href:"../sandals"
    },
    {
        img:URL+"/assets/images/products/1086/small/20201112-173147.jpg",
        text:"Ankle Boots",
        href:"../ankle-boots"
    },
    {
        img:URL+"/assets/images/products/1143/small/8776.jpg",
        text:"High Boots",
        href:"../high-boots"
    },
    {
        img:URL+"/assets/images/products/134/small/20210210-120142.jpg",
        text:"Boots",
        href:"../boots"
    },
    {
        img:URL+"/assets/images/products/626/small/20210614-131710.jpg",
        text:"Clogs",
        href:"../clogs"
    }
]

const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

    return(
<>

      <Menu right   isOpen={isOpen} onOpen={handleIsOpen}  onClose={handleIsOpen} >

        <Link  href="/"><a id="home" className="menu-item" style={{...container,fontSize:"2rem"}} onClick={()=>closeSideBar()}>Home
        </a></Link>
        {images.map(item=>
        <Link href={item.href}><a  className="menu-item" key={item.href} onClick={()=>closeSideBar()}><div style={container}>{item.text}
        <img src={item.img} style={imageStyle}></img></div>
        </a></Link>
        )}
        </Menu>
    
</>
    )
}

export default TopMenu