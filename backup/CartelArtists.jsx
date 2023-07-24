import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth/next"

export default function Cartel() {
  const { data: session } = useSession();
  
  return(
    <>
      {session?.user && (
        <main>
          <h1>{session.user.name}</h1>
        </main>
      )}
    </>
)}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getServerSession(
        context.req,
        context.res
      ),
    },
  }
}