//2.Convert the UML diagram to Typescript class. - use number for double
class Circle{
    constructor(radius=1.0,color="blue"){
        this.radius = radius;
        this.color = color;
    }
    toString(radius=this.radius){
        this.radius = radius;
        return `after converting to string ${(this.radius).toString()+(this.color).toString()}`
    }

    circle(){
        return `color is ${this.color} and radius is ${this.radius}`;
    }
    circle(radius){
        this.radius=radius;
        return `radius is ${this.radius}`;
    }
    circle(radius,color){
        this.radius=radius;
        this.color=color;
        return `the radius is ${this.radius} and color is ${this.color}`;
    }
    setRadius(radius=1.0){
        this.radius=radius;
    }
    getRadius(){
        return `the radius by get and set is ${this.radius}`;
    }
    setColor(color="blue"){
        this.color=color;
    }
    getColor(){
        return `the color by get and set is ${this.color}`;
    }

    getArea(){
        return `the area is ${(this.radius)*(this.radius)*4}`;
    }
    getCircumference(){
        return `the circumference is ${(this.radius)*2*(Math.PI)}`;
    }
}
let circle1 = new Circle(6,"green");

console.log(circle1);

console.log(circle1.circle()); //undefined since the medthod1 is overrided by method2 and by method3
console.log(circle1.circle(5)); //radius is 5 and color is undefined because method2 is overrided by method 3
console.log(circle1.circle(4,"grey")); //radius is 5 and color is grey executes with no issues.
circle1.setRadius();
console.log(circle1.getRadius()); //set radius to default to 1.0 and accessed by getRadius() method.
circle1.setColor();
console.log(circle1.getColor()); //set color to default red and accessed by getColor() method.
console.log(circle1.toString(6));
console.log(circle1.getArea()); 
console.log(circle1.getCircumference());