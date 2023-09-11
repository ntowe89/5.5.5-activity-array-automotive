class Vehicle {
    constructor(make, model, year, price, vin, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.vin = vin;
        this.color = color;
    }

    drive(){
        console.log(this.year + ' ' + this.make + ' ' + this.model + ' drives')
    }
    paint(color){
        this.color = color;
    }
}

const v = new Vehicle("Jord", "J-051", 2015, 50000, "12312", undefined);

v.paint("blue");
v.drive();
console.log(v);

