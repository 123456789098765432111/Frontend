'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const CustomImage = ({fill,Img,Index}) => {
	const [isLoading, setIsLoading] = useState(true);
    console.log(Img);
    return (
        <>
{
   fill ? (
    <img
         src={`${Img?Img:'https://ccse.uz/media/cache/05/4f/054ff14351ed59244443b1c4ad35730f.jpg'}`}
        alt={'asda'}
        style={{height:"200px",width:"100%"}}
        fill
        className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            isLoading
                ? 'scale-110 blur-1.8xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
        }}`}
        onLoadingComplete={() => setIsLoading(false)}
    />
) : (
    <img
       src={`${Img?Img:'https://ccse.uz/media/cache/05/4f/054ff14351ed59244443b1c4ad35730f.jpg'}`}
        alt={'asd'}
        style={{height:"200px",width:"100%"}}

        className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            isLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
        }}`}
        onLoadingComplete={() => setIsLoading(false)}
    />
)
   
}
   
  </>
)}

export default CustomImage