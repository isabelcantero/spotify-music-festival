import axios from "axios"

async function getTopArtists(token, timeRange, limit) {
  const res = await axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=${limit}`, {
      headers: {Authorization: `Bearer ${token}`}
      });
  return res.data;
}

export { getTopArtists }