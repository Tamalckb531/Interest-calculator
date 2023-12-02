const capital = document.getElementById('capital');
const years = document.getElementById('years');
const interest = document.getElementById('interest');
const total_amount = document.getElementById('total_amount');
const compound = document.getElementById('compound');
const calculate = document.getElementById('calculate');

const calcultaion = () =>{
    let capital_value = parseInt(capital.value);
    let year_value = parseInt(years.value);
    let interest_value = parseInt(interest.value)/100;

    console.log(compound.checked);

    if(compound.checked){
        //A=P(1+ nr) ^ nt here n = 1;
        let finalAmount =  (capital_value *Math.pow(1+interest_value, year_value));
        finalAmount = Math.round(finalAmount * 100) / 100;
        return finalAmount;
    }else{
        //A = P + Ptr
        return ( capital_value + (capital_value*year_value*interest_value) );
    }

}

calculate.addEventListener("click", (e)=>{
    let result = calcultaion();
    if(result){
        total_amount.value = result;
    }else{
        total_amount.value = 0;
    }
})