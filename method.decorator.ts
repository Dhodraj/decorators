function IsString(){
  return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const writtenFunction = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const argumentIndex: number = 0;
      const argumentPassed = args[argumentIndex]?.trim();
      if (!argumentPassed || argumentPassed?.constructor !== String) {
        throw new Error('Argument passed must be a string')
      } else {
        return writtenFunction.apply(this, args)
      }
    };
    return descriptor;
  }
}


class UserNameController {
    @IsString()
    getUserByUserId(name: unknown) {
        return {name};
    }
}

const UserNameService = new UserNameController();
const argumentString: string = "  ";
const argumentNumber: number = 1;
console.log(UserNameService.getUserByUserId(argumentString))