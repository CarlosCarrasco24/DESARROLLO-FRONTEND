console.log("robot.js cargado...");

function Robot(nombre){

    this.nombre = nombre;
    this.bombas = 5;

    this.programarBomba = function(retardo){

        var self = this;

        if(this.bombas == 0){
            
            console.log(`Al robor ${this.nombre} ya no le quedan bombas :-(`);

        } else {

            console.log(`${this.nombre} programa una bomba de aquí a ${retardo} segundos`);
            setTimeout(function(){
                console.log(`Bomba nº ${self.bombas} de ${self.nombre} acaba de explotar ************ BOOOOOOOM ***********`);
                self.bombas--;
            }, retardo * 1000);
        }
        
    }

}

var r1 = new Robot("Brutus M3");
var r2 = new Robot("Zulius 14");
