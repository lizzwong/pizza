class Pizza {
    constructor ( main = 'cheese', topping, ){
        this.main = main;
        this.topping = topping
        console.log('In pizza constructor', this);
        
    }

        makePizza(){
            let toppings = this.toppings.split(' ');
            console.log(`Pizza with ${toppings.length} toppings`);
            
        }

        

}

class PizzaCost extends Pizza{
    constructor(main, topping, cost) {
        super(main, topping) 
            let toppings = this.topping.split(' ');
            let toppingCost = toppings.length * .99;
            this.cost = 10 + toppingCost
            console.log('Toppings for this pizza costs', this.cost);
        
    
    }
    
}

let mashedPotatoPizza = new PizzaCost ('main', 'mashedPotatoes bacon tomato broccoli' )


