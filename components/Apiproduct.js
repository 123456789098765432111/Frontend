import axios from 'axios';
// forex api
const BASE_URL ="https://crypto-news16.p.rapidapi.com"
const options =  {
  headers: {
    'X-RapidAPI-Key': '4d8732ff41mshb43406621fab0c0p1548b9jsn707a6eb4d959',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
  }
};
export const ApiService ={
    async fetching(url){
        const response = await axios.get(`${BASE_URL}/${url}`,options)
        return response
    }
}

// forex new  alerts api
const BASE_URL2 ="https://newsi-api.p.rapidapi.com/api"

const options2 = {
  params: {
    category: 'world',
    language: 'en',
    country: 'us',
    sort: 'top',
    page: '1',
    limit: '20'
  },
  headers: {
    'X-RapidAPI-Key': 'e3c74af0dcmsh8e9627d7dd078eep13681fjsn861aead48f86',
    'X-RapidAPI-Host': 'newsi-api.p.rapidapi.com'
  }
  };

  export const ApiService2 ={
    async fetching(url2){
        const response = await axios.get(`${BASE_URL2}/${url2}`,options2)
        return response
    }
}
// // forex new  alerts api
// const BASE_URL3 ="https://coinranking1.p.rapidapi.com"

// const options3 = {
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': '4d8732ff41mshb43406621fab0c0p1548b9jsn707a6eb4d959',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
//   };

//   export const ApiService3 ={
//     async fetching(url2){
//         const response = await axios.get(`${BASE_URL2}/${url2}`,options3)
//         return response
//     }
// }