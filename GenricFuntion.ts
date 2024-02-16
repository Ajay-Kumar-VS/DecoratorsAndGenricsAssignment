// type having charAtMethod
type a={
    charAtMethod():void 
}

//function that only works with type that works only with type having charAtMethod in it
function genricFunction<T extends a>(input :T):void{
    input.charAtMethod()
}


//creating a type that have charAtMethod and other property
type b={
    a:string;
    charAtMethod():void
}


//object of type b
let c:b={
    a:"in charAtMethod",
    charAtMethod():void{
        console.log(this.a)
    }
}

//function calling
genricFunction<a>(c)


