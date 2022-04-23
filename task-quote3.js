
const task = (num) => {
    for(let i=1;i<(num+1);i++){
        fs.writeFile(`./backup/text-${i}.html`,quote2, (err) => {
            console.log(`Completed writing text-${i}.html`);
        })
    }
};
const [ , ,n] = process.argv;

console.log(task(n));

