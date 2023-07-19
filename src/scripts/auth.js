const clientId = '7d773b9ed08a46a5b34fd05b0661a40e';
const clientSecret = 'f5c6caf73b2942229419b9f5d0a847e0';
const redirect_uri = 'http://localhost:3000';

async function redirectToAuthCodeFlow() {
    //const verifier = generateCodeVerifier(128);
    //const challenge = await generateCodeChallenge(verifier);

    //localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", redirect_uri);
    params.append("scope", "user-read-private user-top-read");
    //params.append("code_challenge_method", "S256");
    //params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}
/*
function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}
*/
async function getAccessToken(code) {
    //const verifier = localStorage.getItem("verifier");
    
    const params = new URLSearchParams();
    //params.append("client_id", clientId);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', redirect_uri);
    //params.append("code_verifier", verifier);

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
        },
        body: params
    })

    const { access_token } = await result.json();
    return access_token;
}

export {redirectToAuthCodeFlow, getAccessToken};