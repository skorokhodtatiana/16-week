let priceCondition = [
    ['new', 1000],
    ['old', 500]
];

let sumPrice = 0;

function getPriceCondition(elem) {
    console.log(elem.value);
    let valuePriceCondition = elem.value;

    for (i = 0; i < priceCondition.length; i++) {
        if (priceCondition[i][0] == valuePriceCondition) {
            let costCondition = priceCondition[i][1];
            sumPrice += costCondition;
            console.log(sumPrice);
        }

        if (valuePriceCondition != "") {
            autoTransmission.disabled = false;
            manualTransmission.disabled = false;
        }
    }
}

let priceTransmission = [
    ['auto', 900],
    ['manual', 450]
]

function getPriceTransmission(elem){
    console.log(elem.value);
    let valuePriceTransmission = elem.value;
    
    for(i=0; i<priceTransmission.length; i++){
        if(priceTransmission[i][0] == valuePriceTransmission){
            let costTransmission = priceTransmission[i][1];
            sumPrice += costTransmission;
            console.log(sumPrice);
        }

        if (valuePriceTransmission != "") {
            brandCar.disabled = false;
        }
    }
}



let priceBrand = [{
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
            sumPrice += costBrand;
            console.log(sumPrice);
        }
    }
    if (valueBrand != 'mark') {
        selectBrandCar2.disabled = false;
    }
})