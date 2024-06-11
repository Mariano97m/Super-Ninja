class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName = ()=>{
        console.log("Nombre del ninja"+ "" + this.nombre);
    }
    showStats = ()=>{
        console.log("Nombre del ninja "+ this.nombre + " Fuerza "+ this.fuerza + " Velocidad " + this.velocidad+ " Salud "+ this.salud );
    }
    drinksake = ()=>{
        console.log("Salud",this.salud += 10);
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinksake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom = () => {
        this.drinksake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}
const superSensei = new Sensei ("Master Plinter");
superSensei.sayName();
superSensei.showStats();
superSensei.drinksake();
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();