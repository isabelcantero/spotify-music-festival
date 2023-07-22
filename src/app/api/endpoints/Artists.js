import axios from "axios"

async function getTopArtists(token, type, timeRange, limit) {
    const res = await axios.get(`https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=${limit}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            }
        });
    return res.data;
}

export { getTopArtists }