//4.write a class to calculate uber price.
class Uber {
    constructor(Base_Fare=10,CostPerMile=2,CostPerMinute=1,BookingFee=6,time=1,mile=1){
    this.Base_Fare=Base_Fare;
    this.CostPerMile=CostPerMile
    this.CostPerMinute=CostPerMinute;
    this.BookingFee=BookingFee;
    this.time=time;
    this.mile=mile;
    }
    totalPrice(time=this.time , mile=this.mile){
        console.log(`the total price is RS.${(this.Base_Fare)+(this.BookingFee)+
            ((this.CostPerMinute)*(time))+((this.CostPerMile)*(mile))} only`);
    }
}
let price = new Uber();
price.totalPrice(10,100); 
price.totalPrice(15,20); 