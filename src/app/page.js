import styles from './page.module.css'
import { getAccessToken } from '../scripts/auth.js'
//import { useRouter } from 'next/navigation';
import Login from '@/components/Login'

export default async function Welcome(props) {
  //const router = useRouter();

  const code = props.searchParams.code;
  
  if (code) {
    const accessToken = getAccessToken(code);
    console.log(accessToken);
    //router.push('/dashboard');
  }

  return (
    <main className={styles.main}>
      <h1>Homepage</h1>
      <>Code: {code}</>

      <Login />
    </main>
  )
}
