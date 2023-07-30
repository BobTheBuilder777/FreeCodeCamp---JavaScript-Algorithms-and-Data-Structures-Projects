function convertToRoman(num) {
    // Create a library for Roman Numerals from 1 to 1000
    let library = {1:"I", 2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8:"VIII", 9:"IX", 
                    10:"X", 20:"XX", 30:"XXX", 40:"XL", 50:"L", 60:"LX", 70:"LXX", 80:"LXXX", 90:"XC", 
                    100:"C", 200:"CC", 300:"CCC", 400:"CD", 500:"D", 600:"DC", 700:"DCC", 800:"DCCC", 900:"CM",
                    1000:"M"}
    let roman = "";
    // Check if number is already in the library
    let check = num in library;
    // If number is already in library, return the number
    if (check == true){
        roman = library[num];
    }
    // If number is not in library, 
    else{
        // split number into its components by power
        let components = [];     // initialize variable to store components by power
        let highestPower = num.toString().length - 1     // First, convert num to a string to know its biggest power
        let currentNum = num; // create a copy of the original number
        for (let i = highestPower; i >= 0; i--){
            let power = Math.pow(10, i); // set the current power as divisor
            let quotient = Math.floor(currentNum/power); // calculare the quotient as num divided by current power
            let component = quotient * power; // get real value of component by multiplying quotient with power
            if (component !== 0){ // if the component is not equal to zero, push into the array
                components.push(component);
            }
            let remainder = currentNum % power; // update the value of num to be the remainder of the quotient, and repeat  
            currentNum = remainder
        }
        // assign roman numerals to components
        for (let component of components){
            if (component < 1000){
                roman += library[component];
            }
            else{
                let componentRemainder = component;
                while(componentRemainder!== 0){
                    roman += "M"
                    componentRemainder -= 1000;
                }
            }
        }
    }
    return roman;
}

//console.log(convertToRoman(5)); // V correct
//console.log(convertToRoman(36)); //XXXVI correct
//console.log(convertToRoman(3999)); //MMMCMXCIX correct
//console.log(convertToRoman(292)); // CCXCII correct
//console.log(convertToRoman(2014)); // MMXIV correct
console.log(convertToRoman(1004)); // MMXIV correct