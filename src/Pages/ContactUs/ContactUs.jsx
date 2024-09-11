import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ContactUs() {
const navigate = useNavigate()


const handleNavigation=()=>{
navigate("/about")
}


  return (
    <>ContactUs
    <br/>
    
    <button className='btn btn-primary' onClick={()=>{handleNavigation()}}> go to About us</button>
    
    </>
  )
}
