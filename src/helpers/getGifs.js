    
    
export const getGifs = async(category) =>{

    const urlFetch = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=g1dCiL4mecdpaOWgTGtlvZzrLr0c9nBW`;
    const respuesta = await fetch(urlFetch);
    //Destructuramos data para evitar poner data.data
    const {data} = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized?.url,
        }
    });
    
    //Le pasamos el array de 10 imagenes con su id, titulo y url
    return (gifs);
}