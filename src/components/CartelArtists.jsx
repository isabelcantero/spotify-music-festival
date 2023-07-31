'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { getTopArtists } from "@/app/api/endpoints/Artists"
import styles from "./styles/cartelartists.module.css"
import NoData from "./NoDataMessage"

async function fetchTopArtists(token, setTopArtists, setErrors){
  const timeRange = "long_term";
  //const limit = 28;
  const limit = 35;
  try {
    const data = await getTopArtists(token, timeRange, limit);
    const items = data.items;
    const topArtists = items.map(i => i.name);
    setTopArtists(topArtists);
  } catch (error) {
    setErrors(error);
  }
}

export default function Cartel() {
  const { data: session, status } = useSession();
  const [ topArtists, setTopArtists ] = useState([]);
  const [ errors, setErrors ] = useState();
  
  useEffect(() => {
    if(session){
      fetchTopArtists(session.accessToken, setTopArtists, setErrors);
    }    
  }, [session])
  
  if (status === "loading") {
    return <main><div className={styles.main}></div></main>
  }

  if(errors){
    console.log(errors);
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
        <div className={styles.main}>
          <h1 className={styles.title}>{session.user.name}'s Music Festival</h1>
          <hr className={styles.hr}/>

            {(session?.user && (topArtists.length == 0)) && (
              <NoData />
            )}

            {(session?.user && (topArtists.length != 0)) && (
              <div className={styles.artists}>
                <h1 className={styles.h1}>{topArtists[0]}</h1>
                <h2 className={styles.h2}>{topArtists[1]} · {topArtists[2]}</h2>
                <h3 className={styles.h3}>{topArtists[3]} · {topArtists[4]} · {topArtists[5]}</h3>
                <h4 className={styles.h4}>{topArtists[6]} · {topArtists[7]} · {topArtists[8]} · {topArtists[9]} · {topArtists[10]} · {topArtists[11]} · {topArtists[12]} · {topArtists[13]} · {topArtists[14]} · {topArtists[15]} · {topArtists[16]} · {topArtists[17]} · {topArtists[18]} · {topArtists[19]} · {topArtists[20]} · {topArtists[21]} · {topArtists[22]} · {topArtists[23]} · {topArtists[24]} · {topArtists[25]} · {topArtists[26]} · {topArtists[27]} · {topArtists[28]} · {topArtists[29]} · {topArtists[30]} · {topArtists[31]} · {topArtists[32]} · {topArtists[33]} · {topArtists[34]}
                </h4>
              </div>
            )}

            {/*(session?.user && (topArtists.length != 0)) && (
              <div className={styles.artists}>
                <h1 className={styles.h1}>{topArtists[0]}</h1>
                <h2 className={styles.h2}>{topArtists[1]} · {topArtists[2]}</h2>
                <h3 className={styles.h3}>{topArtists[3]} · {topArtists[4]} · {topArtists[5]}</h3>
                <h4 className={styles.h4}>{topArtists[6]} · {topArtists[7]} · {topArtists[8]} · {topArtists[9]}</h4>
                <h5 className={styles.h5}>{topArtists[10]} · {topArtists[11]} · {topArtists[12]} · {topArtists[13]} · {topArtists[14]}</h5>
                <h6 className={styles.h6}>{topArtists[15]} · {topArtists[16]} · {topArtists[17]} · {topArtists[18]} · {topArtists[19]} · {topArtists[20]}</h6>
                <h6 className={styles.h7}>{topArtists[21]} · {topArtists[22]} · {topArtists[23]} · {topArtists[24]} · {topArtists[25]} · {topArtists[26]} · {topArtists[27]}</h6>
                <h6 className={styles.h8}>{topArtists[28]} · {topArtists[29]} · {topArtists[30]} · {topArtists[31]} · {topArtists[32]} · {topArtists[33]} · {topArtists[34]} · {topArtists[35]}</h6>
              </div>
            )*/}

        </div>
      </main>
      ))}
    </>
)}