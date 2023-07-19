'use client'
import styles from '../app/page.module.css'
import { redirectToAuthCodeFlow } from '@/scripts/auth'

const clientId = "2db5f2e5a78f4f4fb27ac67c138d39b2";

const Login = () => {
    return ( 
        <button className={styles.buttonlogin} onClick={() => redirectToAuthCodeFlow(clientId)}>
            Login with Spotify
        </button>
     );
}
 
export default Login;