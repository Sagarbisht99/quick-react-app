import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {

  let ref = useRef(null)

  let data = [
  {
  content : "Lorem ipsum dolor, sit amet consectetur elit. Omnis.",
  download : ".9mb" , 
  close : true, 
  tag : {isOpen : true , text : "DownLoad Now" , bgColor : "green"}
   },
   {
    content : "Lorem ipsum dolor, sit amet consectetur elit. Omnis.",
    download : ".7mb" , 
    close : true, 
    tag : {isOpen : true , text : "DownLoad Now" , bgColor : "blue"}
     },
     {
      content : "Lorem ipsum dolor, sit amet consectetur elit. Omnis.",
      download : ".9mb" , 
      close : true, 
      tag : {isOpen : true , text : "DownLoad Now" , bgColor : "green"}
       }

  ]

  return (
    <div ref = {ref} className='fixed w-full z-[3] h-screen bg-sky-400/200 flex gap-10 p-10 flex-wrap'>
        {data.map((item , index) => 
             <Card reference={ref} data = {item}/>
        )}
    </div>
  )
}

export default Foreground