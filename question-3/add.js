const fs=require('fs')
const path=require('path')

if (!fs.existsSync(path.join(__dirname, "Logs"))){
    fs.mkdirSync(path.join(__dirname, "Logs"))
}

process.chdir(path.join(__dirname, "Logs"))

for (let i=0;i<=9;i++){
    let fileName=`Log${i}.txt`
    let filePath=path.join(__dirname, `Logs/${fileName}`)
    fs.writeFileSync(filePath, `This is log file number ${i}`)
    console.log(`${fileName}`)
}