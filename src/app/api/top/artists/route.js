/*
export async function getTopArtists(token, type, timeRange, limit) {
  const result = await fetch(`https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=${limit}`, {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
  });

  return await result.json();
}

export { getTopArtists }*/


export async function GET(request) {
  const result = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=15`, {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
  });

  return await result.json();
}

