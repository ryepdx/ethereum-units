var bd = require('bigdecimal');
var units = {
    'wei': new bd.BigDecimal('1'),
    'ada': new bd.BigDecimal('1000'),
    'babbage': new bd.BigDecimal('1000000'),
    'shannon': new bd.BigDecimal('1000000000'),
    'szabo': new bd.BigDecimal('1000000000000'),
    'finney': new bd.BigDecimal('1000000000000000'),
    'ether': new bd.BigDecimal('1000000000000000000'),
    'einstein': new bd.BigDecimal('1000000000000000000000'),
    'mether': new bd.BigDecimal('1000000000000000000000000'),
    'gether': new bd.BigDecimal('1000000000000000000000000000'),
    'tether': new bd.BigDecimal('1000000000000000000000000000000')
};

module.exports = {
    units: units,
    convert: function (from, fromUnit, toUnit) {
        if (!from.multiply) {
            from = new bd.BigDecimal(from);
        }
        return from.multiply(units[fromUnit]).divide(units[toUnit]);
    }
};
