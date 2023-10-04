class person{
    constructor(_Fname,_Lname,_emailID,_PhoneNo,_Company){
        this.FirstName = _Fname
        this.LastName = _Lname
        this.EmailID = _emailID
        this.PhoneNumber = _PhoneNo
        this.Company = _Company
    }

    greet(){

        console.log(`Hi I am ${this.FirstName} ${this.LastName} \nI am working as Developer at ${this.Company}\nContact me by calling at ${this.PhoneNumber} or emailing at ${this.EmailID} `)
    }

}

let Person_1_details = new person("Mohamed","Ismail","Ismail@gmail.com",8553943017,"Deloitte")
let Person_2_details = new person("Mohamed","Adam","Adam@gmail.com",123456789,"LGSOFT")
Person_1_details.greet()
Person_2_details.greet()
