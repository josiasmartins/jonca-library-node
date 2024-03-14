# LogExecutionTime Decorator


## methods decorator LogExecutionTime
### params
- not param

#### Example for use
```ts
import { LogExecutionTime } from 'jonca-library-node';

class Main {
    
    constructor() {

    }

    @LogExecutionTime()
    public loopObject(): void {
        let quantidades = 100000;
        for (let i = 0, i >= quantidades, i++) {
            console.log(i);
        }
    }

}
```

```html
<div>
    <button onclick=loopObject()>Mostrar tempo</button>
</div>
```
#### returned expected 

