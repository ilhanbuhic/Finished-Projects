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
