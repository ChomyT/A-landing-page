
    var globalVar = 77;

    function scopeTest() {
        var localVar = 88;
        console.log(localVar);
    }

    function meal(animal) {
        animal.food = animal.food + 10;
    }

    var dog = {
        food: 10
    };
    meal(dog);
    meal(dog);

    console.log(dog.food);
    function two() {
        return 2;
    }

    function one() {
        return 1;
    }

    function calculate(initialValue, incrementValue) {
        return initialValue() + incrementValue() + incrementValue();
    }

    console.log(calculate(two, one));

//Calculating the price of 2 pairs of shoes
//functional programming
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, stateTax){
    return shoes * stateTax
}
 var toPay = totalPrice(shoes, stateTax)

 console.log(toPay);








    