'use client'
import styles from './page.module.css'
import { getAccessToken} from '../../scripts/auth.js'
import { useRouter } from 'next/navigation';

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

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = req.headers.cookie;
  const accessToken = cookies.split(';').find(c => c.trim().startsWith('access_token=')).split('=')[1];
  return {
    props: {
      accessToken
    }
  }
}

export default function Dashboard(props) {
  const { accessToken } = props;

  const router = useRouter();
  router.push('/dashboard');
  console.log(accessToken);

  /*
  <section id="profile">
        <h2>Logged in as <span id="displayName"></span></h2>
        <ul>
            <li>User ID: <span id="id"></span></li>
            <li>Spotify URI: <a id="uri" href="#"></a></li>
            <li>Link: <a id="url" href="#"></a></li>
        </ul>
      </section>

      <h2>Top Artists:</h2>
      <section id="top-artists">

      </section>
  */

  return (
    <main className={styles.main}>
      <h1>Your Spotify Music Festival</h1>
      <h1>Welcome </h1>

      <h3>Access token: {accessToken}</h3>

      <h1>Your Top Artists</h1>
    </main>
  )
}
