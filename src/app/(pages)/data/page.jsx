'use client'
import { useSession } from "next-auth/react"

export default function Data() {
  const { data: session } = useSession();
  console.log(session);

  return(
    <div>
    <h1>DATA from auth</h1>
    <h2>SESSION</h2>
      <h4>User</h4>
        <h5>Name: {session.user.name}</h5>
        <h5>Email: {session.user.email}</h5>
      <h4>EXPIRES: {session.expires}</h4>
      <h4>AT: {session.accessToken}</h4>
    <hr />

  </div>
  )
}