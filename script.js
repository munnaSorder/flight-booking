function ticketCost(count, classes){
    const userClass = document.getElementById(classes+ 'Class');
    const userClassValue = userClass.value;

    if(count == true){
        const userClassNewValue = parseInt(userClassValue)  + 1;
        userClass.value = userClassNewValue;
    }
    if(count == false && userClass.value > 0){
        const userClassNewValue = parseInt(userClassValue)  - 1;
        userClass.value = userClassNewValue;
    }
}