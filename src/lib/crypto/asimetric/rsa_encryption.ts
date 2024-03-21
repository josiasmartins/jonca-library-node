import * as crypto from 'crypto';

/**
 * crypography asimetric
 * 
 *  duas chaves: 
 *      public  (usava para cryptografar os dados) entre o server e client
 *      private (usado para descriptografar os dados)
 * 
 */
export class RSAEncryption {
    privateKey: string;
    publicKey: string;

    constructor() {
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'pkcs1',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs1',
                format: 'pem'
            }
        });
        this.privateKey = privateKey;
        this.publicKey = publicKey;
    }

    encrypt(message: string): Buffer {
        return crypto.publicEncrypt(this.publicKey, Buffer.from(message));
    }

    decrypt(encryptedMessage: Buffer): string {
        return crypto.privateDecrypt(this.privateKey, encryptedMessage).toString();
    }
}

// // Exemplo de uso
// const rsa = new RSAEncryption();
// console.log('Chave pública:');
// console.log(rsa.publicKey);
// console.log('\nChave privada:');
// console.log(rsa.privateKey);

// const message = 'Esta é uma mensagem secreta!';
// const encryptedMessage = rsa.encrypt(message);
// console.log('\nMensagem criptografada:');
// console.log(encryptedMessage.toString('base64'));

// const decryptedMessage = rsa.decrypt(encryptedMessage);
// console.log('\nMensagem descriptografada:');
// console.log(decryptedMessage);
