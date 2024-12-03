const crypto = require('node:crypto')

const hexKey = crypto.randomBytes(32).toString('hex')
const base64key = crypto.randomBytes(32).toString('base64')

console.log(hexKey)
console.log(base64key)

const uuid = crypto.randomUUID()
console.log(uuid)

/* Generates an RSA key pair with a modulus length of 4096 bits. The public key
is encoded in the SubjectPublicKeyInfo (SPKI) format and the private key is 
encoded in the PKCS#8 format, both in PEM format.

The generated keys can be used for various cryptographic operations, such as 
encryption, decryption, signing, and verification.
*/
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
})

console.log(publicKey)
console.log(privateKey)
