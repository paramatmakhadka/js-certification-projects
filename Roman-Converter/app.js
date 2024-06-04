function convertToRoman(num) {
    var romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    var roman = '';
    for (var i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            roman += romanNumerals[i].numeral;
            num -= romanNumerals[i].value;
        }
    }
    return roman;
}

document.getElementById('convert-btn').addEventListener('click', function() {
    var num = parseInt(document.getElementById('number').value, 10);
    var output = document.getElementById('output');
    
    if (isNaN(num)) {
        output.innerText = 'Please enter a valid number';
    } else if (num < 1) {
        output.innerText = 'Please enter a number greater than or equal to 1';
    } else if (num >= 4000) {
        output.innerText = 'Please enter a number less than or equal to 3999';
    } else {
        var result = convertToRoman(num);
        output.innerText = result;
    }
});
