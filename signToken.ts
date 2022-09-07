import { sign, SignOptions } from 'jsonwebtoken';
import { readFileSync } from 'fs';

interface TokenResponse {
  token_type: string;
  access_token: string,
  expires_in: number;
}

const DEFAULT_EXPIRES = 12 * 60 * 60;

const { kid, pubKey, privKey } = JSON.parse(readFileSync(process.argv[2]).toString('ascii'));

const genToken = (b64: string): TokenResponse => {

  const [username, password] = Buffer.from(b64, 'base64')
    .toString('ascii')
    .split(':', 2);

  console.log(username, password);

  const expiry: number = DEFAULT_EXPIRES;

  const claims = {
    iss: 'uri:mizuguta:test',
    sub: username,
  };

  const signingOptions: SignOptions = {
    algorithm: 'RS512',
    expiresIn: expiry,
    header: { alg: 'RS512', kid },
  };

  const privatePEM = `-----BEGIN PRIVATE KEY-----\n${privKey}\n-----END PRIVATE KEY-----\n`;
  const token = sign(claims, privatePEM, signingOptions);

  const result = {
    token_type: 'Bearer',
    access_token: token,
    expires_in: expiry,
  };

  return result;
}

const main = async () => {
  const result = genToken(process.argv[3]);
  console.log(result);
}

main().catch((err) => console.error(err));