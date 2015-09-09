# ethereum-units
A simple unit converter for Ethereum, because finney, szabo, and wei are less intuitive than SI units for people like me.

## CLI
```
$ npm install -g ethereum-units
$ ethunits 1 babbage wei
1000000 wei
$ ethunits 1 wei
0.000000000000000001 ether
$ ethunits -e 1 wei
1E-18 ether
```

## Node
```node
ethunits = require('ethereum-units');
ethunits.convert(1, 'babbage', 'wei');
```

Returns [BigDecimal](https://github.com/iriscouch/bigdecimal.js) objects. Also exposes a `units` object mapping unit names to `BigDecimal` representations of how much wei each unit consists of.
