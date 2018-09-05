let product = {}
    
    product.name = 'Ferrari';
    let student = {};
     product.price = 300000;
    student.name = 'Jon';
   student.scolarship = 100;
   
   
   
   function sayMyName(){
       console.log(this.name);
   }
   
   product.say = sayMyName;
   student.say = sayMyName;
   
   
   product.say();
   student.say();
   
   let lambo = {
       name: 'Lamborghini',
       price: 500000,
       say:sayMyName,
       showPrice(){
           console.log(this.name + this.price)
           
       }
       
   }
   
   lambo.say();
   lambo.showPrice();
   
   
   function Car(name,price){
       
       this.name = name;
       this.price = price;
       this.say = sayMyName;
     
   }


class SuperCar {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    say() {
        console.log(this.name, this.price);
    }
}

let teslaRoadster = new SuperCar('Tesla Roadster', 250000);
teslaRoadster.say();

let teslaRoadsterExclusive = Object.create(teslaRoadster);
teslaRoadsterExclusive.price = 300000;
teslaRoadsterExclusive.say();

const teslaString = JSON.stringify(teslaRoadster);
console.log(teslaString);

const teslaExclusiveString = JSON.stringify(teslaRoadsterExclusive);
console.log(teslaExclusiveString);

const porsche = JSON.parse('{"name":"Porsche 911","price":275000}');
