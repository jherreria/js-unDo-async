//Simulates User clicking undo fast.
//The undo logic is async call
//The calls are enqueued, the Promise picke the next on the queue

// Queue class
class Queue
{
  // Array is used to implement a Queue
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  enqueue(element) {
    // adding element to the queue
    this.items.push(element);
    console.log("Enqueued: "+ element);
  }
  dequeue() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if (this.isEmpty())
      return undefined;
    return this.items.shift();
  }

  // isEmpty function
  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }
  // printQueue()
}

function unDoPromised(queue) {
  var ttt = Math.random() *3000;
  return new Promise((resolve, reject) => {
    setTimeout(function restDoingUndo() {
      //check if elements to process exist
      if (queue.isEmpty()) {
        return resolve({
          "queue": queue
        });
      }
      // pick the next one on the queue
      let id = queue.dequeue();
      console.log("done unDoing: "+id+" latency:"+ttt);
      resolve({
        "queue": queue, "id": id+", "
      });
    }, ttt);

  })
  .then(value => {
    if (value.id) {
      msg += value.id;
      $('#msg').html(msg + icon);
    }
  })
}
var msg = 'Execution order: '
var icon = ' <i class="fa fa-smile-o"></i>'

var queue = new Queue();

console.log(msg);

for (var i = 1; i < 10; i++) {
  queue.enqueue(i);
  unDoPromised(queue);
}
//unDoPromised(queue);
