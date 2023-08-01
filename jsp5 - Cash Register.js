function checkCashRegister(price, cash, cid) {
    const currencyArr = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE",5], ["TEN",10], ["TWENTY",20], ["ONE HUNDRED", 100]];
    // calculate the total available funds in the cash register
    var availableFunds = Number(cid.reduce((total, currentValue) => total + currentValue[1], 0).toFixed(2));
    var change = cash - price;
    var fundSufficiency = availableFunds - change;
    var insufficientFunds = {status:"INSUFFICIENT_FUNDS", change:[]};
    var closedRegister = {status:"CLOSED", change: cid};

    // if there is just enough cash in the register for the customer's change
    if (fundSufficiency == 0){
      return closedRegister;
    }
    // if there is not enough cash 
    else if (fundSufficiency < 0){
      return insufficientFunds;
    }
    // if there is enough cash......
    else{
      var changeRemainder = Number(change.toFixed(2));
      var changeArr = []; // initialize a new array to record change owed to customer
      for (let i = currencyArr.length - 1; i >= 0; i--){
        var currencyCounter = 0;
        var currencyValue = currencyArr[i][1];
        if (changeRemainder - currencyValue >= 0){
          while (changeRemainder - currencyValue >= 0 && currencyCounter * currencyValue < cid[i][1]){
            changeRemainder = Number(changeRemainder.toFixed(2)) - Number(currencyValue.toFixed(2));
            currencyCounter++;
          }
          var currencyTotal = currencyCounter * currencyValue;
          var arr = [currencyArr[i][0], currencyTotal];
          changeArr.push(arr);
        }
      }
      // if there is enough cash BUT NOT enough of the right type of currency
      if (changeRemainder !== 0){
        return insufficientFunds;
      }
      // if there is enough cash AND there is enough of the right type of currency
      return {status: "OPEN", change: changeArr};
    }
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]})