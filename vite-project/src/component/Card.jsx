import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosRemove } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data , reference}) {
  return (
    <motion.div drag whileDrag={{scale : 1.2}}  dragConstraints={reference} className='relative cursor-pointer flex-shrink w-[220px] h-[260px] text-white p-8 bg-zinc-900 rounded-[50px] overflow-hidden '>
         <FaRegFileAlt/>
         <p className='leading-none text-sm font-semibold mt-4'>{data.content}</p>
          <div className=' absolute bottom-0 left-0  w-full'>
            <div className='flex items-center justify-between px-8 mb-5'>
                <h5 className='text-sm'>{data.download}</h5>
                <span className='w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center'>
                   {data.close?<IoIosRemove/>:<MdOutlineFileDownload/>}
                </span>
            </div>
           {
            data.tag.isOpen &&  <div className={`w-full ${data.tag.bgColor === "blue" ? "bg-blue-600" : "bg-green-600" } py-3 flex items-center justify-center`}>
            <h5 className='text-sm font-semibold'>{data.tag.text}</h5>
             </div>
           }
          </div>
    </motion.div>
  )
}

export default Card