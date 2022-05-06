const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");

// Create a file and data to it ✅
// fs.writeFile

// const quote = "Good to go !";

// fs.writeFile("./awesome.html",quote, (err) => {
//     console.log("Quote written to awesome.js -> Good to go !");
// })

//task 1 - 
//Create the below files with quote2 as the content
// /backup/
// text-1.html
// text-2.html
// text-3.html  
// ...
// text-10.html

// const quote2 = "Live more, worry less"; 
// for(let i=1;i<11;i++){
//     fs.writeFile(`./backup/text-${i}.html`,quote2, (err) => {
//         console.log(`Completed writing text-${i}.html`);
//     })
// }


// task-quote-3 - 

// const quote3 = "Happy New Year 🎉"
// const task = (num) => {
//     for(let i=1;i<=num;i++){
//         fs.writeFile(`./backup/text-${i}.html`,quote3, (err) => {
//             console.log(`Completed writing text-${i}.html`);
//         })
//     }
// };
// const [ , ,n] = process.argv;

// console.log(task(n));


// Reading from a file ✅
// fs.readFile

// fs.readFile("./cool.txt","utf-8",(err,data) => {
//     if(err){
//         console.log("Error ❌", err);
//     }
//     else{
//         console.log("Content of file is :", data);
//     }
// });

// appending to file ✅
// fs.appendFile

// const niceQuote = "\ndont let's Have every new day a less ordinary ! 😎";

// fs.appendFile("./cool.txt",niceQuote, (err) => {
//         console.log("niceQuote written ");
//     });



// Deleting a file ❌

// fs.unlink("./toRemove.txt",(err) => {
//     console.log("File Dleted Successfully !");
// });

// Read files in a directory ✅
// fs.readdir

// fs.readdir("../MANGO COMMANDS", (err,files) => {
//     console.log("All files are:", files);
// });




//session end task ❓
// delete all files in backup folder

fs.readdir("./backup", (err, files) => {
    files.forEach((fileName) => {
        fs.unlink(`./backup/${fileName}`, (err) => {
            console.log("deleted successfully")
        });
    });
});

