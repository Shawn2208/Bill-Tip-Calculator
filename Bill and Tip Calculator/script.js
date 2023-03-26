const billInput = 
document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = 
document.getElementById('numberOfPeople');
const perPersonTotalDiv = 
document.getElementById('perPersonTotal');

// getting number from the number div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {

    const bill = Number(billInput.value); // getting input and converting to number

    const tipPercent = Number(tipInput.value) / 100; // converting to percent

    const tipAmount = bill * tipPercent; // get total tip amount

    const total = tipAmount + bill; // calculate total tip amount

    const perPersonTotal = total / numberOfPeople; // calculate per person total

    perPersonTotalDiv.innerText = `£${perPersonTotal.toFixed(2)}` // updating
    // personTotal on DOM & showing it to the user
};
// split the bill between more people
const increasePeople = () => { // adding more people
    numberOfPeople += 1; // increase the number
    numberOfPeopleDiv.innerText = numberOfPeople; // updating DOM

    calculateBill() // calculate bill based on new number
};
// splits bill fewer people
const decreasePeople = () => {
    if (numberOfPeople <= 1) {
        return;
    } 

    numberOfPeople -= 1;
    numberOfPeopleDiv.innerText = numberOfPeople;
};