
function formatResult(operation, a, b, result) {
    let symbol;

    switch (operation) {
        case "add":
            symbol = "+";
            break;
        case "subtract":
            symbol = "-";
            break;
        case "multiply":
            symbol = "*";
            break;
        case "divide":
            symbol = "/";
            break;
        case "average":
            return `Average of ${a} and ${b} = ${result}`;
    }

    return `${a} ${symbol} ${b} = ${result}`;
}

module.exports = formatResult;
