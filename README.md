# debug-stack

[![Greenkeeper badge](https://badges.greenkeeper.io/HiFaraz/debug-stack.svg)](https://greenkeeper.io/)

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

#Why not use the npm/debug module?
For complex applications, debug-stack simplifies tracking a particular program flow by stacking all debug messages together so that they are easy to find.
