const fs = require("fs");

const quote2 = "File created 😁";

for (let i = 0; i <= 10; i++) {
    fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
        console.log(`text-${i} created`);
    });
}
