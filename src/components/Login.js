'use client'
import styles from '../app/page.module.css'
import { redirectToAuthCodeFlow } from '@/scripts/auth'

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

const Login = () => {
    return ( 
        <button className={styles.buttonlogin} onClick={() => redirectToAuthCodeFlow(clientId)}>
            Login with Spotify
        </button>
     );
}
 
export default Login;