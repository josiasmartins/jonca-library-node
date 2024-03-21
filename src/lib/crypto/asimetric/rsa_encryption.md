# Rsa Encryption Asimetric


## Method encrypt
### params
- data: data for encrypted
### Return
- data encrypted sha256
<br><br>

## Method dencrypt
### params
- data: data for dencrypted
### Return
- data dencrypted


#### Example for use
```ts
import { RSAEncryption } from 'jonca-library-node';

class Main {
    
    constructor() {

    }

   public test(): void {
        const data = "I love all thinks"

        const crypto = new RSAEncryption();

        const encryptedData = crypto.encrypt(data);
        console.log(`Encrypted data: ${encryptedData}`)
        
        const decryptedData = crypto.decrypt(encryptedData);
        console.log(`Decrypted data: ${decrypted} === ${data}`)

        
   }

}
```

```html
<div>
    <button onclick=test()>Encryption</button>
</div>
```

