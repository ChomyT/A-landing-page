// Task 1: Code a Person class
class person{
    constructor(name = "Tom", age = "20", energy = "100") {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy +=10;
        console.log('Energy is increasing, currently at:', this.energy)

    }
    doSomethingFun() {
        this.energy -=10;
        console.log('Energy is decreasing, currently at:', this.energy)

    }

    
}

// Task 2: Code a Worker class
class worker extends person{
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;  
    }
    
    goToWork() {
        this.xp += 10;
        console.log('Experience point is increasing, currently at:', this.xp)
    }
    
}
// Task 3: Code an intern object, run methods
function intern() {
    newIntern = new worker(0, 10, "Bob", 21, 110);
    newIntern.goToWork();
    return newIntern;
}

    intern();

// Task 4: Code a manager object, methods
function manager() {
    newManager = new worker(100, 30, "alice", 30, 120, 100);
    newManager.doSomethingFun();
    return newManager;
    }
manager();

