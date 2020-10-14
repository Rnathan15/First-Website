import '../styles/styles.css'
/*import Person from './modules/person.js'*/
import MobileMenu from './modules/mobileMenu'

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept()
}





/* JS Lessom */




/*

class Adult extends Person {
  payTaxes(){
    console.log(this.name + " now owes 0 taxes.")
  }
}

let john = new Person("John Doe", "purple");
john.greet();

let jane = new Adult("Jane Smith", "red");
jane.greet();
jane.payTaxes();

*/