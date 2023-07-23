import axios from "axios"

async function getTopTracks(token, timeRange, limit) {
  const res = await axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=${limit}`, {
      headers: {Authorization: `Bearer ${token}`}
      });
  return res.data;
}

export { getTopTracks }