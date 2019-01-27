class Singleton  {

    constructor() {
        this.server = 'localhost';
        this.instance = this.instance ? this : this.instance;
        Singleton.connect = () => {
            console.log('Connect ' + this.server)
        };
        return Singleton
    }




}

let t1 = new Singleton();
let t2 = new Singleton();
console.log(t1 == t2);
t2.server = 'ryslan';
t2.connect();
