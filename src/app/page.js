'use client'
import styles from './page.module.css'
import { redirectToAuthCodeFlow } from '../scripts/auth.js'
// import { useRouter, useSearchParams  } from 'next/navigation';

export default function Welcome(props) {

  const login = () => {

    
    return (
      <TextRegular textStyle={styles.emptyList}>
        No restaurants were retrieved.
      </TextRegular>
    )
  }


  const clientId = '7d773b9ed08a46a5b34fd05b0661a40e';
  /*const router = useRouter();

  const searchParams = useSearchParams()
  const code = searchParams.get('code')*/
  const code = props.searchParams.code
  
  if (code) {
    console.log(props.searchParams.code);
    //router.push('/dashboard');
  }

  return (
    <main className={styles.main}>
      <h1>Homepage</h1>
      <>Code: {code}</>

      <button className={styles.buttonlogin} onClick={login}>Login with Spotify</button>
    </main>
  )
}
