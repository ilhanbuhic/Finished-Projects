const crypto = require('crypto')
const fs = require('fs')

// Key generation
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048, // key size in bits
  publicKeyEncoding: {
    type: 'pkcs1',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs1',
    format: 'pem',
  },
})

fs.writeFileSync('private.pem', privateKey)
fs.writeFileSync('public.pem', publicKey)

// // Encryption
// const plaintext = 'Hello, RSA!'
// const encryptedBuffer = crypto.publicEncrypt(
//   {
//     key: publicKey,
//     padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
//   },
//   Buffer.from(plaintext)
// )
// const encryptedMessage = encryptedBuffer.toString('base64')

// // Decryption
// const decryptedBuffer = crypto.privateDecrypt(
//   {
//     key: privateKey,
//     padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
//   },
//   encryptedBuffer
// )
// const decryptedMessage = decryptedBuffer.toString('utf8')

// console.log('Original Message:', plaintext)
// console.log('Encrypted Message:', encryptedMessage)
// console.log('Decrypted Message:', decryptedMessage)
