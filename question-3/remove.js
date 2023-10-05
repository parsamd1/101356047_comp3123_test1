const path=require('path')
const fs=require('fs')

Logsdir=path.join(__dirname, 'Logs')

if (fs.existsSync(Logsdir)){
    var files=fs.readdirSync(Logsdir)

    // files.forEach((file)=>console.log(file))

    files.forEach(file=>{fs.unlinkSync(path.join(Logsdir, file)); console.log(`delete files...${file}`)})

    fs.rmdirSync(Logsdir)

}
else {
    console.log("Logs directory does not exist")
}