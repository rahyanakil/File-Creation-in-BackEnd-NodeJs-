const fs =require('fs')





//Write a file
async function writeFileSync(){
    await fs.writeFileSync('./example.html','<h1>Hello World!</h1>')
    console.log("Successfully Written")
}
(async()=>{
    await  writeFileSync()
})()