function convertToRoman(num) {
    // Create a library for Roman Numerals from 1 to 1000
    let library = [[1,"I"], [5,"V"], [10,"X"], [50,"L"], [100,"C"], [500,"D"], [1000,"M"]]
    let specialLibrary = [[4,"IV"], [9,"IX"], [40,"XL"], [90,"XC"], [400,"CD"], [900,"CM"]];
    // Check if number is already in the library
    for (let i = 0; i < library.length; i++){
        let currentKey = library[i][0];
        let currentRoman = library[i][1];
        if (currentKey == num){
            return currentRoman
        }
    }

    // If number is not in library, split number into its components by power
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

    let finalRomanNum = ""; // initialize an empty string to store Roman numerals
    for (let component = 0; component < components.length; component++){     // loop through the array of components that make up num
        let currentComponent = components[component];
        // if component is less than 1000
        if (currentComponent < 1000){
            // If component is a special case such as 4, 9, 40, 90, 400, 900, use the special library
            let inSpecialLib = specialLibrary.some(subarray => subarray[0] === currentComponent);
            let subSpecialLibrary = specialLibrary.find(subarray => subarray[0] === currentComponent);
            if (inSpecialLib == true){  
                finalRomanNum += subSpecialLibrary[1];// construct the roman numeral for that component, e.g. IV, IX
            }
            // If component is not a special case, such as 300 or 200,
            else{
                // For each component, Find largest key smaller than the component
                let largestKey = 1;
                let largestRoman = "";
                let index = 0;
                for (let i = 0; i < library.length; i++){
                    let currentKey = library[i][0];
                    let currentRoman = library[i][1];
                    if (currentKey <= currentComponent && currentKey >= largestKey){
                        largestKey = currentKey;
                        largestRoman = currentRoman;
                        index = i;
                    }
                    if(currentKey > largestKey){
                        break;
                    }
                }
                let componentRemainder = currentComponent;
                while (componentRemainder !== 0){
                    if (componentRemainder >= largestKey){
                        finalRomanNum += largestRoman; // add the largest roman numeral, and subtract the value of the numeral. continue until remainder is smaller than the largest key
                        componentRemainder -= largestKey;
                    }
                    else if (componentRemainder < largestKey){
                        finalRomanNum += library[index - 1][1]; 
                        componentRemainder -= library[index - 1][0];
                        }
                }
            }
        }
        // if component is bigger than or equal to 1000, then its roman numeral must be a multiple of M, such as 2000 (MM), 3000 (MMM)
        else{  
            let componentRemainder = components[component];
            while (componentRemainder !== 0){
                finalRomanNum += library[6][1]; // add one M for every 1000 subtracted from the component
                componentRemainder -= library[6][0];
            }
        }
    }  
    return finalRomanNum;
}

// console.log(convertToRoman(5)); // roman: V (correct)
// console.log(convertToRoman(36)); // roman: XXXVI (correct)
// console.log(convertToRoman(44)); //  roman: XLIV (correct)
//console.log(convertToRoman(3999)); // roman : MMMCMXCIX (correct)
// console.log(convertToRoman(400)); // roman: CD (correct)
// console.log(convertToRoman(90)); // roman: XC (correct)
// console.log(convertToRoman(2000)); // roman: MM (correct)
// console.log(convertToRoman(29)); // roman: XXIX (correct)
