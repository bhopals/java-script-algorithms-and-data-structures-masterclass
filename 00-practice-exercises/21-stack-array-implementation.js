let stack = [];

// Add elements in a Stack
stack.push("google");
stack.push("instagram");
stack.push("youtube");
console.log(stack); // ["google", "instagram", "youtube"]

// Remove elements in a Stack
stack.pop();
stack.pop();
stack.pop();
console.log(stack); // []

// Insert at the beginning
stack.unshift("google");

// Remove at the beginning
stack.shift("google");
