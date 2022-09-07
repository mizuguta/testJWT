import crypto from 'crypto';
import { v4 as uuid } from 'uuid';
import { writeFileSync } from 'fs';

interface KeyInfo {
  kid: string;
  pubKey: string;
  privKey: string;
}

export const generateKeys = (): KeyInfo => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });

  //  console.log('PUB PEM:', publicKey)
  //  console.log('PRIV PEM:', privateKey)
  const pub = publicKey
    .replace(/^\s*-*(.*PUBLIC KEY\b)-*\s*/, '')
    .replace(/\n/g, '')
    .replace('-----END PUBLIC KEY-----', '');
  const priv = privateKey
    .replace(/^\s*-*(.*PRIVATE KEY\b)-*\s*/, '')
    .replace(/\n/g, '')
    .replace('-----END PRIVATE KEY-----', '');
  const kid = uuid().toUpperCase();
  return { kid: kid, pubKey: pub, privKey: priv };
}

const main = async () => {
  const json = generateKeys();
  if (process.argv.length > 2) {
    writeFileSync(process.argv[2], JSON.stringify(json, null, 4));
    console.log(`wrote keys to ${process.argv[2]}`);
  } else {
    console.log('PUBLIC KEY:', `${json.kid}:${json.pubKey}`);
    console.log('PRIVATE KEY:', `${json.kid}:${json.privKey}`);
  }
}

main().catch((err) => console.error(err));
