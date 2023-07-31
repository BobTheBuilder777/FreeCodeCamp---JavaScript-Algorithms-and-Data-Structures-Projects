function telephoneCheck(str) {
    var regex = /^(1\s?)?((\(\d{3}\))|(\d{3}))[-\s]?(\d{3})[-\s]?(\d{4})$/;
    var match = regex.test(str)
    return match;
  }
  
 console.log(telephoneCheck("555-555-5555"));