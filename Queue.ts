class queue<T>{
    private queueArray:T[]=[];
    //method to check is queue is empty
    isEmpty():boolean{
        if(this.queueArray.length===0){
            return true
        }else{
            return false
        }
    }
    //method to add element to queue
    enqueue(item:T):void{
        this.queueArray.push(item)
    }
    // method to remove element from queue
    dequeue():T|void {
        if(this.isEmpty()){
            throw new Error("Queue is empty")
        }
        return this.queueArray.shift()
          
    }
    //method to get size of queue
    size():number{
        return this.queueArray.length
    }

    // method to get front element from queue
    front():T |void {
        if(this.isEmpty()){
            throw new Error("Queue is Empty")
        }
        return this.queueArray[0];
        
    }
    //method to get rear element from queue
    rear():T|void{
        if(this.isEmpty()){
            throw new Error("Queue is Empty")
        }
        return this.queueArray[this.queueArray.length-1];
    }
}


let newQueue= new queue<String>()
console.log(newQueue.size())
console.log(newQueue.enqueue("a"))
try{
    console.log(newQueue.dequeue())
console.log(newQueue.dequeue())
}catch(error){
    console.error((error as Error).message)
}



console.log(newQueue.enqueue("ab"))
console.log(newQueue.enqueue("b"))
console.log(newQueue.enqueue("c"))

console.log(newQueue.rear())
console.log(newQueue.front())









