function decode(message_file) {
  const fs = require("fs");
  const data = fs.readFileSync(message_file, "utf8");
  const lines = data.split("\n").filter(Boolean);
  const message_words = [];
  let current_line = 1;
  let current_num = 1;
  for (const line of lines) {
    const [num, word] = line.split(" ");
    if (parseInt(num) == current_num) {
      message_words.push(word);
      current_line++;
      current_num = (current_line + 1) / 2;
    }
  }
  return message_words.join(" ");
}

const decoded_message = decode("message.txt");
console.log(decoded_message);

// function decode(message_file) {
//   const fs = require("fs");
//   const data = fs.readFileSync(message_file, "utf8");
//   const lines = data.split("\n").filter(Boolean);
//   const message_words = [];
//   const pyramid = [];
//   let current_line = 1;
//   let current_num = 1;
//   for (const line of lines) {
//     const [num, word] = line.split(" ");
//     pyramid.push(parseInt(num));
//     if (parseInt(num) === current_num) {
//       message_words.push(word);
//       current_line++;
//       current_num = (current_line * (current_line + 1)) / 2;
//     }
//   }
//   const message = [];
//   for (let i = pyramid.length - 1; i >= 0; i--) {
//     if (pyramid[i] === current_num - 1) {
//       message.unshift(message_words[i]);
//       current_num--;
//     }
//   }
//   return message.join(" ");
// }

// const decoded_message = decode("message.txt");
// console.log(decoded_message); //

// // This function takes a file name as an argument and returns a decoded message as a string
// function decode(message_file) {
//   // Import the fs module
//   const fs = require("fs");

//   // Read the file content as a string
//   let content = fs.readFileSync(message_file, "utf8");

//   // Split the content by line breaks and store each line in an array
//   let lines = content.split("\n");

//   // Create an empty object to store the words and their corresponding numbers
//   let words = {};

//   // Loop through each line
//   for (let line of lines) {
//     // Split the line by space and store the number and the word in variables
//     let [number, word] = line.split(" ");

//     // Convert the number to an integer
//     number = parseInt(number);

//     // Store the word and the number as a key-value pair in the object
//     words[number] = word;
//   }

//   // Create an empty array to store the numbers in the pyramid order
//   let pyramid = [];

//   // Define a variable to keep track of the current row in the pyramid
//   let row = 1;

//   // Define a variable to keep track of the current index in the array
//   let index = 0;

//   // Loop until all the numbers are added to the array
//   while (index < Object.keys(words).length) {
//     // Create an empty array to store the numbers in the current row
//     let row_array = [];

//     // Loop through the numbers in the current row
//     for (let i = 0; i < row; i++) {
//       // Get the number at the current index and add it to the row array
//       let number = Object.keys(words)[index];
//       row_array.push(number);

//       // Increment the index
//       index++;
//     }

//     // Add the row array to the pyramid array
//     pyramid.push(row_array);

//     // Increment the row
//     row++;
//   }

//   // Create an empty string to store the decoded message
//   let message = "";

//   // Loop through the pyramid array from the last element to the first
//   for (let i = pyramid.length - 1; i >= 0; i--) {
//     // Get the row array at the current index
//     let row_array = pyramid[i];

//     // Loop through the row array
//     for (let number of row_array) {
//       // Get the word that corresponds to the number and add it to the message
//       let word = words[number];
//       message += word + " ";
//     }
//   }

//   // Trim the trailing space and return the message
//   return message.trim();
// }
// // Call the decode function and log the result
// console.log(decode("message.txt"));
