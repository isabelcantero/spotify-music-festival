'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import AccessDenied from "./AccessDenied";

export default function Cartel() {
  const { data: session  } = useSession();
  const [content, setContent] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${session.accessToken}` }
        });
      const json = await res.json();
      if (json.content) {
        console.log(json);
        setContent(json.content);
      } else {
        console.log(json);
        console.log('sin contenido');
      }
    }
    fetchData()
  }, [session])

  if (!session) {
    return (
      <AccessDenied />
    )
  }

  

  return(
    <div>
    <h1>Cartel</h1>
    <p>
        {content ?? "\u00a0"}
    </p>
    
  </div>
)}