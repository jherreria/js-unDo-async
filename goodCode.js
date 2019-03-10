//Simulates User clicking undo fast. 
//The undo logic is async call

// Queue class 
class Queue 
{ 
    // Array is used to implement a Queue 
    constructor() 
    { 
        this.items = []; 
    } 
                  
    // Functions to be implemented 
    enqueue(element) {     
    // adding element to the queue 
    this.items.push(element); 
    } 
    dequeue(){ 
    // removing element from the queue 
    // returns undefined when called  
    // on empty queue 
    if(this.isEmpty()) 
        return undefined; 
    return this.items.shift(); 
} 
    // front() 
  
// isEmpty function 
  isEmpty() { 
    // return true if the queue is empty. 
    return this.items.length == 0; 
  }
    // printQueue() 
} 

function unDoPromised(queue){
  var ttt = Math.random() *3000;
  return new Promise((resolve, reject) =>{
    setTimeout(function restDoingUndo() {
      //check if elements to process exist
      if(queue.isEmpty()) {
        return resolve({"queue":queue});
      }
      let id  = queue.dequeue();
      console.log("done unDoing: "+id+" latency:"+ttt);
      resolve({"queue":queue, "id":id+", "});
    }, ttt);
      
  })
  .then(value => {
    if(value.id){
      msg += value.id;
      $('#msg').html(msg + icon);
    }
    if (value.queue && !value.queue.isEmpty()){
      unDoPromised(value.queue);
    }
  })
}
var msg = 'Execution order: '
var icon = ' <i class="fa fa-smile-o"></i>'

var queue = new Queue();

console.log(msg);

for (var i=1;i<5;i++){
    queue.enqueue(i);
    //simulate by invokeing the unDoPromised
    unDoPromised(queue);
}
