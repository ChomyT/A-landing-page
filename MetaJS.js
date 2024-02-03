
    function scopeTest() {
        var y = 44;

        console.log(x);
    }

    var x = 33;
    scopeTest();
    //what will the code below return?
    
    class Cake {
        constructor(lyr) {
            this.layers = lyr;
        }

        getLayers() {
            return this.layers;
        }
    }

    class WeddingCake extends Cake {
        constructor() {
            super(2);
        }

        getLayers() {
            return super.getLayers() * 5;
        }
    }

    var result = new WeddingCake();
    console.log(result.getLayers());

    //

    function count(...food) {
        console.log(food.length)
    }
    
    count("Burgers", "Fries", null);
    //New code
    class Animal {

    }

    class Dog extends Animal {
        constructor() {
            this.noise = "bark";
        }

        makeNoise() {
          return this.noise;
        }
    }

    class Wolf extends Dog {
        constructor() {
            super();
            this.noise = "growl";
        }
    }

    var result = new Wolf();
    console.log(result.makeNoise());
//



