import axios from 'axios'

const url = "https://covid19.mathdro.id/api"

export const fetchData =  async() => {
    try {
        const { data: {confirmed, recovered, deaths, lastUpdated} } = await axios.get(url)
        
        const modifyData = {
            confirmed,
            recovered,
            deaths,
            lastUpdated
        }

        return modifyData

    } catch (error) {
        
    }
}