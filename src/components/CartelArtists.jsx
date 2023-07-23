'use client'
import { signIn, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { getTopArtists } from "@/app/api/endpoints/Artists"
import styles from "./styles/cartelartists.module.css"

async function fetchTopArtists(token, setTopArtists){
  const timeRange = "long_term";
  const limit = 21;
  try {
    const data = await getTopArtists(token, timeRange, limit);
    //setSave(data);
    const items = data.items;
    const topArtists = items.map(i => i.name);
    setTopArtists(topArtists);
  } catch (error) {
    console.log(error);
  }
}

export default function Cartel() {
  const { data: session } = useSession();
  //const [ save, setSave ] = useState();
  const [ topArtists, setTopArtists ] = useState([]);
  
  useEffect(() => {
    fetchTopArtists(session.accessToken, setTopArtists);
  }, [session])
  
  return(
    <>
      {!session && (
        <div>
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
        </div>
      )}
      {session?.user && (
        <main>
          <div className={styles.main}>
            <h1 className={styles.title}>{session.user.name}'s Music Festival</h1>
            <div className={styles.artists}>
              <h1>{topArtists[0]}</h1>
              <h2>{topArtists[1]} · {topArtists[2]}</h2>
              <h3>{topArtists[3]} · {topArtists[4]} · {topArtists[5]}</h3>
              <h4>{topArtists[6]} · {topArtists[7]} · {topArtists[8]} · {topArtists[9]}</h4>
              <h5>{topArtists[10]} · {topArtists[11]} · {topArtists[12]} · {topArtists[13]} · {topArtists[14]}</h5>
              <h6>{topArtists[15]} · {topArtists[16]} · {topArtists[17]} · {topArtists[18]} · {topArtists[19]} · {topArtists[20]}</h6>
            </div>
          </div>
        </main>
      )}
    </>
)}