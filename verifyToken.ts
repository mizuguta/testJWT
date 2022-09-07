import jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';

const { kid, pubKey, privKey } = JSON.parse(readFileSync(process.argv[2]).toString('ascii'));

const getSigningKey: jwt.GetPublicKeyOrSecret = async (header, callback) => {
  if (header.kid != kid) {
    return callback(new Error('invalid kid'));
  }
  const pubkey =
    '-----BEGIN PUBLIC KEY-----\n' + pubKey + '\n-----END PUBLIC KEY-----\n';

  callback(null, pubkey);
}

const main = async () => {
  const token = process.argv[3];
  jwt.verify(token, getSigningKey, (err, claims) => {
    if (err) console.log('ERROR', err);
    else console.log('CLAIMS', claims);
  });
}

main().catch((err) => console.error(err));
