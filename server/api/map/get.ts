const axios = require('axios')
const config = useRuntimeConfig()

export default (res, req) => fetchGmap()

const fetchGmap = async () => {
    const result = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?language=ja&location=35.65858404079,139.74543164468&radius=500&key=${config.apiKey}`
    )
    return result
}
