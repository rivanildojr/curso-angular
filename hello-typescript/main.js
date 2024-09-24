var myVariable = 'minha variavel';
function myFunc(x, y) {
    return x + y;
}
var num = 2;
var PI = 3.14;
var numbers = [1, 2, 3, 4, 5, 6];
numbers.map(function (value) {
    return value * 2;
});
numbers.map(function (value) { return value * 2; });
var Mathematics = /** @class */ (function () {
    function Mathematics() {
    }
    Mathematics.prototype.sum = function (x, y) {
        return x + y;
    };
    return Mathematics;
}());
