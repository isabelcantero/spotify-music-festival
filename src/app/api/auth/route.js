import { getAccessToken } from '../scripts/auth.js';

export default async (req, res) => {
  const { code } = req.body;

  // Obtener el token de acceso de la API de Spotify
  const accessToken = await getAccessToken(code);

  // Establecer la cookie con el token de acceso
  res.setHeader('Set-Cookie', `access_token=${accessToken}; Secure; HttpOnly; SameSite=Strict; Path=/`);

  // Enviar una respuesta al cliente
  res.status(200).json({ success: true });
}
