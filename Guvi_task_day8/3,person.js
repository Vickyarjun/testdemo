class person {
    constructor(Name,Father_Name,Mother_Name,Gender,Age,Address,Mobile_No,Email,Voter_ID,Aadhar_No) {
    this.Name = Name ;
    this.Father_Name = Father_Name ;
    this.Mother_Name = Mother_Name;
    this.Gender = Gender; 
    this.Age=Age
    this.Address = Address ;
    this.Mobile_No = Mobile_No; ;
    this.Email = Email;
    this.Voter_ID=Voter_ID
    this.Aadhar_No = Aadhar_No;
    }
    person_name() {
    return `My name is ${this.Name}`;
    }
    person_father_name() {
    return `My father name is ${this.Father_Name}`;
    }
    person_mother_name() {
    return `My mother name is ${this.Mother_Name}`;
    }
    person_gender() {
    return `I am a ${this.Gender}`;
    }
    person_age() {
        return `My age is ${this.Age}`;
        }
    person_address() {
    return `My address is ${this.Address}`;
    }
    person_mobile_no() {
    return `My mobile_no is ${this.Mobile_No}`;
    }
    person_Email() {
    return `My email id is ${this.Email}`;
    }
    person_voter_id() {
        return `Voter id no is ${this.Voter_ID}`;
        }
    person_aadhar_no() {
        return `Aadhar_no is ${this.Aadhar_No}`;
        }
    }
    //object
    const person_obj = new person("Vignesh Arjunan","Arjunan","Selvarani","","Male","21",
    "no2_Ennore_Chennai","1234567891","vickyarjun002@gmail.com","987654321","192837465");
    console.log(person_obj.person_name());
    console.log(person_obj.person_father_name());
    console.log(person_obj.person_mother_name());
    console.log(person_obj.person_gender());
    console.log(person_obj.person_age());
    console.log(person_obj.person_address());
    console.log(person_obj.person_mobile_no());
    console.log(person_obj.person_Email());
    console.log(person_obj.person_voter_id());
    console.log(person_obj.person_aadhar_no());