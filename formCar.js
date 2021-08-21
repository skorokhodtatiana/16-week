const priceCondition = [
    ['new', 1000],
    ['old', 500]
];

let sumPrice = 0;

const elemNewCondition = document.getElementById('newCondition');
const elemOldCondition = document.getElementById('oldCondition');

elemNewCondition.addEventListener('change', function (event) {
    let valueCondition = event.target.value;

    if (priceCondition[0][0] == valueCondition) {
        console.log(priceCondition[0][1]);
        let priceNewCondition = priceCondition[0][1];
        sumPrice += priceNewCondition;
        console.log(sumPrice);
    }
    if(valueCondition != ""){
        autoTransmission.disabled = false;
            manualTransmission.disabled = false; 
    }

})

elemOldCondition.addEventListener('change', function (event) {
    let valueCondition2 = event.target.value;

    if (priceCondition[1][0] == valueCondition2) {
        console.log(priceCondition[1][1]);
        let priceOldCondition = priceCondition[1][1];
        sumPrice += priceOldCondition;
        console.log(sumPrice);
    }

    if(valueCondition2 != ""){
        autoTransmission.disabled = false;
            manualTransmission.disabled = false; 
    }
})

console.log(sumPrice);

// elemCondition.change = function(event){
//     let valueCondition = event.target.value;
//      console.log(valueCondition);
// }



// let valueChecked =  document.getElementsByName('condition').querySelectorAll('input:checked');
// console.log(valueChecked);


// findCondition.addEventListener('change',function(event){
// let valueCondition = event.target.value;
// console.log(valueCondition);

// if(valueCondition == true){
//     autoTransmission.disabled = false;
//     manualTransmission.disabled = false;
// }
// })


// oldCondition.addEventListener('onclick',function(event){
//     const valueCondition = event.target.value;
//     if(valueCondition != ''){
//         autoTransmission.disabled = false;
//         manualTransmission.disabled = false;
//     }
//     })



const priceBrand = [{
        value: 'ferrari',
        price: 1000
    },
    {
        value: 'bmw',
        price: 800
    },
    {
        value: 'audi',
        price: 600
    },
    {
        value: 'skoda',
        price: 400
    }
];

const selectBrandCar = document.getElementById('brandCar');
const selectBrandCar2 = document.getElementById('brandCar2');

selectBrandCar.addEventListener('change', function (event) {
    const valueBrand = event.target.value;
    console.log(valueBrand);

    for (i = 0; i < priceBrand.length; i++) {
        if (priceBrand[i].value == valueBrand) {
            let costBrand = priceBrand[i].price;
            console.log(priceBrand[i].price);
            sumPrice = +costBrand;
            console.log(sumPrice);
        }
    }
    if (valueBrand != 'mark') {
        selectBrandCar2.disabled = false;
    }
})