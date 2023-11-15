const fs = require("fs");

// reading text asynchronously

fs.readFile('./texts/read.txt', "utf-8", (error, data)=>{
        if(error){
                throw Error("Error reading text");
        }

// writitng file
        fs.writeFile('./texts/read2.txt', data, "utf-8", (err)=>{
                if(err){
                        throw Error("error writting data")
                }
        })
})
console.log("testing asynchronously");