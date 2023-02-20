export const exerciseOptions= {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '1862f5653emsh0002719c363f5f7p1ecbb5jsn58920c0e829d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData=async (url, options)=>{
    const response=await fetch(url,options);
    const data= await response.json();
    return data;
}

export const youtubeOptions = {
  method: 'GET',
  
  
  headers: {
    'X-RapidAPI-Key': '1862f5653emsh0002719c363f5f7p1ecbb5jsn58920c0e829d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};