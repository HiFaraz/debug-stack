# debug-stack

```js
var debugStack = require('debug-stack');
var debug = debugStack('my method');

debug ('performed action 1');
debug ('performed action 2');

debug.print();
```

Console output:

```
my method
> performed action 1
> performed action 2
```