// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;

function count() {
  console.log(counter);
  counter++;
  setTimeout(count, 1000); // Call count function again after 1 second
}

count(); // Start the counter