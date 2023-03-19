import axios from 'axios';

const searchImages= async (a)=>{
    const response= await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID ahny_ETnS1V1mA1L69N6z_EE6LRcq0SP2sAdo8wS_Gg'
      },
      params:{
        query:a
      }
    })
    debugger;
    return response.data.results;
  }

  export default searchImages;