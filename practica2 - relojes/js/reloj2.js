console.log("reloj 2 cargado...");

var reloj = {

    tiempoTotal: 0,
    intervalId: undefined,
    sentido: 1,

    start:function(){
        
        var self = this; // Un clásico!!! hata que llegó ES6 con las funciones arrow =>

        self.intervalId = setInterval(function(){
        
            self.tiempoTotal += self.sentido;

            let horas = ("0" + Math.floor(self.tiempoTotal / 3600)).slice(-2);
            let minutos = ("0" + Math.floor(self.tiempoTotal / 60 % 60)).slice(-2);
            let segundos = ("0" + self.tiempoTotal % 60).slice(-2);

            console.log(`${horas}:${minutos}:${segundos}`);

        },1000);
    },

    pause:function(){
        clearInterval(this.intervalId);
    },

    resume:function(){
        this.start();
    },

    reset:function(){
        this.tiempoTotal = 0;
        clearInterval(this.intervalId);
    },

    invert:function(){
        this.sentido *= -1;
    }
}

var reloj2 = {

    tiempoTotal: 0,
    intervalId: undefined,
    sentido: 1,

    start:function(){
        
        var self = this; // Un clásico!!! hata que llegó ES6 con las funciones arrow =>

        self.intervalId = setInterval(function(){
        
            self.tiempoTotal += self.sentido;

            let horas = ("0" + Math.floor(self.tiempoTotal / 3600)).slice(-2);
            let minutos = ("0" + Math.floor(self.tiempoTotal / 60 % 60)).slice(-2);
            let segundos = ("0" + self.tiempoTotal % 60).slice(-2);

            console.log(`${horas}:${minutos}:${segundos}`);

        },1000);
    },

    pause:function(){
        clearInterval(this.intervalId);
    },

    resume:function(){
        this.start();
    },

    reset:function(){
        this.tiempoTotal = 0;
        clearInterval(this.intervalId);
    },

    invert:function(){
        this.sentido *= -1;
    }
}