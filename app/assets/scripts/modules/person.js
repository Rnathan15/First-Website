class Person{
    constructor(name, favoriteColor){
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    greet(){
        console.log("Hello There! My name is "+ this.name + "and fav color is " + this.favoriteColor+".");
    }
}

  export default Person