 //7. Create a function called runAfterDelay. It has two parameters: delay and callback. 
        //When called the function should wait delay seconds and then call the provided callback function. 
        //Try and call this function with different delays and different callback functions

function runAfterDelay(callback, delay) {
  setTimeout(callback, delay);
}
     
const add = function(x, y){
    const result = x + y;
    console.log('Add result:' + result);
}

const sub = function(x, y, z){
    const result = x - y - z;
    console.log('Sub result:' + result);
}


runAfterDelay(() => add(8, 8),2000);
runAfterDelay(() => sub(15, 8, 2),5000);


