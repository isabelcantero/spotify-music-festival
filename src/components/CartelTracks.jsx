'use client'
import { signIn, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { getTopTracks } from "@/app/api/endpoints/Tracks"

  /*
  timeRange = long_term (several years), medium_term (DEFAULT, 6 months), short_term (4 weeks)
  limit = min:1, max:50, DEFAULT: 20
  */
async function fetchTopTracks(token, setTopTracks){
  const timeRange = "long_term";
  const limit = 21;
  try {
    const data = await getTopTracks(token, timeRange, limit);
    //setSave(data);
    const items = data.items;
    const topTracks = items.map(i => i.name);
    setTopTracks(topTracks);
  } catch (error) {
    console.log(error);
  }
}

export default function Cartel() {
  const { data: session } = useSession();
  //const [ save, setSave ] = useState();
  const [ topTracks, setTopTracks ] = useState([]);
  
  useEffect(() => {
    fetchTopTracks(session.accessToken, setTopTracks);
  }, [session])
  
  return(
    <div>
    <h1>Cartel</h1>
    <hr />
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
            <div>
              <h1>{topTracks[0]}</h1>
              <h2>{topTracks[1]}·{topTracks[2]}</h2>
              <h3>{topTracks[3]}·{topTracks[4]}·{topTracks[5]}</h3>
              <h4>{topTracks[6]}·{topTracks[7]}·{topTracks[8]}·{topTracks[9]}</h4>
              <h5>{topTracks[10]}·{topTracks[11]}·{topTracks[12]}·{topTracks[13]}·{topTracks[14]}</h5>
              <h6>{topTracks[15]}·{topTracks[16]}·{topTracks[17]}·{topTracks[18]}·{topTracks[19]}·{topTracks[20]}</h6>
            </div>
          </>
        )}
    
  </div>
)}