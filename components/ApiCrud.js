import React,{useEffect,useState} from 'react'
import {ApiService} from "./Apiproduct"
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';
import axios from 'axios';
import Link from 'next/link';
const ApiCrud = () => {
  const [categories,setCategories] = useState([]);
  const [categories2,setCategories2] = useState([]);
  const [categories3,setCategories3] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, [])
  function fetchCategories() {
    axios.get('/api/categories').then(result => {
      setCategories(result.data);
    });
  }
  useEffect(() => {
    fetchCategories2();
  }, [])
  function fetchCategories2() {
    axios.get('/api/categories2').then(result => {
      setCategories2(result.data);
    });
  }
  useEffect(() => {
    fetchCategories3();
  }, [])
  function fetchCategories3() {
    axios.get('/api/categories3').then(result => {
      setCategories3(result.data);
    });
  }
 
  return (
   <>
   <div style={{display:"flex",rowGap:"20px",columnGap:"20px",flexWrap:"wrap",justifyContent:"center",marginTop:"20px",maxWidth:"1500px",margin:"0 auto"}}>
   <div style={{width:"450px"}}>
       <Carousel>
       {
         categories.map((item,index)=>
        <Carousel.Item>
          <Link href={`/category1/${item._id}`}>
        <>
        <img src={item.images} style={{width:"500px",height:"500px"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </>
        </Link>
      </Carousel.Item>
        )
       }
    </Carousel>
    </div>
    <div style={{width:"450px"}}>
       <Carousel>
       {
         categories2.map((item,index)=>
      <Carousel.Item>
        <>
        <img src={item.images} style={{width:"500px",margin:"0 auto",height:"500px"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </>
      </Carousel.Item>
        )
       }
    </Carousel>
    </div>
    <div style={{width:"450px"}}>
       <Carousel>
       {
         categories3.map((item,index)=>
      <Carousel.Item>
        <>
        <img src={item.images} style={{width:"500px",margin:"0 auto",height:"500px"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </>
      </Carousel.Item>
        )
       }
    </Carousel>
    </div>
   </div>
   </>
  )
}

export default ApiCrud