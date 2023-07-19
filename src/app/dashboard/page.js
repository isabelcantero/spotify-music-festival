//'use client'
import styles from './page.module.css'
import { getAccessToken} from '../../scripts/auth.js'
import { useRouter } from 'next/navigation';
import { getProfile, getTopArtists } from '@/app/api/profile/route.js'

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

export default async function Dashboard() {
  const clientId = "7d773b9ed08a46a5b34fd05b0661a40e"; // Replace with your client ID
  //console.log('Hola');
  //console.log(code);

  /*
  const router = useRouter();
  const params = new URLSearchParams(router.query);
  const code = params.get("code");
  */
  /*
  if (code) {
    fetchData();
  }*/

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

      <h1>Your Top Artists</h1>
    </main>
  )
}
