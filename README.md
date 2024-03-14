
# jonca-library-node

A collection of handy tools to streamline Node.js development

## Features

Ensure default values with ease: Use the DefaultValue decorator to guarantee that properties always have a fallback value, even if not explicitly set.
More features coming soon! Stay tuned for additional tools and utilities to enhance your Node.js projects.
## Installation

Bash
```bash
npm install jonca-library-node
```

## Features

### Decorators
[LogExecutionTime](./src/lib/decorators/log-execution/log-execution.decorator.md)
### Util
[UtilCsv](./src/lib/utils/csv/csv.md)


## Usage

<details>
  <summary>Decorators</summary>
  <h3>DefaultValue Decorator</h3>

Example:

```TypeScript
import { DefaultValue } from 'jonca-library-node';

class User {
  @DefaultValue('John Doe')
  name: string;

  @DefaultValue(30)
  age: number;

  @DefaultValue(true)
  isActive: boolean;
}

const user = new User();

console.log(user.name);   // Output: 'John Doe' (default value)
console.log(user.age);    // Output: 30 (default value)
console.log(user.isActive); // Output: true (default value)

user.name = 'Jane Smith';
user.age = 25;
user.isActive = false;

console.log(user.name);   // Output: 'Jane Smith' (updated value)
console.log(user.age);    // Output: 25 (updated value)
console.log(user.isActive); // Output: false (updated value)
```
</details>

<details>
  <summary>Services</summary>
</details>

<details>
  <summary>Adapters</summary>
</details>

<details>
  <summary>Utils</summary>
</details>


## Documentation

For comprehensive documentation and usage examples, please visit the project's GitHub repository: https://github.com/josiasmartins/jonca-library-node

## Contributing

Contributions are always welcome! Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.
