'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import { useEffect } from "react"

async function fetchProfile(token) {
  const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
  });

  return await result.json();
}

async function fetchData () {
  const accessToken = session.accessToken;

  const profile = await fetchProfile(accessToken);
  console.log(profile);

  /*
  const type = "artists";
  const timeRange = "long_term";
  const limit = 15;

  const topArtistsPre = await fetchTopArtists(accessToken, type, timeRange, limit);
  //const topArtists = transformArtists(topArtistsPre);

  //populateUI(profile, topArtists);
  */
}

export default function Cartel() {
  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.spotify.com/v1/me", {
      method: "GET", headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      const json = await res.json()
      console.log(json);
    }
    fetchData()
  }, [session])

  return(
    <div>
    <h1>Cartel</h1>
    <p>
        {!session && (
          <>
            <span>
              You are not signed in
            </span>
            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault()
                signIn()
              }}
            >
              Sign in
            </a>
          </>
        )}
        {session?.user && (
          <>
            <span>
            </span>
          </>
        )}
      </p>
    
  </div>
)}