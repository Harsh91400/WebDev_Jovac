const {writeFile} = require('fs/promises');

let data="I am writting the data using Promises API";

async function writeData(data){
    await writeFile(
        "World.txt",
        data,
        {
            encoding:'utf-8',
            flag:'w'
        }
    )
    console.log("I'm async writeData");
}
writeData(data);

let write = writeFile(
    "World.txt",
    data,
    {
        encoding:'utf-8',
        flag:'w'
    }
)
write.then(()=> {
    console.log("File written successfully");
})
.catch((err)=> {
    console.log("Error:",err.massage);
})

console.log("Sir")
console.log("JI");
console.log("Hanji")