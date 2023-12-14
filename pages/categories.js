import Header from '@/components/Header'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Categories = () => {
  const [categories,setCategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, [])
  function fetchCategories() {
    axios.get('/api/categories').then(result => {
      setCategories(result.data);
    });
  }
  console.log(categories);
  return (
    <div>
      <Header />
      <>
      <div style={{display:"flex",gap:"20px",justifyContent:"center",height:"800px"}}>
        {
          categories.length >0 && categories.map((item,index)=>
          <>
            <Link href={'/'}>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700" style={{height:"400px",width:"300px"}}>
            <a href="#">
                <img class="rounded-t-lg" src={item.images} alt="" />
            </a>
               <a href="#" style={{display:"flex",alignItems:"end",justifyContent:"center"}}>
                   <h5 class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{item.name}</h5>
               </a>
            
        </div>
            </Link>
          </>
          )
        }
      </div>
      </>
    </div>
  )
}

export default Categories