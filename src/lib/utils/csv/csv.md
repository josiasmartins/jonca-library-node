# CSV Util


## methods downloadCsv
### params
- headers: Lista for header
- paths: your path for object
- data: your object

#### Example for use
```ts
import { CsvUtil } from 'jonca-library-node';

class Main {

    public headers = ['nam', 'age', 'city', 'tt'];
    public paths = ['nam', 'age', 'city', 'customer.name']; // 
    public complexObject = [
        { nam: 'John', age: 30, city: 'New York'customer: { name: 'test', value:'ibag' } },
        { nam: 'John2', age: 30, city: 'New York', customer: { name: 'test', value: 'ibag' } },
        { nam: 'John4', age: 30, city: 'New York', customer: { name: 'test', value: 'ibag' } }
    ];
    

    constructor() {}

    public downloadCsv(): void {
        const filename = `name_csv`;
        CsvUtil.downloadCsv(headers, paths, complexObject, filename);
    }

}
```

```html
<div>
    <button onclick=downloadCsv()></button>
</div>
```
#### returned expected 

