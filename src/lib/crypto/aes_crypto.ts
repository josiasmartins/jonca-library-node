import * as crypto from 'crypto';


/**
 * crypography simetric
 * 
 *  possui somente uma chave (key) para cryptografar e descriptografar 
 * 
 */
class AesEncryption {
    private readonly algorithm: string = 'aes-256-cbc';
    private readonly key: Buffer;
    private readonly iv: Buffer;

    constructor(secretKey: string) {
        // Gerar um vetor de inicialização (IV) aleatório
        this.iv = crypto.randomBytes(16);
        // Derivar uma chave usando a função de hash SHA-256
        this.key = crypto.createHash('sha256').update(secretKey).digest();
    }

    encrypt(text: string): string {
        const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
        let encrypted = cipher.update(text, 'utf-8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    decrypt(encryptedText: string): string {
        const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
        let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');
        return decrypted;
    }
}

// Exemplo de uso
const secretKey = 'ChaveSecreta123';
const symmetricEncryption = new AesEncryption(secretKey);

const originalMessage = 'Esta é uma mensagem secreta!';
const encryptedMessage = symmetricEncryption.encrypt(originalMessage);
console.log('Mensagem criptografada:');
console.log(encryptedMessage);

const decryptedMessage = symmetricEncryption.decrypt(encryptedMessage);
console.log('\nMensagem descriptografada:');
console.log(decryptedMessage);
