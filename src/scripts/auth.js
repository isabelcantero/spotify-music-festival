const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
//const redirect_uri = 'http://localhost:3000';
const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;

async function redirectToAuthCodeFlow() {
    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", redirect_uri);
    params.append("scope", "user-read-private user-top-read");

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

async function getAccessToken(code) {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', redirect_uri);

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
        },
        body: params/*,
        cache: 'no-store'*/
    })

    const { access_token } = await result.json();
    return access_token;
}

export {redirectToAuthCodeFlow, getAccessToken};