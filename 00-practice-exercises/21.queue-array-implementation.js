// FIRST WAY - Use PUSH and SHIFT

const queue = [];
queue.push("FIRST");
queue.push("SECOND");
queue.push("THIRD");

queue.shift(); //FIRST
queue.shift(); //SECOND
queue.shift(); //THIRD

// SECOND WAY - Use UNSFHIT and POP

queue = [];
queue.unshift("FIRST");
queue.unshift("SECOND");
queue.unshift("THIRD");

queue.pop(); //FIRST
queue.pop(); //SECOND
queue.pop(); //THIRD
