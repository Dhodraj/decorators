function IsPropertyString(){
    return function(target: any, propertyKey: string): void {
        let value = target[propertyKey];
        const getter = function() {
            return value;
        };
        const setter = function(newValue: string){
            if (typeof newValue !== 'string') {
                throw new Error(`The ${propertyKey} property must be a string.`);
            }
            value = newValue;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    }
}

class CustomerNameContoller {

    @IsPropertyString()
    stringArgument: string = "Hello";
    
    @IsPropertyString()
    numberArgument: number = 123;
}

const CustomerNameService = new CustomerNameContoller();

  
