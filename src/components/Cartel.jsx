'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import { useEffect } from "react"
import axios from "axios"

async function fetchTopArtists(token, type, timeRange, limit) {
  const result = await fetch(`https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=${limit}`, {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
  });

  return await result.json();
}

export default function Cartel() {
  const { data: session } = useSession();

  /*
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${session.accessToken}` }
        });
      const json = await res.json()
      console.log(json);
    }
    fetchData()
  }, [session])*/
  
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.spotify.com/v1/me/top/artists", {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          }
        });
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }

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