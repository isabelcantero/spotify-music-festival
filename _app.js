'use client'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState('atok');

  return <Component {...pageProps} accessToken={accessToken} setAccessToken={setAccessToken} />;
}

export default MyApp;
