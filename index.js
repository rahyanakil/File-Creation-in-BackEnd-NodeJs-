const fs =require('fs')





//Write a file
async function writeFileSync(){
    await fs.writeFileSync('./example.html','<h1>Hello World!</h1>')
    console.log("Successfully Written")
}

//File Read
async function readFileSync(){
   const data= await fs.readFileSync('example.html','utf8')
    console.log(data)
}

//File Rename
async function renameFileSync(){
    await fs.renameSync('example.html','rename.html')
     console.log("rename successfully")}
(async()=>{
    await  renameFileSync()
})()








