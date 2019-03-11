//Simulates User clicking undo fast. 
//The undo logic is async call


function unDoPromised(id){
  var ttt = Math.random() *3000;
  return new Promise((resolve, reject) =>{
    setTimeout(function restDoingUndo() {
      console.log("done unDoing: "+id+" latency:"+ttt);
      resolve(id+", ");
    }, ttt);
      
  })
  .then(value => {
    msg += value;
    $('#msg').html(msg + icon)
  })
}
var msg = 'Execution order: '
var icon = ' <i class="fa fa-frown-o"></i>'

console.log(msg);
for (var i=1;i<10;i++){
    unDoPromised(i);
}
    
