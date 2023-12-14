import React,{useEffect,useState} from 'react'
import {ApiService2} from "./Apiproduct"
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import Link from 'next/link';
import CustomImage from './images';

const ApiCrud2 = () => {
    const [Api1,setData1] = useState([])
    
    useEffect(()=>{
        const data = ApiService2.fetching('category').then(data=>setData1(data))
    },[])
    
 
   return(
    <>
   {Api1?.data?.map((item,index)=>

    <div style={{width:"400px",height:"300px",marginBottom:"85px"}} key={item._id}>
    <Link
      href={`/Image_Pages/${item._id}`}
      className='h-96 flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-200 border'
    >
      <div className='relative max-h-80 flex-1' >
        <CustomImage fill  Img={item?.image} Index={index} />
      </div>

     
      <div className='font-semibold flex items-center justify-between mt-4 mb-1'>
        {/* <p className='w-44 truncate'>as</p> */}
        <p>{item.title}</p>
      </div>
      
    </Link>
  </div>
   )}
    </>
   )
}

export default ApiCrud2
