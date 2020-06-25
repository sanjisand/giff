
export const getGifs = async(categoria) => {
	
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=4IZTEnNxpDnEG48MAg13DnLifi7GihUJ`
	const res = await fetch(url)
	const {data} = await res.json()
	
	const gifs = data.map(item => {
		return {
			id: item.id,
			title: item.title,
			img: item.images.downsized_medium.url
		}
	})
	
	return gifs
}
