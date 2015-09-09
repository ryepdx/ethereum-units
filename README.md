# ethereum-units
A simple unit converter for Ethereum, because finney, szabo, and wei are less intuitive than SI units for people like me.

## CLI
```
$ npm install -g ethereum-units
$ ethunits 1 babbage wei
1000000 wei
```

## Node
```node
ethunits = require('ethereum-units');
ethunits.convert(1, 'babbage', 'wei');
```
