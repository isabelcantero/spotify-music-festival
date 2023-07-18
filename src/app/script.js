const clientId = "2db5f2e5a78f4f4fb27ac67c138d39b2"; // Replace with your client ID
const params = new URLSearchParams(window.location.search);
const code = params.get("code");
import {redirectToAuthCodeFlow, getAccessToken} from '../scripts/auth.js'

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
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

function populateUI(profile, topArtists) {
    document.getElementById("displayName").innerText = profile.display_name;

    document.getElementById("id").innerText = profile.id;
    document.getElementById("uri").innerText = profile.uri;
    document.getElementById("uri").setAttribute("href", profile.external_urls.spotify);
    document.getElementById("url").innerText = profile.href;
    document.getElementById("url").setAttribute("href", profile.href);

    document.getElementById("top-artists").innerText = topArtists;
}
