import React from 'react'

function ExampleCarouselImage() {
   const arr =[
    'https://xtb.scdn5.secure.raxcdn.com/kb_main_photo/0102/92/9ecbe35a-70bc-4b2e-80aa-74c65b57e09f/kb_main_photo_front/1-trading-what-is-it.png',
    'https://www.investopedia.com/thmb/fetZWfPpNcafHGuQFVG2yLKTrTs=/4000x2667/filters:no_upscale():max_bytes(150000):strip_icc()/Primary-Image-how-to-buy-dogecoin-doge-7370204-429d2dbae0404ad1a75cdcfb826f75c7.jpg',
    'https://img.etimg.com/thumb/width-640,height-480,imgsize-18440,resizemode-75,msid-86701428/markets/stocks/news/how-algo-trading-makes-it-easier-to-grow-protect-wealth-in-stock-market/stock-market-thinkstock.jpg'
   ] 
   console.log(arr);
  return (
    <div>
        {
                <img  style={{width:"100%",height:"600px"}} src='https://www.jagoinvestor.com/wp-content/uploads/files/virtual-stock-trading.jpg'/>
        }
    </div>
  )
}

export default ExampleCarouselImage