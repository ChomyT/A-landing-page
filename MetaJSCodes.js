function logDairy() {
    var dairy = ['cheese', 'sour', 'cream', 'milk', 'yoghurt', 'ice cream', 'milkshake']
    for (let i = 0; i < dairy.length; i++)
        console.log(dairy[i]);
}
logDairy();



/*function birdCan() {
    const animal = {
        canJump: true
    };
    const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
    for (let i = 0; i < Object.create(animal).length; i++)
        console.log(bird(i));
}
birdCan();*/

function birdCan() {
    const animal = {
      canJump: true
    };
  
    const bird = Object.create(animal);
  
    bird.canFly = true;
  
    bird.hasFeathers = true;
  
    for (prop of Object.keys(bird)) {
      console.log(prop + ":" + bird[prop])
    }
  }
  birdCan();
  function animalCan() {
    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);

    bird.canFly = true;

    bird.hasFeathers = true;
    
    for (const prop in bird) {//loops over all properties in the object,  including the prototype's properties.
        console.log(prop + ":" + " " + bird[prop]);
    }
}

    animalCan();