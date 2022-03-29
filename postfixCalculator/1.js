

function postfixConversion(currentEquation){
    let equation = currentEquation.split('');
    let operators = /[*+-/]/gi;
    let stack = [];

    function compute(a, operator, b){
        switch(operator){
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
        }
    }

    for (let i = 0; i < equation.length; i++){
        if(!(equation[i].match(operators))){
            stack.unshift(parseInt(equation[i]))  
          } else {
            stack.unshift(compute(stack.shift(), equation[i], stack.shift()))

        }
    }
    return Math.abs(stack)
}
console.log(postfixConversion('1 3 4 * + 2 -'));




