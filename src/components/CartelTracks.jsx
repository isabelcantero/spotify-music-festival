'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { getTopTracks } from "@/app/api/endpoints/Tracks"
import styles from "./styles/carteltracks.module.css"
import NoData from "./NoDataMessage"

async function fetchTopTracks(token, setTopTracks, setErrors, setCover){
  const timeRange = "long_term";
  const limit = 20;
  try {
    const data = await getTopTracks(token, timeRange, limit);
    const items = data.items;
    console.log(items[0]);
    setCover(items[0].album.images[0].url);
    const topTracks = items.map(i => i.name);
    setTopTracks(topTracks);
  } catch (error) {
    setErrors(error);
  }
}

export default function Cartel() {
  const { data: session, status } = useSession();
  const [ topTracks, setTopTracks ] = useState([]);
  const [ errors, setErrors ] = useState();
  const [ cover, setCover ] = useState();
  
  useEffect(() => {
    if(session){
      fetchTopTracks(session.accessToken, setTopTracks, setErrors, setCover);
    }    
  }, [session])
  /*
  if (status === "loading") {
    return <main><div className={styles.main}></div></main>
  }*/

  if(errors){
    const response = errors.response;
    if(response.status == 401){
      // 401 Unauthorized Access
      console.log(response.data);
      signOut();
      signIn();
    } else if(response.status == 403){
      // 403 Forbidden
      console.log(response.data);
      signOut();
      //signIn()
    }
  }

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

      {(session?.user && (
      <main>
        <div className={styles.main} style={{ backgroundImage: `url(${cover})` }}>
          <h1 className={styles.title}>{session.user.name}'s Tracklist</h1>
          <hr className={styles.hr}/>

            {(session?.user && (topTracks.length == 0)) && (
              <NoData />
            )}

            {(session?.user && (topTracks.length != 0)) && (
              <div className={styles.artists}>
                <h1 className={styles.h1}>{topTracks[0]}</h1>
                <h1 className={styles.h2}>{topTracks[1]}</h1>
                <h1 className={styles.h3}>{topTracks[2]}</h1>
                <h2 className={styles.h4}>{topTracks[3]}</h2>
                <h2 className={styles.h5}>{topTracks[4]}</h2>
                <h2 className={styles.h5}>{topTracks[5]}</h2>
                <h3 className={styles.h5}>{topTracks[6]}</h3>
                <h4 className={styles.h5}>{topTracks[7]}</h4>
                <h4 className={styles.h5}>{topTracks[8]}</h4>
                <h4 className={styles.h5}>{topTracks[9]}</h4>
                <h4 className={styles.h5}>{topTracks[10]}</h4>
                <h4 className={styles.h5}>{topTracks[11]}</h4>
                <h4 className={styles.h5}>{topTracks[12]}</h4>
                <h4 className={styles.h5}>{topTracks[13]}</h4>
                <h4 className={styles.h5}>{topTracks[14]}</h4>
                <h4 className={styles.h5}>{topTracks[15]}</h4>
                <h4 className={styles.h5}>{topTracks[16]}</h4>
                <h4 className={styles.h5}>{topTracks[17]}</h4>
                <h4 className={styles.h5}>{topTracks[18]}</h4>
                <h4 className={styles.h5}>{topTracks[19]}</h4>
              </div>
            )}

        </div>
      </main>
      ))}
    </>
)}