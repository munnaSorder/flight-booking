
//ticket increase and decrease function
function ticketCost(count, classes){
    const userClass = document.getElementById(classes+ 'Class');
    const userClassValue = userClass.value;
    const userClassNewValue = parseInt(userClassValue)
    if(count == true){
        userClass.value = userClassNewValue + 1;
        handelTicketCost();
    }
    if(count == false && userClass.value > 0){
        userClass.value = userClassNewValue - 1;
        handelTicketCost();
    }
}

//total ticket & other cost calculation function
function handelTicketCost(){
    //first Class Ticket Cost Calculation
    const firstClass = document.getElementById('firstClass');
    const firstClassValue = firstClass.value;
    const totalFirstClassCost = parseInt(firstClassValue) * 150;

    //economy class total cost calculation
    const economyClass = document.getElementById('economyClass');
    const economyClassValue = economyClass.value;
    const totalEconomyClass = parseInt(economyClassValue) * 100;

    //total Ticket cost Calculation
    const totalTicketCost = totalFirstClassCost + totalEconomyClass;

    //govVat Calculation
    const govVat =  Math.round(totalTicketCost) * 0.1;

    //grand Total Calculation
    const grandTotal = totalTicketCost + govVat;

    //print result
    document.getElementById('subTotal').innerText = '$' + totalTicketCost;
    document.getElementById('vat').innerText = '$' + govVat;
    document.getElementById('grandTotal').innerText = '$' + grandTotal;
}


document.getElementById('bookNow').addEventListener('click', function(){
    const firstClass = document.getElementById('firstClass').value;
    const economyClass = document.getElementById('economyClass').value;
    const total = document.getElementById('grandTotal').innerText;


    window.confirm('You have purchased a total of first class tickets ' + firstClass + ' and You have purchased a total of economy class tickets ' + economyClass + ' You will have the total cost ' + total);
})