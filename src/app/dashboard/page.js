'use client'
import styles from './page.module.css'
import { getAccessToken} from '../../scripts/auth.js'

async function fetchData () {
    const accessToken = await getAccessToken(clientId, code);

    const profile = await fetchProfile(accessToken);

    //============================================================================================
    // artists or tracks
    const type = "artists"

    /*
    Default: medium_term
    long_term (several years and including all new data), 
    medium_term (approx last 6 months), 
    short_term (approx last 4 weeks). 
    */
    const timeRange = "long_term";

    // Default: 20. Minimum: 1. Maximum: 50.
    const limit = 15;
    const topArtistsPre = await fetchTopArtists(accessToken, type, timeRange, limit);
    const topArtists = transformArtists(topArtistsPre);
    //============================================================================================

    populateUI(profile, topArtists);

}

function transformArtists(artistsArray){
  const items = artistsArray.items;
  const topArtists = items.map(i => i.name);
  return topArtists;
}

function populateUI(profile, topArtists) {
  document.getElementById("displayName").innerText = profile.display_name;

  document.getElementById("id").innerText = profile.id;
  document.getElementById("uri").innerText = profile.uri;
  document.getElementById("uri").setAttribute("href", profile.external_urls.spotify);
  document.getElementById("url").innerText = profile.href;
  document.getElementById("url").setAttribute("href", profile.href);

  document.getElementById("top-artists").innerText = topArtists;
}

async function fetchProfile(token) {
  const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
  });

  return await result.json();
}

async function fetchTopArtists(token, type, timeRange, limit) {
  const result = await fetch(`https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=${limit}`, {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
  });

  return await result.json();
}

export default function Dashboard(props) {
  const code = props.searchParams.code;

  /*
  if (code) {
    const accessToken = await getAccessToken(code);
    console.log(accessToken);
    //router.push('/dashboard');
  }*/


/*
  getAccessToken(code)
    .then((accessToken) => {
      console.log(accessToken);
      router.replace('/dashboard', undefined, { shallow: true });
      console.log(accessToken);
    })
    .catch((err) => {
      console.log(err);
    })*/

  return (
    <main className={styles.main}>
      <h1>Your Spotify Music Festival</h1>
      <h1>Welcome </h1>


      <h1>Your Top Artists</h1>
    </main>
  )
}
