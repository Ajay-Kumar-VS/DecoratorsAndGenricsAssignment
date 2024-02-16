
//classDecorator
function classDecorator(constructorfunction: Function): void {

    console.log("class decorator is getting executing")
}

// methodDecorators
function methodDecorators(target: any, key: string, descriptor: PropertyDescriptor): void {
    console.log("method defination is : ", target)
    console.log("method name is : ", key)
    console.log("descriptor : ", descriptor)

}

// accessorDecorators
function accessorDecorators(target: any, key: string, descriptor: PropertyDescriptor): void {
    descriptor.enumerable = false
    console.log("method name is : ", key)
    console.log("descriptor : ", descriptor)

}

// propertyDecorators
function propertyDecorators(target: any, propertyKey: string): void {

    console.log("propertyName name is : ", propertyKey)

}

// parameteredDecorator
function parameteredDecorator(value: number): Function {
    return function (functionName: Function) {
        console.log(`inside  parameteredDecorator and value is passed from decorator is ${value} `)
    }
}


@classDecorator
class Decorators {
    private property1: string = "property1"


    @propertyDecorators
    property2: string = "property2"

    constructor(value: string) {
        console.log("constructor is executing")
    }
    @methodDecorators
    classMethod(): void {
        console.log("inside the class method")
    }

    @accessorDecorators
    get getterMethod(): string {
        return this.property1
    }

    @parameteredDecorator(3)
    customMethod(): void {
        console.log("inside customMethod")
    }


}