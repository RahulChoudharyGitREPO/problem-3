function toLowerCase(string) {
    return string.toLowerCase();
}

function convertArrayToLowerCase(array) {
    return array.map(toLowerCase);
}

const array = ["MA", "SA", "I", "SCH", "OOL"];

const lowerCaseArray = convertArrayToLowerCase(array);

console.log(lowerCaseArray); 