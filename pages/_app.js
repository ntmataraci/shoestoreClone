import '../styles/globals.css'
import Head from 'next/head'
import jsonData from "../data.json"
import TopMenu from '../sections/TopMenu'
import Header from '../sections/Header'
import Footer from "../sections/Footer"
import {ContextApi} from '../components/context'
import Modal from '../components/modal'
import {useContext, useEffect, useState} from "react"
import FormModal from '../sections/FormModal'
import Note from '../sections/Note'
function MyApp({ Component, pageProps }) {
const URL="https://www.foreverqueen.ru/en"
const [readState,setReadState]=useState(false)
const [formModal,setFormModal]=useState(false)
const [addedNote,setAddedNote]=useState(false)
const readingState= () => {
  console.log("tuk")
  setReadState(true)
}


  return (
    <>
    <ContextApi>
  <Head>
  </Head>
 {
  !readState&&
  <Modal isReaded={readState} readingState={()=>readingState()}/>
} 
{
  formModal&&
  <FormModal  readingState={()=>setFormModal(false)} />
} 

{
  addedNote&&
  <Note readingState={()=>setAddedNote(false)} />
} 
  <TopMenu/>
  <Header/>
  <Component {...pageProps} data={jsonData} readingState={()=>setFormModal(true)} addedNote={()=>setAddedNote(true)} />
  <Footer/>
  </ContextApi>
  </>
  )
}

export default MyApp
