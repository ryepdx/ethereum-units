// CLI
(function () {
    var pkg = require('./package.json');
    var converter = require('./index.js');
    var args = process.argv.slice(2);

    if (args.length < 2) {
        console.log('ethunits ' + pkg.version);
        console.log('Usage: ethunits <fromAmount> <from Unit> [toUnit=ether]');
        return;
    }

    var eOptIdx = args.indexOf('-e');
    if (eOptIdx > -1) {
        args.splice(eOptIdx, 1);
    }

    var fromUnit = args[1];
    var toUnit = 'ether';
    if (args.length > 2) {
        toUnit = args[2];
    }

    var invalidUnitErr = function (unit) {
        console.error('Invalid ethereum unit: ' + unit);
        process.exit(1);
    };
    if (!(fromUnit in converter.units)) invalidUnitErr(fromUnit);
    if (!(toUnit in converter.units)) invalidUnitErr(toUnit);
    
    var bd = require('bigdecimal');
    try {
        var fromAmount = new bd.BigDecimal(args[0]);

    } catch (e) {
        console.error('Invalid number: ' + args[0]);
        process.exit(1);
    }

    var res = converter.convert(fromAmount, fromUnit, toUnit);
    console.log((eOptIdx > -1 ? res.toString() : res.toPlainString()) + ' ' + toUnit);

}).call(this);
