import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Book = () => {
  const [products,setProducts] = useState([]);
  useEffect(() => {
    axios.get('/api/books').then(response => {
      setProducts(response.data);
    });
  }, []);
  console.log(products);
  return (
    <div style={{height:"800px"}}>
      <h1 style={{fontSize:"30px"}}>Book</h1>
        <div style={{height:"700px",overflowX:"auto",border:"1px solid"}}>
          {products.map((item,index)=>
          <>
          <div style={{display:"flex",justifyContent:"center"}}>
             <img  src={item.images}/>
          </div>
            <div className='p-5'>{item.description}</div>
          </>
          )}
        </div>
    </div> 
  )
}

export default Book