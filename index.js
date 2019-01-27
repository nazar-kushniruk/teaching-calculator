window.onload = function () {


    function Calculator() {
        //local variables and functions
        var firstNum = 0;
        var secondNum = 0;
        var operator = 0;
        var pos = -1;

        function parseQuerryString(querryString, operations) {
            if (querryString && querryString.length > 4) {
                var whereSpace = [];
                var operationsLocal = operations;
                var res = 0;
                var positionOperator = 0;

                while ((pos = querryString.indexOf(' ', pos + 1)) !== -1) {
                    whereSpace.push(pos);
                }
                if (whereSpace.length !== 2) {

                    return 'Неправильний ввод! Должно быть \"3 + 7\" ';
                } else {
                    firstNum = +querryString.substring(0, whereSpace[0]);
                    operator = querryString.substring(whereSpace[0] + 1, whereSpace[1]);
                    secondNum = +querryString.substring(whereSpace[1]);

                    positionOperator = operationsLocal.findIndex(function (elem) {
                        for (var key in elem) {
                            if (key === operator) {
                                return true;
                            }
                        }
                    });
                    if (positionOperator !== -1) {
                        res = operationsLocal[positionOperator][operator](firstNum, secondNum);

                    } else {
                        res = 'этому пока что не научен';
                    }

                    console.log('positionOperator -> ', positionOperator);

                }
                return res;
            }
        }

        this.operations = [
            {
                '+': function (a, b) {
                    return a + b;
                }
            },
            {
                '-': function (a, b) {
                    return a - b;
                },

            }];

        this.calculate = function (operation) {
            return parseQuerryString(operation, this.operations);
        };
        this.addMethod = function (name, func) {
            var operator = {};
            operator[name] = func;
            this.operations.push(operator);
            console.log('Научили ', name);
        };
    }

    var calc = new Calculator;
    alert(calc.calculate("3 - 7"));

    var powerCalc = new Calculator;

    powerCalc.addMethod("*", function (a, b) {
        return a * b;
    });
    powerCalc.addMethod("/", function (a, b) {
        return a / b;
    });
    powerCalc.addMethod("**", function (a, b) {
        return Math.pow(a, b);
    });

    var result = powerCalc.calculate("2 ** 3");
    console.log(result); // 8

}
