export const getGifts= async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=n6vX91QmMb1fHlmkYaq7A4Cj8WP8R2zZ&q=${encodeURI( category )}&limit=10`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifts = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
        
    });

    return gifts;
    
}