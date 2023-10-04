class CalculatePrice{
    constructor(_basefare, _ratepermile ){
        this.basefare = _basefare,
        this.ratepermile = _ratepermile
    }

    pricecaculate(distance){

        const totalfare = this.basefare + this.ratepermile * distance;
        return totalfare;
    }
}

let customer1 = new CalculatePrice(10,1.5)
const finalfare = customer1.pricecaculate(14)
console.log(`The trip ends Totalfare is ${finalfare}`)
  
