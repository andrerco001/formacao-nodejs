const name = "Calculator V1";

function sum(a, b)
{
    return a + b;
}

function subtraction(a, b)
{
    return a - b;
}


function multiply(a, b)
{
    return a * b;
}


function division(a, b)
{
    return a / b;
}

module.exports = {
    sum,
    subtraction,
    multiply,
    division,
    name
};